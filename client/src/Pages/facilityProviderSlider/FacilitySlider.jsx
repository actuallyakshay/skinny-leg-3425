import React from "react";
import "./Facility.css";
import { Box } from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "./facility/img1.png";
import img2 from "./facility/img2nd.png";
import img3 from "./facility/img3.png";
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

export const FacilitySlider = () => {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  const images = [img1, img2, img3];
  return (
    <Box>
      <Box className="facility_box">
        <Box className="servic3_box">
          <Slider {...settings}>
            {images.map((e) => {
              return <img src={e} style={{ width: "10rem" }} alt="" />;
            })}
          </Slider>
        </Box>
      </Box>
    </Box>
  );
};
