import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Spacer,
  Text,
} from "@chakra-ui/react";

import { IoIosArrowForward } from "react-icons/io";

import styles from "../Styles/offer.module.css";

const Offers = () => {
  return (
    <>
      <Box width="80%" margin="auto">
        <br />
        <Flex gap="1%">
          <Text color="#4f85e" fontSize="12px" lineHeight="1.5">
            Home{" "}
          </Text>
          <IoIosArrowForward style={{ width: "12px", color: "#8897a2" }} />
          <Text color="#8897a2" fontSize="12px" lineHeight="1.5">
            {" "}
            PharmEasy Coupon Codes & Offers
          </Text>
        </Flex>
        <br />
        <Box>
          <Heading
            color="#4f585e"
            marginBottom="5px"
            fontSize="20px"
            fontWeight="700"
            lineHeight="1.5"
          >
            PharmEasy Offers & Coupon Codes
          </Heading>
          <br />
          <Text color="#8897a2" marginBottom="5px">
            PharmEasy is one of India’s leading online healthcare platforms that
            allows you to make great savings on your medicines and healthcare
            needs every day.From finding the prescribed medicine you need to the
            wellness product that is best suitable for you...
          </Text>
          <br />
          <Heading
            color="#4f585e"
            marginBottom="5px"
            fontSize="20px"
            fontWeight="700"
            lineHeight="1.5"
          >
            Download the PharmEasy app today to buy medicines online with great
            savings.
          </Heading>
          <Heading
            color="#4f585e"
            marginBottom="5px"
            fontSize="20px"
            fontWeight="700"
            lineHeight="1.5"
          >
            Hurry! Avail these exclusive PharmEasy offers now.
          </Heading>
        </Box>

        <div className={styles.gridOffers}>
          <Box w="500px" h="191px" marginBottom="10%">
            <Flex
              gap="4%"
              h="180px"
              boxShadow="rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset"
              p="5% 2%"
              borderRadius="6px"
              alignItems="center"
            >
              <Box w="62px">
                <Image
                  maxW="62px"
                  src="https://cms-contents.pharmeasy.in/offer/beff77d2d65-Diagnostics-11-min.png"
                />
              </Box>
              <Box>
                <Heading color="#4f585e" fontWeight="700" fontSize="18px">
                  Get FLAT Rs.1000 OFF on booking 2 Comprehensive Full Body
                  checkup with Vitamin D and B12 Packages.
                </Heading>
                <Text
                  color="#8897a2"
                  fontWeight="700"
                  fontSize="14px"
                  lineHeight="1.5"
                  marginBottom="5px"
                >
                  Get FLAT Rs.1000 OFF on booking 2 Comprehensive Full Body
                  checkup with Vitamin D and B12 Packages.
                </Text>
              </Box>
            </Flex>
            <Flex
              border="1px solid #4f585e"
              borderRadius="6px"
              p="2% 4%"
              boxShadow="rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset"
            >
              <Text>Code : COMBO1000</Text>
              <Spacer />
              <Text color="#10847e" fontWeight="700">
                Copy Code
              </Text>
            </Flex>
          </Box>

          <Box w="500px" h="191px" marginBottom="10%">
            <Flex
              gap="4%"
              h="180px"
              boxShadow="rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset"
              p="5% 2%"
              borderRadius="6px"
              alignItems="center"
            >
              <Box w="62px">
                <Image
                  maxW="62px"
                  src="https://cms-contents.pharmeasy.in/offer/30c8d4a2e82-400x400.png"
                />
              </Box>
              <Box>
                <Heading color="#4f585e" fontWeight="700" fontSize="18px">
                  Get FLAT Rs.1000 OFF on booking 2 Comprehensive Full Body
                  checkup with Vitamin D and B12 Packages.
                </Heading>
                <Text
                  color="#8897a2"
                  fontWeight="700"
                  fontSize="14px"
                  lineHeight="1.5"
                  marginBottom="5px"
                >
                  Get FLAT Rs.1000 OFF on booking 2 Comprehensive Full Body
                  checkup with Vitamin D and B12 Packages.
                </Text>
              </Box>
            </Flex>
            <Flex
              border="1px solid #4f585e"
              borderRadius="6px"
              p="2% 4%"
              boxShadow="rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset"
            >
              <Text>Code : COMBO1000</Text>
              <Spacer />
              <Text color="#10847e" fontWeight="700">
                Copy Code
              </Text>
            </Flex>
          </Box>

          <Box w="500px" h="191px" marginBottom="10%">
            <Flex
              gap="4%"
              h="180px"
              boxShadow="rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset"
              p="5% 2%"
              borderRadius="6px"
              alignItems="center"
            >
              <Box w="62px">
                <Image
                  maxW="62px"
                  src="https://cms-contents.pharmeasy.in/offer/7e9e0fac720-1_400x400_10KB.jpg"
                />
              </Box>
              <Box>
                <Heading color="#4f585e" fontWeight="700" fontSize="18px">
                  Get FLAT Rs.1000 OFF on booking 2 Comprehensive Full Body
                  checkup with Vitamin D and B12 Packages.
                </Heading>
                <Text
                  color="#8897a2"
                  fontWeight="700"
                  fontSize="14px"
                  lineHeight="1.5"
                  marginBottom="5px"
                >
                  Get FLAT Rs.1000 OFF on booking 2 Comprehensive Full Body
                  checkup with Vitamin D and B12 Packages.
                </Text>
              </Box>
            </Flex>
            <Flex
              border="1px solid #4f585e"
              borderRadius="6px"
              p="2% 4%"
              boxShadow="rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset"
            >
              <Text>Code : COMBO1000</Text>
              <Spacer />
              <Text color="#10847e" fontWeight="700">
                Copy Code
              </Text>
            </Flex>
          </Box>

          <Box w="500px" h="191px" marginBottom="10%">
            <Flex
              gap="4%"
              h="180px"
              boxShadow="rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset"
              p="5% 2%"
              borderRadius="6px"
              alignItems="center"
            >
              <Box w="62px">
                <Image
                  maxW="62px"
                  src="https://cms-contents.pharmeasy.in/offer/432848472a7-pluslogo.jpg"
                />
              </Box>
              <Box>
                <Heading color="#4f585e" fontWeight="700" fontSize="18px">
                  Get FLAT Rs.1000 OFF on booking 2 Comprehensive Full Body
                  checkup with Vitamin D and B12 Packages.
                </Heading>
                <Text
                  color="#8897a2"
                  fontWeight="700"
                  fontSize="14px"
                  lineHeight="1.5"
                  marginBottom="5px"
                >
                  Get FLAT Rs.1000 OFF on booking 2 Comprehensive Full Body
                  checkup with Vitamin D and B12 Packages.
                </Text>
              </Box>
            </Flex>
            <Flex
              border="1px solid #4f585e"
              borderRadius="6px"
              p="2% 4%"
              boxShadow="rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset"
            >
              <Text>Code : COMBO1000</Text>
              <Spacer />
              <Text color="#10847e" fontWeight="700">
                Copy Code
              </Text>
            </Flex>
          </Box>

          <Box w="500px" h="191px" marginBottom="10%">
            <Flex
              gap="4%"
              h="180px"
              boxShadow="rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset"
              p="5% 2%"
              borderRadius="6px"
              alignItems="center"
            >
              <Box w="62px">
                <Image
                  maxW="62px"
                  src="https://cms-contents.pharmeasy.in/offer/4922989c113-3_400x400.png"
                />
              </Box>
              <Box>
                <Heading color="#4f585e" fontWeight="700" fontSize="18px">
                  Get FLAT Rs.1000 OFF on booking 2 Comprehensive Full Body
                  checkup with Vitamin D and B12 Packages.
                </Heading>
                <Text
                  color="#8897a2"
                  fontWeight="700"
                  fontSize="14px"
                  lineHeight="1.5"
                  marginBottom="5px"
                >
                  Get FLAT Rs.1000 OFF on booking 2 Comprehensive Full Body
                  checkup with Vitamin D and B12 Packages.
                </Text>
              </Box>
            </Flex>
            <Flex
              border="1px solid #4f585e"
              borderRadius="6px"
              p="2% 4%"
              boxShadow="rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset"
            >
              <Text>Code : COMBO1000</Text>
              <Spacer />
              <Text color="#10847e" fontWeight="700">
                Copy Code
              </Text>
            </Flex>
          </Box>

          <Box w="500px" h="191px" marginBottom="10%">
            <Flex
              gap="4%"
              h="180px"
              boxShadow="rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset"
              p="5% 2%"
              borderRadius="6px"
              alignItems="center"
            >
              <Box w="62px">
                <Image
                  maxW="62px"
                  src="https://cms-contents.pharmeasy.in/offer/2fa71127c58-Diagnostics-02-min.png"
                />
              </Box>
              <Box>
                <Heading color="#4f585e" fontWeight="700" fontSize="18px">
                  Get FLAT Rs.1000 OFF on booking 2 Comprehensive Full Body
                  checkup with Vitamin D and B12 Packages.
                </Heading>
                <Text
                  color="#8897a2"
                  fontWeight="700"
                  fontSize="14px"
                  lineHeight="1.5"
                  marginBottom="5px"
                >
                  Get FLAT Rs.1000 OFF on booking 2 Comprehensive Full Body
                  checkup with Vitamin D and B12 Packages.
                </Text>
              </Box>
            </Flex>
            <Flex
              border="1px solid #4f585e"
              borderRadius="6px"
              p="2% 4%"
              boxShadow="rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset"
            >
              <Text>Code : COMBO1000</Text>
              <Spacer />
              <Text color="#10847e" fontWeight="700">
                Copy Code
              </Text>
            </Flex>
          </Box>

          <Box w="500px" h="191px" marginBottom="10%">
            <Flex
              gap="4%"
              h="180px"
              boxShadow="rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset"
              p="5% 2%"
              borderRadius="6px"
              alignItems="center"
            >
              <Box w="62px">
                <Image
                  maxW="62px"
                  src="https://cms-contents.pharmeasy.in/offer/843f75ab15f-4_400x400.png"
                />
              </Box>
              <Box>
                <Heading color="#4f585e" fontWeight="700" fontSize="18px">
                  Get FLAT Rs.1000 OFF on booking 2 Comprehensive Full Body
                  checkup with Vitamin D and B12 Packages.
                </Heading>
                <Text
                  color="#8897a2"
                  fontWeight="700"
                  fontSize="14px"
                  lineHeight="1.5"
                  marginBottom="5px"
                >
                  Get FLAT Rs.1000 OFF on booking 2 Comprehensive Full Body
                  checkup with Vitamin D and B12 Packages.
                </Text>
              </Box>
            </Flex>
            <Flex
              border="1px solid #4f585e"
              borderRadius="6px"
              p="2% 4%"
              boxShadow="rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset"
            >
              <Text>Code : COMBO1000</Text>
              <Spacer />
              <Text color="#10847e" fontWeight="700">
                Copy Code
              </Text>
            </Flex>
          </Box>

          <Box w="500px" h="191px" marginBottom="10%">
            <Flex
              gap="4%"
              h="180px"
              boxShadow="rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset"
              p="5% 2%"
              borderRadius="6px"
              alignItems="center"
            >
              <Box w="62px">
                <Image
                  maxW="62px"
                  src="https://cms-contents.pharmeasy.in/offer/a755d10e494-Diagnostics-01-min.png"
                />
              </Box>
              <Box>
                <Heading color="#4f585e" fontWeight="700" fontSize="18px">
                  Get FLAT Rs.1000 OFF on booking 2 Comprehensive Full Body
                  checkup with Vitamin D and B12 Packages.
                </Heading>
                <Text
                  color="#8897a2"
                  fontWeight="700"
                  fontSize="14px"
                  lineHeight="1.5"
                  marginBottom="5px"
                >
                  Get FLAT Rs.1000 OFF on booking 2 Comprehensive Full Body
                  checkup with Vitamin D and B12 Packages.
                </Text>
              </Box>
            </Flex>
            <Flex
              border="1px solid #4f585e"
              borderRadius="6px"
              p="2% 4%"
              boxShadow="rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset"
            >
              <Text>Code : COMBO1000</Text>
              <Spacer />
              <Text color="#10847e" fontWeight="700">
                Copy Code
              </Text>
            </Flex>
          </Box>

          <Box w="500px" h="191px" marginBottom="10%">
            <Flex
              gap="4%"
              h="180px"
              boxShadow="rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset"
              p="5% 2%"
              borderRadius="6px"
              alignItems="center"
            >
              <Box w="62px">
                <Image
                  maxW="62px"
                  src="https://cms-contents.pharmeasy.in/offer/5db436ee3cd-1_400x400.png"
                />
              </Box>
              <Box>
                <Heading color="#4f585e" fontWeight="700" fontSize="18px">
                  Get FLAT Rs.1000 OFF on booking 2 Comprehensive Full Body
                  checkup with Vitamin D and B12 Packages.
                </Heading>
                <Text
                  color="#8897a2"
                  fontWeight="700"
                  fontSize="14px"
                  lineHeight="1.5"
                  marginBottom="5px"
                >
                  Get FLAT Rs.1000 OFF on booking 2 Comprehensive Full Body
                  checkup with Vitamin D and B12 Packages.
                </Text>
              </Box>
            </Flex>
            <Flex
              border="1px solid #4f585e"
              borderRadius="6px"
              p="2% 4%"
              boxShadow="rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset"
            >
              <Text>Code : COMBO1000</Text>
              <Spacer />
              <Text color="#10847e" fontWeight="700">
                Copy Code
              </Text>
            </Flex>
          </Box>

          <Box w="500px" h="191px" marginBottom="10%">
            <Flex
              gap="4%"
              h="180px"
              boxShadow="rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset"
              p="5% 2%"
              borderRadius="6px"
              alignItems="center"
            >
              <Box w="62px">
                <Image
                  maxW="62px"
                  src="https://cms-contents.pharmeasy.in/offer/3fadaf72d16-1100.png"
                />
              </Box>
              <Box>
                <Heading color="#4f585e" fontWeight="700" fontSize="18px">
                  Get FLAT Rs.1000 OFF on booking 2 Comprehensive Full Body
                  checkup with Vitamin D and B12 Packages.
                </Heading>
                <Text
                  color="#8897a2"
                  fontWeight="700"
                  fontSize="14px"
                  lineHeight="1.5"
                  marginBottom="5px"
                >
                  Get FLAT Rs.1000 OFF on booking 2 Comprehensive Full Body
                  checkup with Vitamin D and B12 Packages.
                </Text>
              </Box>
            </Flex>
            <Flex
              border="1px solid #4f585e"
              borderRadius="6px"
              p="2% 4%"
              boxShadow="rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset"
            >
              <Text>Code : COMBO1000</Text>
              <Spacer />
              <Text color="#10847e" fontWeight="700">
                Copy Code
              </Text>
            </Flex>
          </Box>
        </div>
      </Box>
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default Offers;
