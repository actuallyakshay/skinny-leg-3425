import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

export const LabtextCard = ({ off, title, des, cmrp, mrp, src, i }) => {
  return (
    <Box
      bg={i % 2 === 0 ? "#fff2e8" : "#ebf2ff"}
      p={{ base: "10px", lg: "20px" }}
      borderRadius="lg"
    >
      <Box
        bg="red.400"
        w={"max-content"}
        py="4px"
        px="8px"
        borderRadius={"md"}
        color={"white"}
      >
        {off}
      </Box>
      <Text
        fontWeight={"semibold"}
        h="50px"
        whiteSpace={"pre-wrap"}
        overflow="hidden"
        my="10px"
      >
        {title}
      </Text>
      <Box
        my="10px"
        h={{ base: "80px", md: "auto", lg: "50px" }}
        overflow="hidden"
      >
        {des}
      </Box>
      <Flex justify="space-between" w="full" pt="10px">
        <Box fontSize={{ base: "15px", lg: "20px" }}>
          <Box my="10px" color="gray.600">
            <del>{cmrp}</del>
          </Box>
          <Box>{mrp}</Box>
        </Box>
        <Box w={"100px"}>
          <Image src={src}></Image>
        </Box>
      </Flex>
    </Box>
  );
};
