import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { Outlet } from "react-router-dom";

export const SinglePage = () => {
  return (
    <Flex w="full" bg="#fff" h="100vh" mt="104" className="sidebar">
      <Box w="70%">
        <Outlet />
      </Box>
      <Box w="30%">Cart</Box>
    </Flex>
  );
};
