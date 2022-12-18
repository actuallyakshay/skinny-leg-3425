import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const SProductCard = ({ src, title, cprice, price, off, link }) => {
  return (
    <Box h="310px" w="210px">
      <Box
        w="200px"
        h="300px"
        _hover={{
          boxShadow:
            "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;",
        }}
        border={"1px solid #d7dfe5"}
        borderRadius="lg"
        transition={"all"}
        transitionDuration={"500ms"}
      >
        <Link to={link}>
          <Box px="20px" py="12px" w="full" h="140px">
            <Image w="100%" h="100%" objectFit={"contain"} src={src}></Image>
          </Box>
          <Box textAlign={"left"} mx="10px">
            <p className="cardname">{title}</p>

            <p>
              MRP <del>₹{cprice}</del>
            </p>
            <Flex gap="2" flexWrap={"wrap"}>
              <Text>₹{price}</Text>
              <Text color={"red"}>{off} % OFF</Text>
            </Flex>
          </Box>
        </Link>
        <Button my="10px" h="34px" colorScheme={"teal"}>
          Add
        </Button>
      </Box>
    </Box>
  );
};
