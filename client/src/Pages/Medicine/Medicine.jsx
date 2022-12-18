import { Box, Flex, Grid, HStack, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductData } from "../../Redux/products/productAction";
import MedicineComponent from "./MedicineComponent";

const str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const arr = str.split("");

function Medicine() {
  const [temp, setTemp] = useState(0);
  const [alpha, setAlpha] = useState("A");
  const dispatch = useDispatch();
  const productData = useSelector((state) => state?.product?.productData);

  useEffect(() => {
    dispatch(getProductData("medicine", "", "", "", "", "", alpha));
  }, [alpha, dispatch]);

  const handleClick = (el, i) => {
    setTemp(i);
    setAlpha(el);
  };

  return (
    <Box mt="104px" px="3">
      <Box w="full" p="2" shadow={"sm"}>
        <Text
          fontWeight={"400"}
          letterSpacing={".4px"}
          color="blackAlpha.700"
          fontSize={"20px"}
        >
          Medicine Index starting with - {alpha}
        </Text>
      </Box>
      <HStack
        py="3"
        w="full"
        justifyContent={"space-evenly"}
        mt="3"
        shadow={"md"}
        overflowX={{ base: "auto", lg: "none" }}
      >
        {arr?.map((el, i) => {
          return (
            <Flex
              key={i}
              justifyContent={"center"}
              alignItems="center"
              w="35px"
              h="35px"
              border="2px solid #10847e"
              bg={temp === i ? "#10847e" : "white"}
              color={temp === i ? "white" : "#10847e"}
              _hover={{ cursor: "pointer" }}
              onClick={() => handleClick(el, i)}
              fontWeight="500"
              borderRadius={"2px"}
              p={{ base: "18px", lg: "0" }}
            >
              {el}
            </Flex>
          );
        })}
      </HStack>
      <Text
        as="kbd"
        fontWeight={"400"}
        color="blackAlpha.700"
        fontSize={"12px"}
      >
        Showing 1-30 of 819 results
      </Text>
      <Grid
        fontFamily={"poppins"}
        gridTemplateColumns={{
          base: "repeat(1,1fr)",
          md: "repeat(2,1fr)",
          lg: "repeat(3,1fr)",
        }}
        w="full"
        gap="3"
        rowGap={[3, 3, 5, 6]}
      >
        {productData?.map((el, i) => {
          return <MedicineComponent {...el} key={el._id} />;
        })}
      </Grid>
    </Box>
  );
}

export default Medicine;
