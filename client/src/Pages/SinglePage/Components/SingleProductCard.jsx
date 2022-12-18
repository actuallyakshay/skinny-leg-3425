import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
const setting = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  cssEase: "linear",
  initialSlide: 0,
};
export const SingleProductCard = ({
  title,
  link,
  brand,
  price,
  mrp,
  off,
  image,
}) => {
  let img = image;
  console.log(typeof image);
  if (typeof image === "string") img = [image];
  return (
    <Flex
      flexDir={{ base: "column", lg: "row" }}
      gap={{ base: "1", md: "2", lg: "3" }}
      w="95%"
      m="auto"
    >
      <Box w={["100%", "100%", "100%", "40%", "35%", "30%"]} p="10px" m="auto">
        <Box>
          <Slider
            {...setting}
            customPaging={(i) => {
              return (
                <Box
                  border={"1px solid #d7dfe5"}
                  borderRadius="md"
                  key={i + "single_img"}
                >
                  <Image
                    w="50px"
                    h="50px"
                    objectFit={"contain"}
                    src={img[i]}
                  ></Image>
                </Box>
              );
            }}
            dotsClass="slick-dots custom-indicator"
          >
            {img?.map((el, i) => (
              <Box
                w="260px"
                h="260px"
                p="20px"
                border={"1px solid #d7dfe5"}
                borderRadius="lg"
                key={i + "small_img"}
              >
                <Image
                  w="100%"
                  h="100%"
                  objectFit={"contain"}
                  src={el}
                  key={el}
                />
              </Box>
            ))}
          </Slider>
        </Box>
      </Box>
      <Box
        w={{ base: "100%", lg: "full" }}
        mx="auto"
        p="10px"
        mt={{ base: "40px", lg: "0" }}
      >
        <Text fontWeight={"semibold"} fontSize="20px">
          {title}
        </Text>
        <Link to={link}>
          <Text py="6px" color="teal">
            Visit {brand} Store
          </Text>
        </Link>
        <Flex
          justify={"space-between"}
          textTransform="uppercase"
          w="95%"
          align={"center"}
        >
          <Box>
            <Flex whiteSpace={"nowrap"} gap="2">
              <Text>{price}</Text>
              {mrp ? (
                <Flex color={"gray.500"}>
                  MRP <del>{mrp}</del>
                </Flex>
              ) : (
                ""
              )}
              {off ? <Text className="off">{off}% off</Text> : ""}
            </Flex>
            <Text mt="-4px" color={"gray.500"} fontSize={"8px"}>
              Inclusive of all taxes
            </Text>
          </Box>
          <Button display={{ base: "none", lg: "block" }} colorScheme={"teal"}>
            Add to Cart
          </Button>
        </Flex>

        <Box fontSize={"14px"} mt="5px">
          Delivery by <strong>Tomorrow, before 10:00 pm</strong>
        </Box>
      </Box>
      <Button
        w="98%"
        mx="auto"
        display={{ base: "block", lg: "none" }}
        colorScheme={"teal"}
      >
        Add to Cart
      </Button>
    </Flex>
  );
};
