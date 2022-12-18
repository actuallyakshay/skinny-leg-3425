import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";

export const ArticleCard = ({ src, title }) => {
  return (
    <Box h="310px" w="350px">
      <Box
        h="300px"
        cursor={"pointer"}
        _hover={{
          boxShadow:
            "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;",
        }}
        border={"1px solid #d7dfe5"}
        borderRadius="lg"
        transition={"all"}
        transitionDuration={"500ms"}
      >
        <Box>
          <Image borderTopRadius={"lg"} w="100%" src={src}></Image>
        </Box>
        <Box color={"gray.600"} textAlign={"left"} mx="10px">
          <Text fontWeight={"semibold"} mt="10px">
            {title}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};
