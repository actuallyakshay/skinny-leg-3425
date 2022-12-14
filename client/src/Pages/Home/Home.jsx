import { Box, Flex, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { BsCardList } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import { SearchBox } from "../../Component/Navbar/SearchBox";
import { Cata } from "./Cata";

export const Home = () => {
  return (
    <Box>
      <Box className="homepage_topsection" p="40px" w="90%" m="auto">
        <VStack align={"flex-start"} gap="20px" w="70%" m="auto">
          <Text fontWeight={"semibold"} fontSize={"30px"} px="20px">
            What are you looking for?
          </Text>
          <Box w="full">
            <VStack align={"flex-end"} px="20px" mb="10px">
              <Flex align={"center"} gap="6px">
                <BsCardList /> Order with prescription.{" "}
                <Flex
                  align={"center"}
                  color={"teal"}
                  cursor="pointer"
                  fontWeight={"semibold"}
                  gap="2px"
                >
                  UPLOAD NOW <IoIosArrowForward />
                </Flex>
              </Flex>
            </VStack>
            <SearchBox />
          </Box>
        </VStack>
        <Flex py="20px">
          <Cata
            image={
              "https://assets.pharmeasy.in/apothecary/images/medicine_ff.webp?dim=256x0"
            }
            title="Medicine"
            sub={"UPTO 20% OFF"}
          />
          <Cata
            image={
              "https://assets.pharmeasy.in/apothecary/images/labtest_ff.webp?dim=256x0"
            }
            title="Lab Test"
            sub={"UPTO 70% OFF"}
          />
          <Cata
            image={
              "https://assets.pharmeasy.in/apothecary/images/healthcare_ff.webp?dim=256x0"
            }
            title="Healthcare"
            sub={"UPTO 60% OFF"}
          />
          <Cata
            image={
              "https://assets.pharmeasy.in/apothecary/images/offers_1_ff.webp?dim=256x0"
            }
            title="Surgeries"
            sub={" "}
          />
          <Cata
            image={
              "https://assets.pharmeasy.in/apothecary/images/health_blogs_ff.webp?dim=256x0"
            }
            title="Health Blogs"
            sub={"UPTO 50% OFF"}
          />
          <Cata
            image={
              "https://assets.pharmeasy.in/apothecary/images/plus_ff.webp?dim=256x0"
            }
            title="PLUS"
            sub={"SAVE 5% EXTRA"}
          />
          <Cata
            image={
              "https://assets.pharmeasy.in/apothecary/images/offers_ff.webp?dim=256x0"
            }
            title="Offers"
            sub={" "}
          />
          <Cata
            image={
              "https://assets.pharmeasy.in/apothecary/images/value_store.png?dim=256x0"
            }
            title="Value Store"
            sub={"UPTO 50% OFF"}
          />
        </Flex>
        <Flex w="full" justify={"flex-start"} py="20px" m="20px">
          <Image
            w="500px"
            borderRadius={"lg"}
            src="https://cdn01.pharmeasy.in/dam/banner/banner/cb2f371c006-yayy550_bau.jpg"
          />
        </Flex>
        <Box>
          <Box>
            <Text fontSize={"30px"} fontWeight="semibold" mb="-2px">
              Lab Tests by Health Concern
            </Text>
            <Flex gap="4px">
              <Text>Powered by</Text>
              <Image
                w="100px"
                src="https://assets.pharmeasy.in/apothecary/images/Thyrocare.webp?dim=1440x0"
              />
            </Flex>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
