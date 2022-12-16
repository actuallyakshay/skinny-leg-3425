import React from "react";
import { Box } from "@chakra-ui/react";
import "./CustoServices.css";

const Services = () => {
  return (
    <Box>
      <Box className="cuto_services_box">
        <Box className="boxforall">
          <Box className="box_one">
            <img
              src="https://assets.pharmeasy.in/web-assets/dist/9407515b.svg?dim=0x72&dpr=1.25&q=100"
              alt="Trusted Labs"
            />
            <p>Trusted Labs</p>
            <Box className="about_it">
              <p>
                Every test booked via PharmEasy is conducted by certified labs
                that are 100% verified and trustworthy.
              </p>
            </Box>
          </Box>
          <Box className="box_one">
            <img src="https://assets.pharmeasy.in/web-assets/dist/0105ddc1.svg?dim=0x72&dpr=1.25&q=100" />
            <p>Home Visit</p>
            <Box className="about_it">
              <p>
                With PharmEasy, you get a FREE sample pick-up* by professional
                phlebotomists from your home or preferred location.
              </p>
            </Box>
          </Box>
          <Box className="box_one">
            <img src="https://assets.pharmeasy.in/web-assets/dist/fc71c500.svg?dim=0x72&dpr=1.25&q=100" />
            <p>Timely and Accurate Reports</p>
            <Box className="about_it">
              <p>
                Once collected, samples will be sent to labs for processing.
                Detailed reports will be shared within a stipulated timeline.
              </p>
            </Box>
          </Box>
          <Box className="box_one">
            <img src="https://assets.pharmeasy.in/web-assets/dist/4a11ac5a.svg?dim=0x72&dpr=1.25&q=100" />
            <p>Up to 70% OFF</p>
            <Box className="about_it">
              <p>
                At PharmEasy, you save at every step! On diagnostic tests, get
                up to 70% OFF on various tests and test packages.
              </p>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Services;
