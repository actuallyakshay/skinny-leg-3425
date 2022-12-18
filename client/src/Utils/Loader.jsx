import { Box, Flex, Image } from "@chakra-ui/react";
import React from "react";

function Loader() {
  return (
    <Flex
      alignItems={"center"}
      justifyContent="center"
      w="85vw"
      h="85vh"
      bgColor="white"
    >
      <Image src="https://icons8.com/preloaders/preloaders/831/Pinwheel.gif" />
    </Flex>
  );
}

export default Loader;
