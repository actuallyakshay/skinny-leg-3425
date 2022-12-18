import {
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  HStack,
  Image,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import offer from "../Offers/Offerdata.json";
export const Coupon = ({ isOpen, onClose, btnRef, apply }) => {
  const [data, setData] = useState(offer);
  const [couponcode, setCouponCode] = useState("");

  const handleSearch = () => {
    const data = offer.filter((el) => el.Code === couponcode);
    setData(data);
    console.log(data);
  };

  return (
    <Drawer
      isOpen={isOpen}
      placement="right"
      onClose={onClose}
      finalFocusRef={btnRef}
      size="md"
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader borderBottom={"1px solid #d7dfe5"} p="20px">
          <Flex w="full" align={"center"} justify={"space-between"}>
            <Text fontSize={"26px"}>Apply Coupon</Text>{" "}
            <Box onClick={onClose}>
              <RxCross1 />
            </Box>
          </Flex>
        </DrawerHeader>

        <DrawerBody p="30px">
          <Flex
            w="full"
            border={"1px solid #d7dfe5"}
            p="10px"
            borderRadius={"lg"}
          >
            <Input
              w="full"
              variant={"unstyled"}
              placeholder="Enter Coupon Code"
              value={couponcode}
              onChange={(e) => setCouponCode(e.target.value)}
            ></Input>{" "}
            <Text
              fontWeight={"semibold"}
              color={"#62bf9f"}
              _hover={{ color: "#45a081" }}
              onClick={handleSearch}
              cursor="pointer"
            >
              Search
            </Text>
          </Flex>
          {couponcode ? (
            <Text
              pr="5px"
              textAlign={"right"}
              cursor={"pointer"}
              onClick={() => {
                setData(offer);
                setCouponCode("");
              }}
              _hover={{ letterSpacing: "5px" }}
              transition="all"
              transitionDuration={"300ms"}
            >
              Clear
            </Text>
          ) : (
            ""
          )}
          <Flex mt="20px" gap="3" flexDir={"column"}>
            {data.length > 0 ? (
              data.map((el, i) => {
                return (
                  <Box key={i + "offerkey"}>
                    <Flex
                      border={"1px solid #d7dfe5"}
                      borderRadius="lg"
                      borderBottom="none"
                      p="20px"
                    >
                      <HStack>
                        <Image w="18%" p={3} src={el?.image} />
                        <VStack align={"flex-start"} justify="space-between">
                          <Text
                            fontWeight="semibold"
                            color="#4f585e"
                            fontSize="18px"
                          >
                            {el?.title}
                          </Text>
                          <Text fontSize="14px" lineHeight="1.5" w="80%">
                            {el?.coupon}
                          </Text>
                        </VStack>
                      </HStack>
                    </Flex>
                    <Flex
                      border="1px solid #d7dfe5"
                      px="10px"
                      py="10px"
                      borderRadius="lg"
                      w="full"
                      justify={"space-between"}
                    >
                      <p>
                        Code :{" "}
                        <strong style={{ color: "#4f585e" }}>{el?.Code}</strong>
                      </p>
                      <Text
                        fontWeight={"semibold"}
                        color={"#62bf9f"}
                        _hover={{ color: "#45a081" }}
                        onClick={apply}
                        cursor="pointer"
                      >
                        Apply
                      </Text>
                    </Flex>
                  </Box>
                );
              })
            ) : (
              <Box border={"1px solid #d7dfe5"} borderRadius="lg" p="20px">
                No Coupon Found{" "}
              </Box>
            )}
          </Flex>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
