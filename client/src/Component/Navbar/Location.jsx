import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputRightAddon,
} from "@chakra-ui/react";
import React from "react";

export const Location = () => {
  return (
    <Box>
      <Box p="6">
        <Heading color={"blackAlpha.700"}>Choose your Location</Heading>
      </Box>
      <Box px={8} h="45px">
        <Flex
          outline="1px solid grey"
          borderRadius={"md"}
          borderRight="none"
          w="full"
          h="full"
          justify={"flex-end"}
        >
          <Input px="2" type="tel" variant={"unstyled"} />
          <Button
            m="0"
            colorScheme={"teal"}
            px="8"
            h="full"
            borderRadius={"md"}
            borderLeftRadius="none"
          >
            Check
          </Button>
        </Flex>
      </Box>
      <Box>
        <Box>Login to View Addresses</Box>
        <Box></Box>
        <Box></Box>
      </Box>
    </Box>
  );
};
