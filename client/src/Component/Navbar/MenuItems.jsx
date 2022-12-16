import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

export const MenuItems = ({ icon, title, sub, weight, size }) => {
  return (
    <Flex
      fontSize={size ? size : "16px"}
      align="center"
      gap="3"
      py="8px"
      px="20px"
      cursor={"pointer"}
    >
      <Box>{icon}</Box>
      <Box>
        <Text fontWeight={weight ? weight : "semibold"}>{title}</Text>{" "}
        <Text fontSize={"10px"} color="red">
          {sub}
        </Text>
      </Box>
    </Flex>
  );
};