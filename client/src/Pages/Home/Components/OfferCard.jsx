import { Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

export const OfferCard = ({ src, text, link }) => {
  return (
    <Link to={link}>
      <Flex
        w="350px"
        gap="10px"
        border={"1px solid #d7dfe5"}
        borderRadius="lg"
        p="10px"
        _hover={{
          boxShadow:
            "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;",
        }}
        transition={"ease-in-out"}
        transitionDuration="300ms"
      >
        <Image w="50px" src={src}></Image>
        <Text>{text}</Text>
      </Flex>
    </Link>
  );
};
