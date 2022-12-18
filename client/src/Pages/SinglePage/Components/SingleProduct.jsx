import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { SingleProductCard } from "./SingleProductCard";
import data from "./SingleProd.json";
import { Carousel1 } from "../../Home/Components/Carousels/Carousel1";
import { product } from "../../Home/Components/Carousels/setting";
import offerData from "../ayurvedic.json";
import { SProductCard } from "./SProductCard";
import { RatingProgress } from "./RatingProgress";
import ReactStars from "react-rating-stars-component";
export const SingleProduct = ({ item }) => {
  console.log("item", item);
  const brandname = item.name;
  console.log(brandname);
  return (
    <Box w={{ base: "100%", lg: "95%" }} m="auto">
      <Box
        h={"max-content"}
        borderBottom={{ base: "none", lg: "1px solid #b4c0d3" }}
      >
        <SingleProductCard
          image={item.image}
          title={item.name}
          price={item.price1}
          mrp={item.price2}
          off={item.off}
          brand={data[0].brand}
          key={item._id}
        />
        <Flex
          gap="2"
          mt={{ base: "0", lg: "60px" }}
          fontSize={"8px"}
          py="10px"
          px={{ base: "20px", lg: "50px" }}
        >
          <Text>Non Returnable</Text> <Text color={"teal"}>Read More</Text>
        </Flex>
      </Box>
      <Box display={{ base: "none", lg: "block" }} py="10px" color={"gray.600"}>
        <Box borderBottom={"1px solid #b4c0d3"}>
          <Box py="10px">
            <Text pb="10px" fontSize="20px" fontWeight={"semibold"}>
              Description
            </Text>
            <Text>
              Uniquely-designed Thermo protect airflow powerfully mixes warm and
              cool air for everyday care Powerful 1600W hair dryer creates the
              optimum level of airflow, for beautiful results every day Cool air
              setting provides a burst of cold air to finish and hold your style
              3 preselected heat/speed combinations, making it quick and easy to
              achieve the perfect style Compact design with foldable handle
              makes it easy to pack 2 years Philips India warranty from the date
              of purchase
            </Text>
          </Box>
          <Box pb="10px">
            <Text pb="10px" fontSize="20px" fontWeight={"semibold"}>
              Benefits
            </Text>
            <Box px="20px">
              <ul>
                <li>
                  Uniquely-designed Thermo protect airflow powerfully mixes warm
                  and cool air for everyday care
                </li>
                <li>
                  Powerful 1600W hair dryer creates the optimum level of
                  airflow, for beautiful results every day
                </li>
                <li>
                  Cool air setting provides a burst of cold air to finish and
                  hold your style
                </li>
                <li>
                  3 preselected heat/speed combinations, making it quick and
                  easy to achieve the perfect style
                </li>
                <li>
                  Compact design with foldable handle makes it easy to pack
                </li>
              </ul>
            </Box>
          </Box>
        </Box>
        <Box py="10px" borderBottom={"1px solid #b4c0d3"}>
          <Text pb="10px" fontSize="20px" fontWeight={"semibold"}>
            Product Details
          </Text>
          <Box fontSize={"18px"}>
            <Flex gap="1">
              Brand: <Text color={"teal"}>{data[0].brand}</Text>
            </Flex>
            <Box>
              Country: <span>{"India,China"}</span>
            </Box>
            <Box cursor={"pointer"} color="teal">
              Manufacturer Details
            </Box>
          </Box>
        </Box>
        <Box py="10px" borderBottom={"1px solid #b4c0d3"} color="gray.500">
          <Text pb="5px" fontSize="14px" fontWeight={"semibold"}>
            Disclaimer
          </Text>
          <Text fontSize={"12px"}>
            THE CONTENTS OF THIS WEBSITE ARE FOR INFORMATIONAL PURPOSES ONLY AND
            ARE NOT INTENDED TO BE A SUBSTITUTE FOR PROFESSIONAL MEDICAL ADVICE,
            DIAGNOSIS, TREATMENT, OR PREVENTION OF A DISEASE OR MEDICAL
            CONDITION. PLEASE CONSULT A PHYSICIAN FOR THE TREATMENT AND/OR
            MANAGEMENT OF ANY DISEASE OR MEDICAL CONDITION WITHOUT DELAY.
          </Text>
        </Box>
      </Box>
      <Box
        py="10px"
        borderBottom={{ base: "none", lg: "1px solid #b4c0d3" }}
        color="gray.700"
      >
        <Text pl="10px" pb="10px" fontSize="20px" fontWeight={"semibold"}>
          Similar Products
        </Text>
        <Box>
          <Carousel1 setting={product}>
            {offerData.map((item) => (
              <SProductCard
                key={item.id || item.image}
                src={item.image}
                title={item.name}
                price={item.price1}
                cprice={item.price2}
                off={item.off}
                border="lg"
                base="250px"
              />
            ))}
          </Carousel1>
        </Box>
      </Box>
      <Box display={{ base: "block", lg: "none" }} py="5px" color={"gray.600"}>
        <Accordion allowToggle>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Description
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel fontSize={"14px"} pb={4}>
              Uniquely-designed Thermo protect airflow powerfully mixes warm and
              cool air for everyday care Powerful 1600W hair dryer creates the
              optimum level of airflow, for beautiful results every day Cool air
              setting provides a burst of cold air to finish and hold your style
              3 preselected heat/speed combinations, making it quick and easy to
              achieve the perfect style Compact design with foldable handle
              makes it easy to pack 2 years Philips India warranty from the date
              of purchase
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Benefits
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel fontSize={"14px"} pb={4}>
              <Box px="20px">
                <ul>
                  <li>
                    Uniquely-designed Thermo protect airflow powerfully mixes
                    warm and cool air for everyday care
                  </li>
                  <li>
                    Powerful 1600W hair dryer creates the optimum level of
                    airflow, for beautiful results every day
                  </li>
                  <li>
                    Cool air setting provides a burst of cold air to finish and
                    hold your style
                  </li>
                  <li>
                    3 preselected heat/speed combinations, making it quick and
                    easy to achieve the perfect style
                  </li>
                  <li>
                    Compact design with foldable handle makes it easy to pack
                  </li>
                </ul>
              </Box>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Product Details
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel fontSize={"14px"} pb={4}>
              <Box>
                <Flex gap="1">
                  Brand: <Text color={"teal"}>{data[0].brand}</Text>
                </Flex>
                <Box>
                  Country: <span>{"India,China"}</span>
                </Box>
                <Box cursor={"pointer"} color="teal">
                  Manufacturer Details
                </Box>
              </Box>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Disclaimer
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel fontSize={"14px"} pb={4}>
              <Text fontSize={"10px"} color="gray.500">
                THE CONTENTS OF THIS WEBSITE ARE FOR INFORMATIONAL PURPOSES ONLY
                AND ARE NOT INTENDED TO BE A SUBSTITUTE FOR PROFESSIONAL MEDICAL
                ADVICE, DIAGNOSIS, TREATMENT, OR PREVENTION OF A DISEASE OR
                MEDICAL CONDITION. PLEASE CONSULT A PHYSICIAN FOR THE TREATMENT
                AND/OR MANAGEMENT OF ANY DISEASE OR MEDICAL CONDITION WITHOUT
                DELAY.
              </Text>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
      <Box py="10px" borderBottom={"1px solid #b4c0d3"}>
        <Text>Rating and Reviews</Text>
        <Box>
          <Flex
            my="10px"
            justify={"space-between"}
            flexDir={{ base: "column", lg: "row" }}
            align="center"
          >
            <Box w="150px" h="150px" bg="#d7dfe0">
              <Text>3.5/5</Text>
              <ReactStars
                count={5}
                size={15}
                value={4.6}
                isHalf={true}
                activeColor="#ffd700"
                edit={false}
              />
              <Text>200 Ratings</Text>
            </Box>
            <VStack w="80%" align="flex-start">
              <RatingProgress
                colorScheme={"green"}
                title="5 stars"
                value={20}
              />
              <RatingProgress
                colorScheme={"green"}
                title="4 stars"
                value={20}
              />
              <RatingProgress
                colorScheme={"orange"}
                title="3 stars"
                value={20}
              />
              <RatingProgress
                colorScheme={"orange"}
                title="2 stars"
                value={20}
              />
              <RatingProgress colorScheme={"red"} title="1 stars" value={20} />
            </VStack>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};
