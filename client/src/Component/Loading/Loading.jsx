import { Flex, Heading, Image } from "@chakra-ui/react";

export const Loading = () => {
  return (
    <Flex width="100%" h="70vh" bg="#f3f3f3" justify="center" align="center">
      <Flex
        w="40%"
        minW="200px"
        bg="#fff"
        h={"300px"}
        borderRadius="25px"
        shadow={"xl"}
        justify="center"
        align="center"
        direction="column"
      >
        <Heading w="fit-content">Please Wait</Heading>
        <Image
          src="https://cdn.dribbble.com/users/2046015/screenshots/5973727/06-loader_telega.gif"
          w="250px"
        />
      </Flex>
    </Flex>
  );
};
