import { Box, Image } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
export const OfferCard2 = ({ src, link, border }) => {
  return (
    <Link to={link}>
      <Box>
        <Image
          borderRadius={border ? border : "none"}
          w={{ base: "300px", md: "350px", lg: "450px" }}
          src={src}
        ></Image>
      </Box>
    </Link>
  );
};
