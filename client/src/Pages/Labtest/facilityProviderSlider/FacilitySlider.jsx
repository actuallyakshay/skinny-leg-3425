import React from "react";
import "./Facility.css";
import { Box, Image } from "@chakra-ui/react";
import img1 from "./facility/img1.png";
import img2 from "./facility/img2nd.png";
import img3 from "./facility/img3.png";
import { Carousel1 } from "../../Home/Components/Carousels/Carousel1";

export const FacilitySlider = () => {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrow: false,
  };
  const images = [img1, img2, img3];
  return (
    <Box>
      <Box className="facility_box">
        <Box className="servic3_box">
          <Carousel1 setting={settings}>
            {images.map((e) => {
              return <Image key={e} src={e} />;
            })}
          </Carousel1>
        </Box>
      </Box>
    </Box>
  );
};
