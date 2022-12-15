import { Box, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";

export const Cata = ({ image, title, sub }) => {
  return (
    <VStack
      cursor={"pointer"}
      _hover={{
        boxShadow:
          "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;",
      }}
      px="20px"
      py="10px"
      transition={"all"}
      transitionDuration={"500ms"}
    >
      <Image w="100" h="100" objectFit={"cover"} src={image}></Image>
      <Box textAlign={"center"}>
        <Text fontSize={"18px"} fontWeight={"semibold"}>
          {title}
        </Text>
        <Text fontSize={"12px"} fontWeight="semibold" color={"red.400"}>
          {sub}
        </Text>
      </Box>
    </VStack>
  );
};
