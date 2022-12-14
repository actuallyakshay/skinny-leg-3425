import React from "react";
import { Box } from "@chakra-ui/react";
import "./PatientsSlider.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "./pslider/imgfirst.jpg";
import img2 from "./pslider/img2nd.jpg";
import img3 from "./pslider/img3.jpg";
import img4 from "./pslider/img4.png";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <IoIosArrowForward
      className={className}
      style={{
        ...style,
        display: "block",
        color: "black",
        height: "2rem",
        marginRight: "1rem",
        background: "none",
        width: "2rem",
        zIndex: 50,
      }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <IoIosArrowBack
      className={className}
      style={{
        ...style,
        display: "block",
        marginLeft: "1rem",
        background: "none",
        color: "black",
        height: "2rem",
        width: "2rem",
        zIndex: 50,
      }}
      onClick={onClick}
    />
  );
}

const OurPatientsSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
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
            <Slider {...settings}>
              {Images.map((e) => {
                return <img src={e} style={{ height: "10rem" }} alt="" />;
              })}
            </Slider>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default OurPatientsSlider;
