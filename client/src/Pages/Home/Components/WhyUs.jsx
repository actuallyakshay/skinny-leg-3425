import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

export const WhyUs = ({ src, title, des }) => {
  return (
    <Flex
      p="20px"
      gap="10px"
      justify={"center"}
      align="center"
      border={"1px solid #d7dfe5"}
      borderRadius="lg"
      w="350px"
    >
      <Box w="60px">
        <Image src={src}></Image>
      </Box>
      <Box>
        <Text>{title}</Text>
        <Text>{des}</Text>
      </Box>
    </Flex>
  );
};
