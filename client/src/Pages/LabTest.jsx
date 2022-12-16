import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Text,
} from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import img1 from "./labtest IMG/IMAGES1.PNG";
import img2 from "./labtest IMG/IMAGES2.PNG";
import img3 from "./labtest IMG/IMAGES3.PNG";
import img4 from "./labtest IMG/IMAGES4.PNG";
import img5 from "./labtest IMG/IMAGES5.PNG";
import img6 from "./labtest IMG/IMAGES6.PNG";
import img7 from "./labtest IMG/monsoon fever packege.jpg";
import saveper from "./all faci/save 5percent.jpg";
import "./LabTest.css";
import styles from "../Styles/OrderMedicine.module.css";
import { Link } from "react-router-dom";
import OurPatientsSlider from "./happyPatientsSlider/OurPatientsSlider";
import { FacilitySlider } from "./facilityProviderSlider/FacilitySlider";
import Services from "./CustomerService/Services";
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
export const LabTest = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "160px",
    slidesToShow: 1,
    speed: 500,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <>
      <Box className="sliderbox">
        <Slider {...settings} className="sliderimg">
          <div>
            <img
              src={img1}
              alt=""
              style={{
                height: "18rem",
                width: "90%",
                margin: "auto",
                backgroundSize: "cover",
              }}
            />
          </div>
          <div>
            <img
              src={img2}
              alt=""
              style={{ height: "18rem", width: "90%", margin: "auto" }}
            />
          </div>
          <div>
            <img
              src={img3}
              alt=""
              style={{ height: "18rem", width: "90%", margin: "auto" }}
            />
          </div>
          <div>
            <img
              src={img4}
              alt=""
              style={{ height: "18rem", width: "90%", margin: "auto" }}
            />
          </div>
          <div>
            <img
              src={img5}
              alt=""
              style={{ height: "18rem", width: "90%", margin: "auto" }}
            />
          </div>
          <div>
            <img
              src={img6}
              alt=""
              style={{ height: "18rem", width: "90%", margin: "auto" }}
            />
          </div>
          <div>
            <img
              src={img7}
              alt=""
              style={{ height: "18rem", width: "90%", margin: "auto" }}
            />
          </div>
        </Slider>
      </Box>
      <Box className="main_div">
        <Box className="all_things">
          <Link to={"/all-tests"} className="allboxes">
            <img
              src="https://assets.pharmeasy.in/web-assets/dist/6b3d644c.svg"
              alt="all test"
            />
            <p>All Tests</p>
          </Link>
          <Link to={"/Healthpackages"} className="allboxess">
            <img
              src="https://assets.pharmeasy.in/web-assets/dist/dea295a0.svg"
              alt=""
            />
            <p>Health <br/>packages</p>
          </Link>
          <Link to={""} className="allboxess">
            <img
              src="https://assets.pharmeasy.in/web-assets/dist/d4d62fbf.svg"
              alt="upload Precription"
            />
            <p>Upload <br/> Precription</p>
          </Link>
          <Link to={""} className="allboxes">
            <img
              src="https://assets.pharmeasy.in/web-assets/dist/4ed59722.svg"
              alt="Book on Call"
            />
            <p>Book on Call</p>
          </Link>
        </Box>
        <Box className="saveperdiv">
          <img src={saveper} alt="" />
        </Box>
        {/* Previously Browsed By You */}
        <Box className="previouslydiv ">
          <Text className="pre">Previously Browsed By You</Text>
          <Box className="browseddiv ">
            <Link to={"/rtpcr"} className="body_checkdiv1">
              <img
                src="https://assets.pharmeasy.in/web-assets/dist/dea295a0.svg"
                alt="full body checkup"
              />
              <p>Comprehensive Full Body Checkup with Vitamin D & B12</p>
              <p className="avai">Available at 1 certified lab</p>
              <p className="test">Includes 87 tests</p>
              <p className="testprice">₹1,499 onwards</p>
            </Link>
            <Link to={"/rtpcr"} className="body_checkdiv2">
              <img
                src="https://assets.pharmeasy.in/web-assets/dist/6b3d644c.svg"
                alt="full body checkup"
              />
              <p>Covid-19 RTPCR (Coronavirus SARS - CoV2)</p>
              <p className="avai">Available at 1 certified lab</p>
              <p className="testprice">₹1,499 onwards</p>
            </Link>
            <Link to={"/rtpcr"} className="body_checkdiv2">
              <img
                src="https://assets.pharmeasy.in/web-assets/dist/dea295a0.svg"
                alt="full body checkup"
              />
              <p>Arthritis Screening Health Checkup</p>
              <p className="avai">Available at 1 certified lab</p>
              <p className="test">Includes 37 tests</p>
              <p className="testprice">₹999 onwards</p>
            </Link>
          </Box>
        </Box>
        {/* Certified Partner Labs */}
        <Box className="certifiedpartner">
          <p className="textcerti">Certified Partner Labs</p>
          <Box className="partnerlabsdiv">
            <Link to="/labdetails" className="covidrtpcr">
              <img
                src="https://s3.ap-south-1.amazonaws.com/pe-neon-public/diagnostics/production/CompanyLogo/c1e61675f13e3744a29aca8e1a481c4c.png"
                alt="full body checkup"
              />
              <p className="rtpcr">PharmEasy Labs (Covid RTPCR)</p>
              <p className="certified">NABL, CAP Certified</p>
            </Link>
            <Link to={"/labdetails"} className="covidrtpcr">
              <img src="https://s3.ap-south-1.amazonaws.com/pe-neon-public/diagnostics/production/CompanyLogo/a0f1970bb7d73fcdbd5f08533a2484f2.png" />
              <p className="rtpcr">PharmEasy Labs (Thyrocare powered)</p>
              <p className="certified"> Certified</p>
            </Link>
          </Box>
        </Box>

        <Box className="lab_test_online_div">
          <h3 className="lab_tests_online">
            The (Pharm)Easy Way To Book Lab Tests Online
          </h3>
          <Box className="Book_Diagnostics">
            Book Diagnostics Lab Test Online. Get doorstep sample collection
          </Box>

          <Box className="booking_made_simple">
            <h2>Lab Test Booking Made Simple</h2>
            <Box className="span_box">
              <span>
                One of the most popular services PharmEasy offers is diagnostic
                testing. People need to book pathological tests for many
                reasons. But before booking, they wonder if the "
                <b>diagnostic centre</b>" can be trusted to produce accurate
                results and how long they might have to wait in a queue to get
                tested.
              </span>
            </Box>

            <Box className="secondparadiv">
              <span className="secondspan">
                To bypass these hassles, PharmEasy has set up an extensive
                network of reputed "<b>pathological laboratories</b>" in India.
                One such lab is Thyrocare. With Thyrocare on board, we can give
                you access to a wide network of diagnostic laboratories.We also
                offer a "<b>home collection of samples</b>" as well. Bid adieu
                to anxious days of wondering where to book diagnostic tests and
                embrace the PharmEasy way.
              </span>
            </Box>
          </Box>

          <Box className="thirdparadiv">
            <h2>Lab tests at your doorstep</h2>
            <Box className="doorstep">
              <span className="thirdspan">
                To ease your anxieties, PharmEasy offers the facility of
                doorstep collection. The technician will come to your house to
                collect samples. And all safety precautions are maintained. A
                fresh collection kit and/or needle will be used so that there is
                no contamination of samples of the spread of diseases. We use
                special ice boxes that meet NABL guidelines to transport your
                samples. The reports will be sent to you online. That means you
                won’t have to travel to the diagnostic lab to collect your
                reports.
              </span>
            </Box>
          </Box>

          <Box className="fourthparadiv"></Box>
          <h2 className="diagnosticonline">
            How can you book diagnostic tests online?
          </h2>

          <Box className="fourthspan">
            <span>Booking a test on PharmEasy is simple</span>
          </Box>

          <Box className="pointsdiv1">
            <span>
              <Link className="visit" to={""}>
                Visit https://pharmeasy.
              </Link>
              or click on Lab Tests on the PharmEasy website or app.
            </span>
          </Box>
          <Box className="pointsdiv1">
            <span>
              Upload your prescription or choose the lab test from the search
              box.
            </span>
          </Box>

          <Box className="pointsdiv1">
            <span>
              Alternatively, you can call our customer service team on
              7022000900 and they will make the booking for you
            </span>
          </Box>

          <Box className="pathologytestdiv">
            Looking to book a pathology test? Here’s how PharmEasy can help!
          </Box>

          <Box className="fifthparadiv">
            <span>
              Online diagnostic tests work as smoothly as clockwork. Once you’ve
              booked the "<b>pathology test</b>" you need with the "
              <b>diagnostic centre</b> " you prefer, you will get a confirmation
              on your registered e-mail id and SMS. The backend support team
              might also call you to confirm the booking.Post this our expert
              technician will arrive at your place at the selected slot and
              collect your sample for processing at our state of the art labs.
              Reports will be shared with you over SMS and will also be
              available in your account on app/web.
            </span>
          </Box>

          <Box className="whychoosepharmEasy">
            Why choose PharmEasy to book lab tests?
          </Box>

          <Box className="sixthpartdiv">
            We can give you reasons galore for choosing PharmEasy-
          </Box>
          <Box className="somepoint">
            <p>2 Lac+ happy customers</p>
            <p>Safe home sample collection</p>
            <p>Up to 70% OFF</p>
            <p>Certified & 100% Automated labs</p>
            <p>Timely and accurate reports</p>
            <p>500+ tests and health packs to choose from</p>
          </Box>

          <Box className="lastdiv">
            Now that you know why PharmEasy can be your trusted diagnostic test
            booking partner, don’t wait, download the PharmEasy app today and
            book a health check right away.
          </Box>
        </Box>

        <Box className="faqdiv">Frequently Asked Questions</Box>

        <Accordion style={{ margin: "1rem" }} defaultIndex={[0]} allowMultiple>
          <AccordionItem className="acco2">
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  What are the covid precautions PharmEasy is taking for the
                  testing purpose?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel color={"#8897a2"} pb={4}>
              PharmEasy takes safety of our patients and staff very seriously.
              Which is why since the onset of COVID-19, we formulated a 5-step
              safety program to offer 100% protection to all stakeholders..
              Along with this, NABL guidelines are followed to ensure samples
              are not corrupted during collection, transportation or storage.
              Here are the safety measures that we adhere to-Vigilance about
              face masksHand hygiene including sanitization and wearing of
              glovesFrequent thermal checksHygienic sample collectionCareful
              disposal of wasteCheck flu symptoms with patients
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem className="acco2">
            <h2>
              <AccordionButton className="btn">
                <Box flex="1" textAlign="left">
                  Are the phlebotomists sufficiently qualified?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel color={"#8897a2"} pb={1}>
              PharmEasy owns 18 state-of-the-art diagnostic laboratories in the
              country with an inhouse fleet of 500 phlebotomists across 2500+
              pincodes. We have a dedicated training team for the technicians
              which constantly track their performance on parameters like on
              time arrival, painless collection, adherence to NABL guidelines
              for sample storage & transport and customer support. We have a
              very strict hiring process which ensures that every sample
              collection experience is best in class.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem className="acco2">
            <h2>
              <AccordionButton className="btn">
                <Box flex="1" textAlign="left">
                  How efficient is the sample collection and analysis process?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel color={"#8897a2"} pb={1}>
              Utmost care is taken to collect samples while maintaining complete
              hygiene. Only new and fresh collection kits and needles are used.
              After collection, the sample is immediately transferred into an
              icebox to prevent degradation and bacterial build-up which may
              lead to inaccurate diagnosis. The samples are barcode tagged to
              prevent mix up and in the laboratories, technicians use high-end,
              state-of-the-art devices to analyse the samples.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem className="acco2">
            <h2>
              <AccordionButton className="btn">
                <Box flex="1" textAlign="left">
                  Why are lab tests essential?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel color={"#8897a2"} pb={1}>
              Lab tests or diagnostic tests are recommended by doctors when they
              suspect that there might be something wrong with your health.
              Samples of your blood, stool, urine, or mucus can reveal a lot
              about the state of your health when analysed with special devices.
              Once the problem is detected, your doctor can diagnose and put you
              on medication or suggest a course of treatment.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem className="acco2">
            <h2>
              <AccordionButton className="btn">
                <Box flex="1" textAlign="left">
                  How long does it take for the report to be delivered?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel color={"#8897a2"} pb={1}>
              It takes 24-48 hours for the lab to prepare your report and have
              it delivered to you.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem className="acco2">
            <h2>
              <AccordionButton className="btn">
                <Box flex="1" textAlign="left">
                  How should one prepare for a lab test?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel color={"#8897a2"} pb={1}>
              Different tests have different requirements. Some may need to be
              on an empty stomach whereas, for some other tests, you may need to
              consume food before the sample is collected. Speak with your
              doctor regarding what you need to do to prepare for a lab test.
              Let your doctor know if you are already on any medication.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem className="acco2">
            <h2>
              <AccordionButton className="btn">
                <Box flex="1" textAlign="left">
                  How are lab test reports interpreted?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel color={"#8897a2"} pb={1}>
              The reports that our labs will deliver to you will be quite
              detailed. There will be charts of reference ranges to help you
              understand the report and a statement from a qualified doctor.
              But, once you receive your report, it is best to consult your
              doctor and ask him/her to explain it to you.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem className="acco2">
            <h2>
              <AccordionButton className="btn">
                <Box flex="1" textAlign="left">
                  If the lab test results are within normal range, does that
                  mean no illness has been detected?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel color={"#8897a2"} pb={1}>
              If your reports are within normal range, it is certainly good
              news. But normal results do not always give you a clean bill of
              health. If symptoms persist, your doctor will recommend other
              tests to detect what is triggering the unusual signs.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
      <OurPatientsSlider />
      <FacilitySlider />
      <Services />

      <div className="appdiv">
        <div className={styles.bottom_2}>
          <div className={styles.bottom_21}>
            <img
              src="https://assets.pharmeasy.in/web-assets/_next/icons/footerMobile.jpg"
              alt=""
            />
          </div>
          <div className={styles.bottom_22}>
            <p>Download the App for Free</p>
            <div>
              <div>
                <a
                  href="https://play.google.com/store/apps/details?id=com.phonegap.rxpal&hl=en_IN&gl=US&utm_source=web&utm_medium=footer"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://www.idfcfirstbank.com/content/dam/IDFCFirstBank/apple-store-icon.svg"
                    alt=""
                  />
                </a>
              </div>
              <div>
                <a
                  href="https://apps.apple.com/in/app/pharmeasy-healthcare-app/id982432643"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://www.idfcfirstbank.com/content/dam/IDFCFirstBank/android-store-icon.svg"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};