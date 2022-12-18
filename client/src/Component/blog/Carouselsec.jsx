import React, { useState } from "react";
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Container,
} from "@chakra-ui/react";

import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";

import Slider from "react-slick";

const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
};

export default function CaptionCarouselsec() {
  const [slider, setSlider] = useState("");

  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "40px" });

  const cards = [
    {
      image:
        "https://blog-images-1.pharmeasy.in/blog/production/wp-content/uploads/2022/10/28122007/Home-Remedies-3-e1668525781621.jpg",
    },
    {
      image:
        "https://blog-images-1.pharmeasy.in/blog/production/wp-content/uploads/2022/10/03143039/Health-Today-1-2-e1668506427623.jpg",
    },
    {
      image:
        "https://blog-images-1.pharmeasy.in/blog/production/wp-content/uploads/2022/10/03143042/Lifestyle-1-1-e1668506475164.jpg",
    },

    {
      image:
        "https://blog-images-1.pharmeasy.in/blog/production/wp-content/uploads/2022/10/28122034/Chronic-Ailments-1-1-e1668525877831.jpg",
    },
    {
      image:
        "https://blog-images-1.pharmeasy.in/blog/production/wp-content/uploads/2022/11/02074732/Wellness-1-e1668525839475.jpg",
    },
  ];

  return (
    <Box
      position={"relative"}
      height={"300px"}
      width={"90%"}
      overflow={"hidden"}
      gap={6}
    >
      <IconButton
        // aria-label="left-arrow"
        // variant="ghost"
        position="absolute"
        gap={6}
        left={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={1}
        onClick={() => slider?.slickPrev()}
      >
        <BiLeftArrowAlt color="#10847E" size="30px" />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        // aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={1}
        onClick={() => slider?.slickNext()}
      >
        <BiRightArrowAlt color="#10847E" size="30px" />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((card, index) => (
          <Box
            key={index}
            height={"md"}
            borderRadius={"10px"}
            gap={3}
            border="30px solid white"
            padding="30px"
            position="relative"
            // backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${card.image})`}
          >
            <Container size="container.lg" height="50px" position="relative">
              <Stack
                spacing={6}
                w={"20%"}
                maxW={"sm"}
                position="absolute"
                top="50%"
                transform="translate(0, -50%)"
              ></Stack>
            </Container>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
