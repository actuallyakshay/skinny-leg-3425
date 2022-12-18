import { Box, Button, Image, Text } from "@chakra-ui/react";
import React, { Component } from "react";
import Slider from "react-slick";

const data = [
  {
    src: "https://cdn01.pharmeasy.in/dam/products_otc/067685/eno-regular-antacid-sachet-of-5-g-2-1669619270.jpg",
    name: "DIGENE ULTRA FIZZ",
    pcs: "1pc",
    amount: "190.00",
  },
  {
    src: "https://cdn01.pharmeasy.in/dam/products_otc/S50332/digene-ultra-fizz-orange-antacid-sachet-of-625-g-2-1653285167.jpg",
    name: "DIGENE ULTRA FIZZ",
    pcs: "1pc",
    amount: "190.00",
  },
  {
    src: "https://cdn01.pharmeasy.in/dam/products_otc/071710/evion-400mg-strip-of-10-capsules-2-1671006786.jpg",
    name: "DIGENE ULTRA FIZZ",
    pcs: "1pc",
    amount: "190.00",
  },
  {
    src: "https://cdn01.pharmeasy.in/dam/products_otc/H73193/3-ply-mask-packet-of-50-2-1654168779.jpg",
    name: "DIGENE ULTRA FIZZ",
    pcs: "1pc",
    amount: "190.00",
  },
  {
    src: "https://cdn01.pharmeasy.in/dam/products_otc/000665/accu-chek-active-glucometer-test-strips-box-of-50-1-1669655023.jpg",
    name: "DIGENE ULTRA FIZZ",
    pcs: "1pc",
    amount: "190.00",
  },
  {
    src: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/1549f8ad-d02d-4dde-aa82-442c0bda498f_425x425.jpg",
    name: "DIGENE ULTRA FIZZ",
    pcs: "1pc",
    amount: "190.00",
  },
  {
    src: "https://cdn01.pharmeasy.in/dam/products_otc/E50255/colgate-vedshakti-mouth-protect-spray-10gm-1-1641789835.jpg",
    name: "DIGENE ULTRA FIZZ",
    pcs: "1pc",
    amount: "190.00",
  },
  {
    src: "https://cdn01.pharmeasy.in/dam/products_otc/O09583/spraymintt-elaichill-spray-bottle-of-15-g-2-1646043158.jpg",
    name: "DIGENE ULTRA FIZZ",
    pcs: "1pc",
    amount: "190.00",
  },
];

export default class CartSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      arrow: false,
    };
    return (
      <Box mb={"20px"}>
        <Slider {...settings}>
          {data.map((el, i) => {
            return (
              <Box
                key={i}
                p={"10px"}
                style={{ height: "100px" }}
                border={"1px solid gray"}
                textAlign="center"
              >
                <Image style={{ height: "200px" }} src={el.src} />
                <Text fontSize={["sm", "lg", "lg"]}>{el.name}</Text>
                <Text fontSize={["sm", "lg", "lg"]}>{el.pcs}</Text>
                <Box display={"flex"} justifyContent={"space-between"}>
                  <Text fontSize={["sm", "md", "lg"]}>₹ {el.amount}</Text>
                  <Button padding={"25px"} bgColor={"#10847E"} color={"white"}>
                    ADD
                  </Button>
                </Box>
              </Box>
            );
          })}
        </Slider>
      </Box>
    );
  }
}
