import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  HStack,
  Image,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { IoIosArrowForward } from "react-icons/io";
import data from "./Offerdata.json";

const OfferPage = () => {
  return (
    <Box mt="104px">
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
        <Grid
          mt="5"
          gap="3"
          gridTemplateColumns={{ base: "repeat(1fr)", lg: "repeat(2,1fr)" }}
        >
          {data?.map((el, i) => {
            return (
              <Box border="2px solid red">
                <Flex
                  gap="4%"
                  borderRadius="6px"
                  flexDirection={"column"}
                  alignItems="center"
                  shadow={"md"}
                >
                  <HStack>
                    <Image w="18%" p={3} src={el?.image} />
                    <Heading color="#4f585e" fontWeight="700" fontSize="18px">
                      {el?.title}
                    </Heading>
                  </HStack>
                  <Text
                    color="#8897a2"
                    fontWeight="700"
                    fontSize="14px"
                    lineHeight="1.5"
                  >
                    {el?.coupon}
                  </Text>
                </Flex>
                <Flex
                  border="1px solid #4f585e"
                  borderRadius="6px"
                  p="2% 4%"
                  boxShadow="rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset"
                >
                  <Text>Code : {el?.Code}</Text>
                  <Spacer />
                  <Text color="#10847e" fontWeight="700">
                    Copy Code
                  </Text>
                </Flex>
              </Box>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
};

export default OfferPage;
