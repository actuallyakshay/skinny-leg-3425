
import React, { useState } from "react";
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
} from "@chakra-ui/react";

import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";

import Slider from "react-slick";


const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function CaptionCarousel() {
  
  
  const [slider, setSlider] = useState("");

  
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "40px" });

  const cards = [
    {
      title: "Eat healthy...",
      text: "How  to natural reduce stress",
      image:
      "https://blog-images-1.pharmeasy.in/blog/production/wp-content/uploads/2022/04/17075609/1.webp",
    },
    {
      title: "  Exercise well....",
      text: "Just Do It",
        image:
        "https://blog-images-1.pharmeasy.in/blog/production/wp-content/uploads/2022/04/17075636/2.webp",
    },
    {
      title: "healty diet...",
      text: "Ofood are main part of life",
      image:
        "https://blog-images-1.pharmeasy.in/blog/production/wp-content/uploads/2022/08/17075827/shutterstock_1035357679-1.webp" ,
       },
       {
        title: " Featured ... ",
        text: "add all the plans.",
        image:
          "https://blog-images-1.pharmeasy.in/blog/production/wp-content/uploads/2022/04/17075702/3-2.webp" ,
         },
         {
          title: "Doctors speaks...",
          text: "Off the Wall.",
          image:"https://blog-images-1.pharmeasy.in/blog/production/wp-content/uploads/2022/04/17075733/6.webp"
            
           },

  ];

  return (
    <Box
      position={"relative"}
      height={"600px"}
      width={"full"}
      overflow={"hidden"}
    >
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickPrev()}
      >
        <BiLeftArrowAlt size="40px" />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickNext()}
      >
        <BiRightArrowAlt size="40px" />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((card, index) => (
          <Box
            key={index}
            height={"6xl"}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${card.image})`}
          >
            {/* This is the block you need to change, to customize the caption */}
            <Container size="container.lg" height="600px" position="relative">
              <Stack
                spacing={6}
                w={"full"}
                maxW={"lg"}
                position="absolute"
                top="50%"
                transform="translate(0, -50%)"
              >
                <Heading fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}  color="#10847E">
                  {card.title}
                </Heading>
                <Text fontSize={{ base: "2xl", lg: "2xl" }} color={"gray"}>
                  {card.text}
                </Text>
              </Stack>
            </Container>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}