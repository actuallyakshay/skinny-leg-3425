import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useSelector } from "react-redux";
export const CartCard = ({
  _id,
  image,
  name,
  price1,
  price2,
  off,
  quantity,
  handleDel,
  handleAddToCart,
}) => {
  return (
    <Flex w="full" p="10px" borderBottom={"1px solid #d7dfe5"} gap="2">
      <Box>
        <Image w="120px" h="120px" objectFit={"contain"} src={image}></Image>
      </Box>
      <Box w="80%">
        <Flex justify={"space-between"} w="full" fontWeight={"semibold"}>
          <Text className="cardname" fontSize={"18px"} w="70%">
            {name}
          </Text>
          <Box
            cursor={"pointer"}
            _hover={{ color: "red" }}
            transition="ease-in-out"
            transitionDuration={"300ms"}
            fontSize="20px"
            onClick={handleDel}
          >
            <RiDeleteBin6Line />
          </Box>
        </Flex>
        <Flex w="full" justify={"space-between"} align="center" py="10px">
          <Flex gap="10px" flexWrap={"wrap"}>
            <p style={{ color: "#8897a2" }}>
              MRP <del> ₹{price2}</del>
            </p>
            <Text>₹{price1}</Text>
            {off ? <Text className="off">{off}% OFF</Text> : ""}
          </Flex>
          <Flex gap="2" align={"center"} fontWeight={"bold"} w="max-content">
            <Button
              colorScheme={"blue"}
              borderRadius="50%"
              size={"sm"}
              onClick={() => handleAddToCart(_id, -1)}
            >
              -
            </Button>
            <Text>{quantity || 1}</Text>
            <Button
              colorScheme={"blue"}
              borderRadius="50%"
              size={"sm"}
              onClick={() => handleAddToCart(_id, 1)}
            >
              +
            </Button>
          </Flex>
        </Flex>
        <Text fontSize={"12px"}>
          Delivery by <strong>Tomorrow, before 10:00 pm</strong>
        </Text>
      </Box>
    </Flex>
  );
};
