import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";

export const Cata3 = ({ src, title }) => {
  return (
    <Box h="210px" w="160px">
      <Box
        w="160px"
        h="200px"
        cursor={"pointer"}
        _hover={{
          boxShadow:
            "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;",
        }}
        border={"1px solid #d7dfe5"}
        borderRadius="lg"
        px="20px"
        py="12px"
        transition={"all"}
        transitionDuration={"500ms"}
      >
        <Box w="120px">
          <Image w="100%" src={src}></Image>
        </Box>
        <Text textAlign={"center"} fontWeight={"bold"} mt="10px">
          {title}
        </Text>
      </Box>
    </Box>
  );
};
