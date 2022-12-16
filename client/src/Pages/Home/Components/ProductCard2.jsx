import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

export const ProductCard2 = ({ src, title, link }) => {
  return (
    <Link to={link}>
      <Box w={{ base: "60px", lg: "140px" }} textAlign={"center"}>
        <Box
          borderRadius="full"
          _hover={{
            boxShadow:
              "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;",
          }}
          transition={"all"}
          transitionDuration={"500ms"}
        >
          <Image w="100%" src={src}></Image>
        </Box>
        <Box
          mt="3"
          fontSize={{ base: "9px", lg: "14px" }}
          fontWeight={"semibold"}
        >
          <Text px={{ base: "2px", lg: "10px" }}>{title}</Text>
        </Box>
      </Box>
    </Link>
  );
};
