import { Box, Image } from "@chakra-ui/react";
import React from "react";

export const Cata2 = ({ src, w }) => {
  return (
    <Box w={w}>
      <Image w="100%" objectFit={"cover"} src={src} />
    </Box>
  );
};
