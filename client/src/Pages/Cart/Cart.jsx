import {
  Box,
  Button,
  Flex,
  Image,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";
import { CartCard } from "./CartCard";
import item from "../SinglePage/ayurvedic.json";
import { Coupon } from "./Coupon";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

export const Cart = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const dispatch = useDispatch();
  const toast = useToast();

  const { userToken } = useSelector((state) => state?.authReducer);

  const handleAddToCart = (product, quantity) => {
    let type;
    if (quantity == -1) {
      type = "dec";
    } else {
      type = "inc";
    }
    let body = {
      product,
      quantity,
      type,
    };
    axios
      .post(`${process.env.REACT_APP_URL}/cart`, body, {
        headers: userToken,
      })
      .then((res) => {
        
        if (res.data === "Token missing") {
          toast({
            title: `${res.data}`,
            status: "warning",
            position: "top",
            duration: 2000,
            isClosable: true,
          });
        } else {
          toast({
            title: `${res.data}`,
            status: "success",
            position: "top",
            duration: 2000,
            isClosable: true,
          });
        }
      })
      .catch((e) =>
        toast({
          title: `${e.message}`,
          status: "error",
          position: "top",
          duration: 2000,
          isClosable: true,
        })
      );
  };

  const total =
    item?.reduce((acc, el) => acc + el.price1 * el.quantity, 0).toFixed(2) || 0;
  const mrp =
    item?.reduce((acc, el) => acc + el.price2 * el.quantity, 0).toFixed(2) || 0;
  return (
    <Flex
      justify={"space-between"}
      mt="104px"
      w="full"
      p={{ base: "1%", md: "4%" }}
      flexDir={{ base: "column", lg: "row" }}
      gap="10px"
    >
      <Box
        w={{ base: "100%", lg: "60%" }}
        border="1px solid #d7dfe5"
        borderRadius={"xl"}
      >
        <Flex
          w="full"
          borderBottom={"1px solid #d7dfe5"}
          p="20px"
          justify={"space-between"}
        >
          <Text fontWeight={"semibold"}>
            {item?.length || 0} Items in your Cart
          </Text>
          <Flex
            color={"teal"}
            align="center"
            whiteSpace={"nowrap"}
            gap="1"
            cursor={"pointer"}
          >
            <Text>
              <AiOutlineHeart />
            </Text>
            <Text>Saved for Later</Text>
          </Flex>
        </Flex>
        <Box w="100%">
          {/* <CartCard {...data[0]} />
          <CartCard {...data[0]} /> */}
          {item ? (
            item.map((el) => (
              <CartCard handleAddToCart={handleAddToCart} {...el} />
            ))
          ) : (
            <Flex
              justify={"center"}
              flexDir="column"
              align="center"
              w="full"
              h="400px"
            >
              <Image src="https://assets.pharmeasy.in/web-assets/images/emptyCart.png"></Image>
              <Text w="full" textAlign={"center"} color={"#4f585e"}>
                Your Medicine/Healthcare cart is empty!
              </Text>
            </Flex>
          )}
        </Box>
      </Box>
      <Box w={{ base: "100%", lg: "38%" }}>
        <Box
          w="full"
          border="1px solid #d7dfe5"
          borderRadius={"xl"}
          h="max-content"
        >
          <Box borderBottom={"1px solid #d7dfe5"} p="20px">
            <Text fontWeight={"semibold"}>Cart Total : ₹{total}</Text>
          </Box>
          <Box p="20px">
            {total ? (
              <Flex
                w="full"
                justify={"space-between"}
                border="1px solid #d7dfe5"
                align={"center"}
                px="15px"
                py="5px"
                borderRadius={"lg"}
                cursor={"pointer"}
                onClick={onOpen}
              >
                <Flex align={"center"} gap="10px">
                  <Image src="https://assets.pharmeasy.in/web-assets/images/cartCoupon.svg"></Image>
                  <Text>Apply Coupons</Text>
                </Flex>
                <IoIosArrowForward />
              </Flex>
            ) : (
              <Button
                w="full"
                disabled={total === 0}
                colorScheme={"blackAlpha"}
              >
                Proceed to Checkout
              </Button>
            )}
            {item?.address ? (
              <Box>
                <Text>item.address[0]</Text>
              </Box>
            ) : (
              <Button w="full" colorScheme={"teal"} mt="10px">
                Add Delivery Address
              </Button>
            )}
          </Box>
        </Box>
        <Box
          w="full"
          border="1px solid #d7dfe5"
          borderRadius={"xl"}
          h="max-content"
          mt="20px"
        >
          <Box p="20px">
            <Text fontWeight={"semibold"}>Bill Summary</Text>
            <Flex
              w="full"
              borderBottom="1px solid #d7dfe5"
              pb="20px"
              mt="20px"
              justify={"space-between"}
            >
              <Text>Cart Value</Text>
              <Text color={"#6e787e"}>
                <del>₹{mrp}</del>
                {` `} ₹{total}
              </Text>
            </Flex>
          </Box>
          <Flex px="20px" pb="20px" w="full" justify={"space-between"}>
            <Text fontWeight={"semibold"}>Amount to be paid </Text>
            <Text>₹{total}</Text>
          </Flex>
        </Box>
      </Box>
      <Coupon isOpen={isOpen} btnRef={btnRef} onClose={onClose} />
    </Flex>
  );
};
