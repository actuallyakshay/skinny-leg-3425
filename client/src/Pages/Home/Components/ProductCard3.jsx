import { Box, Flex, Image, Text } from "@chakra-ui/react";

export const ProductCard3 = ({ src, title, cprice, price, off }) => {
  return (
    <Box h="180px" w={{ base: "340px", md: "370px", lg: "400px" }}>
      <Flex
        w="full"
        h="170px"
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
        <Box px="20px" py="12px" w="180px">
          <Image w="100%" src={src}></Image>
        </Box>
        <Box textAlign={"left"} mx="10px">
          <Text fontWeight={"semibold"} mt="10px">
            {title}
          </Text>
          <p>
            MRP <del>{cprice}</del>
          </p>
          <Flex flexWrap={"wrap"}>
            <Text>{price}</Text>
            <Text color={"red"}>{off}</Text>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};
