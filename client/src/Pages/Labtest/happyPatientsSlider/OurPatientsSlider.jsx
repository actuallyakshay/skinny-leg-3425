import React from "react";
import { Box, Image } from "@chakra-ui/react";
import "./PatientsSlider.css";
import img1 from "./pslider/imgfirst.jpg";
import img2 from "./pslider/img2nd.jpg";
import img3 from "./pslider/img3.jpg";
import img4 from "./pslider/img4.png";
import { Carousel1 } from "../../Home/Components/Carousels/Carousel1";

const OurPatientsSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    pauseOnHover: true,
    arrow: false,
  };
  const Images = [img1, img2, img3, img4];
  return (
    <Box>
      <Box className="our_happy_patients_div">
        <Box className="happypatientsbox">
          <Box className="firstbox">
            <p className="hap">Our Happy Patients</p>
          </Box>

          <Box>
            <Carousel1 setting={settings}>
              {Images.map((e) => {
                return <Image key={e} src={e} />;
              })}
            </Carousel1>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default OurPatientsSlider;
