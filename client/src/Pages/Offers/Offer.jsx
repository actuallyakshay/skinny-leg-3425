import {
  Box,
  Flex,
  Grid,
  Heading,
  HStack,
  Image,
  Spacer,
  Text,
  VStack,
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
              <Box key={i + "offerkey"}>
                <Flex
                  border={"1px solid #d7dfe5"}
                  borderRadius="lg"
                  borderBottom="none"
                  p="20px"
                >
                  <HStack>
                    <Image w="18%" p={3} src={el?.image} />
                    <VStack align={"flex-start"} justify="space-between">
                      <Text
                        fontWeight="semibold"
                        color="#4f585e"
                        fontSize="18px"
                      >
                        {el?.title}
                      </Text>
                      <Text fontSize="14px" lineHeight="1.5" w="80%">
                        {el?.coupon}
                      </Text>
                    </VStack>
                  </HStack>
                </Flex>
                <Flex
                  border="1px solid #d7dfe5"
                  px="20px"
                  py="10px"
                  borderRadius="lg"
                  // boxShadow="rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset"
                >
                  <p>
                    Code :{" "}
                    <strong style={{ color: "#4f585e" }}>{el?.Code}</strong>
                  </p>
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
