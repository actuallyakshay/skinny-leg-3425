import { Box, Flex, Grid, HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { postCartData } from "../../Redux/Cart/cart.action";

function MedicineComponent({
  _id,
  image,
  name,
  company,
  ingredients,
  price1,
  tablet,
}) {
  const { userToken } = useSelector((state) => state?.authReducer);
  const dispatch = useDispatch();
  const hadleAddtoCart = (product, quantity) => {
    // let body = {
    //   product,
    //   quantity,
    // };
    dispatch(postCartData(product, quantity, userToken));
  };
  return (
    <Grid
      gridTemplateColumns={".5fr 2fr"}
      borderRadius="5px"
      p="2"
      gap="2"
      shadow={"md"}
    >
      <Box h="full">
        <Image src={image} />
      </Box>
      <Flex flexDirection={"column"} gap="1" align={"start"}>
        <Flex w="full" align={"top"}>
          <Text
            fontSize={"14px"}
            letterSpacing=".3px"
            fontWeight={"500"}
            color="blackAlpha.700"
          >
            {name}
          </Text>
          <Box ml="auto">
            <Text
              fontSize={"14px"}
              letterSpacing=".3px"
              fontWeight={"500"}
              color="blackAlpha.700"
            >
              MRP ₹{price1}
            </Text>
          </Box>
        </Flex>
        <HStack>
          <Image src="https://onemg.gumlet.io/w_20,h_20/q_auto,f_auto/rx_icon.png" />
          <Text fontSize={"11px"} color="blackAlpha.700">
            Prescription Required
          </Text>
        </HStack>
        <Text fontSize={"11px"} color="blackAlpha.700">
          {tablet}
        </Text>
        <Text fontSize={"11px"} color="blackAlpha.700">
          {company}
        </Text>
        <Flex w="full">
          <Text
            display="block"
            width={{ base: "100px", md: "150px", lg: "200px" }}
            overflow="hidden"
            whiteSpace="nowrap"
            textOverflow="ellipsis"
            fontSize={"11px"}
            color="blackAlpha.700"
          >
            {ingredients}
          </Text>
          <Box
            _hover={{ cursor: "pointer" }}
            fontWeight={"500"}
            fontSize="15px"
            color="#10847e"
            ml="auto"
            onClick={() => hadleAddtoCart(_id, 1)}
          >
            ADD
          </Box>
        </Flex>
      </Flex>
    </Grid>
  );
}

export default MedicineComponent;
