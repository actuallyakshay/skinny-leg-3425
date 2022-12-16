import { Box, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";

export const Cata = ({ image, title, sub }) => {
  return (
    <Box my="10px">
      <VStack
        cursor={"pointer"}
        _hover={{
          boxShadow:
            "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;",
        }}
        border={{ base: "1px solid #d7dfe5", lg: "none" }}
        borderRadius="lg"
        px="20px"
        py="12px"
        w="150px"
        transition={"all"}
        transitionDuration={"500ms"}
      >
        <Image w="100%" objectFit={"cover"} src={image}></Image>
        <Box textAlign={"center"}>
          <Text fontSize={"16px"} fontWeight={"semibold"}>
            {title}
          </Text>
          <Text
            fontSize={"12px"}
            fontWeight="semibold"
            color={sub === "." ? "transparent" : "red.400"}
          >
            {sub}
          </Text>
        </Box>
      </VStack>
    </Box>
  );
};
