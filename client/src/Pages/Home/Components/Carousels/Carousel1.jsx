import React, { useRef } from "react";
import Slider from "react-slick";
import "./slick.css";
import "./slick-theme.css";
import { Box } from "@chakra-ui/react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
export const Carousel1 = ({ setting, children }) => {
  const offersliderRef = useRef("");

  return (
    <Box
      w="full"
      mt={{ base: "10px", lg: "20px" }}
      px="10px"
      align={"center"}
      position={"relative"}
    >
      <Box
        left={"-10px"}
        display={["none", "none", "none", "block"]}
        className="cata2btn"
      >
        <Box
          fontSize={"26px"}
          onClick={() => offersliderRef.current.slickPrev()}
          cursor="pointer"
        >
          <IoIosArrowBack />
        </Box>
      </Box>
      <Box w="full" py="10px">
        <Slider ref={offersliderRef} {...setting}>
          {children}
        </Slider>
      </Box>
      <Box pt="10px">
        <Box
          right={"-30px"}
          display={["none", "none", "none", "block"]}
          className="cata2btn"
        >
          <Box
            fontSize={"26px"}
            onClick={() => offersliderRef.current.slickNext()}
            cursor="pointer"
          >
            <IoIosArrowForward />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
