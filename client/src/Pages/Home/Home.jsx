import { Box, Button, Flex, Image, Text, VStack } from "@chakra-ui/react";
import { AiOutlinePaperClip } from "react-icons/ai";
import { BsCardList } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import { SearchBox } from "../../Component/Navbar/SearchBox";
import { Carousel1 } from "./Components/Carousels/Carousel1";
import {
  cardconfig,
  cataconfig,
  cataconfig2,
  offerconfig,
} from "./Components/Carousels/setting";
import { Cata } from "./Components/Cata";
import { Cata2 } from "./Components/Cata2";
import { OfferCard } from "./Components/OfferCard";
import { OfferCard2 } from "./Components/OfferCard2";
import offer2data from "./Data/Offer2.json";
import cata2data from "./Data/Cata2.json";
import ShopByCata from "./Data/ShopbyCata.json";
import { Cata3 } from "./Components/Cata3";
import { ProductCard } from "./Components/ProductCard";
export const Home = () => {
  return (
    <Box mt={"104px"}>
      <Box
        className="homepage_topsection"
        px={{ md: "10px", lg: "20px" }}
        pt={{ base: "40px", lg: "60px" }}
        w="full"
        m="auto"
      >
        <VStack
          align={{ lg: "flex-start" }}
          gap={{ md: "10px", lg: "20px" }}
          w={["100%", "90%", "70%"]}
          m="auto"
        >
          <Text fontWeight={"semibold"} fontSize={"27px"} px="20px">
            What are you looking for?
          </Text>
          <Box w="full">
            <VStack
              align={"flex-end"}
              px="20px"
              mb="10px"
              display={{ base: "none", md: "flex" }}
            >
              <Flex align={"center"} gap="6px">
                <BsCardList /> Order with prescription.
                <Flex
                  align={"center"}
                  color={"#10847E"}
                  _hover={{ color: "#0A534F" }}
                  cursor="pointer"
                  fontWeight={"semibold"}
                  gap="2px"
                >
                  UPLOAD NOW <IoIosArrowForward />
                </Flex>
              </Flex>
            </VStack>
            <Box>
              <SearchBox />
            </Box>
            <VStack
              px="20px"
              mt="15px"
              py="6px"
              bg={"green.100"}
              border={"1px solid green"}
              display={{ sm: "flex", md: "none." }}
            >
              <Flex align={"center"} gap="6px">
                <BsCardList /> Order with prescription.
                <Flex
                  align={"center"}
                  color={"#10847E"}
                  _hover={{ color: "#0A534F" }}
                  cursor="pointer"
                  fontWeight={"semibold"}
                  gap="2px"
                >
                  UPLOAD NOW <IoIosArrowForward />
                </Flex>
              </Flex>
            </VStack>
          </Box>
        </VStack>

        <Flex
          w={{ sm: "95%", md: "90%" }}
          m="auto"
          py={{ lg: "20px" }}
          px={{ md: "10px", lg: "20px" }}
          gap="1"
          className="sidebar"
        >
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
            sub={"."}
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
            sub={"."}
          />
          <Cata
            image={
              "https://assets.pharmeasy.in/apothecary/images/value_store.png?dim=256x0"
            }
            title="Value Store"
            sub={"UPTO 50% OFF"}
          />
        </Flex>
      </Box>
      <Box px={{ base: "10px", md: "20px", lg: "40px" }}>
        <Flex
          w="full"
          justify={"flex-start"}
          py="20px"
          px={{ md: "40px" }}
          mb="10px"
        >
          <Image
            w={{ md: "400px", sm: "full", lg: "500px" }}
            borderRadius={"lg"}
            src="https://cdn01.pharmeasy.in/dam/banner/banner/cb2f371c006-yayy550_bau.jpg"
          />
        </Flex>
        <Box py="10px">
          <Box>
            <Text fontSize={"26px"} fontWeight="semibold" mb="-2px">
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
          <Carousel1 setting={cataconfig}>
            {cata2data.map((item, i) => (
              <Cata2 key={i} w={i === 0 ? "185px" : "180px"} src={item.src} />
            ))}
          </Carousel1>
        </Box>
        <Box>
          <Box>
            <Text fontSize={"26px"} fontWeight="semibold" mb="-2px">
              Offers Just for You
            </Text>
            <Flex gap="20px" flexWrap={"wrap"} my="10px">
              <OfferCard
                src="https://cms-contents.pharmeasy.in/offer/e48df3b2675-Offer_YES.jpg?dim=1440x0"
                text="Flat 25% OFF + FREE Delivery on 3 medicine orders"
              />
              <OfferCard
                src="https://cms-contents.pharmeasy.in/offer/e48df3b2675-Offer_YES.jpg?dim=1440x0"
                text="Flat 27% OFF + up to Rs.5000 surprise cashback"
              />
            </Flex>
          </Box>
        </Box>
        <Box py="10px">
          <Flex justify={"space-between"} align="center" w="98%">
            <Text fontSize={"26px"} fontWeight="semibold">
              Payment Offers
            </Text>
            <Text className="highText">View All</Text>
          </Flex>
          <Carousel1 setting={offerconfig}>
            {offer2data.map((item, i) => (
              <OfferCard2 key={i + "src"} src={item.src} />
            ))}
          </Carousel1>
          <Box w="full">
            <Flex
              border={"1px solid #cef8ff"}
              borderRadius="lg"
              my="20px"
              w="full"
              flexDir={{ base: "column", md: "column", lg: "row" }}
            >
              <Flex gap="20px" p="40px" bg="#cef8ff">
                <Image src="https://assets.pharmeasy.in/apothecary/images/rx_upload.svg?dim=1440x0"></Image>
                <Flex flexDir={"column"} gap="2">
                  <Text fontSize={"18px"} fontWeight="semibold">
                    Order with Prescription
                  </Text>
                  <Text fontSize={"14px"}>
                    Upload prescription and we will deliver your medicines
                  </Text>
                  <Button w="max-content" colorScheme={"teal"}>
                    <AiOutlinePaperClip /> Upload
                  </Button>
                </Flex>
              </Flex>
              <Box px={{ base: "10px", md: "20px", lg: "30px" }} py="20px">
                <Text fontWeight={"semibold"} mb="20px">
                  How does this work?
                </Text>
                <Flex
                  w="full"
                  flexDir={{ base: "column", md: "column", lg: "row" }}
                >
                  <Box>
                    <Flex p="10px" gap="2">
                      <Flex
                        justify={"center"}
                        align="center"
                        bg="blue.50"
                        w="30px"
                        h="30px"
                        color={"blue"}
                        fontWeight="bold"
                      >
                        1
                      </Flex>
                      <Text>Upload a photo of your prescription</Text>
                    </Flex>
                    <Flex p="10px" gap="2">
                      <Flex
                        justify={"center"}
                        align="center"
                        bg="blue.50"
                        w="30px"
                        h="30px"
                        color={"blue"}
                        fontWeight="bold"
                      >
                        2
                      </Flex>
                      <Text>Add delivery address and place the order</Text>
                    </Flex>
                  </Box>
                  <Box>
                    <Flex p="10px" gap="2">
                      <Flex
                        justify={"center"}
                        align="center"
                        bg="blue.50"
                        w="30px"
                        h="30px"
                        color={"blue"}
                        fontWeight="bold"
                      >
                        3
                      </Flex>
                      <Text>We will call you to confirm the medicines</Text>
                    </Flex>
                    <Flex p="10px" gap="2">
                      <Flex
                        justify={"center"}
                        align="center"
                        bg="blue.50"
                        w="30px"
                        h="30px"
                        color={"blue"}
                        fontWeight="bold"
                      >
                        4
                      </Flex>
                      <Text>
                        Now, sit back! your medicines will get delivered at your
                        doorstep
                      </Text>
                    </Flex>
                  </Box>
                </Flex>
              </Box>
            </Flex>
          </Box>
        </Box>
      </Box>
      <Box px={{ base: "10px", md: "20px", lg: "40px" }} py="20px">
        <Box>
          <Text fontSize={"26px"} fontWeight="semibold">
            Shop by Categories
          </Text>
          <Box>
            <Carousel1 setting={cataconfig2}>
              {ShopByCata.map((item) => (
                <Cata3 src={item.src} title={item.title} key={item.title} />
              ))}
            </Carousel1>
          </Box>
        </Box>
      </Box>
      <Box px={{ base: "10px", md: "20px", lg: "40px" }}>
        <Box>
          <Text fontSize={"26px"} fontWeight="semibold">
            New Launches
          </Text>
          <Text color="gray.900">New wellness range just for you!</Text>
          <Box>
            <Carousel1 setting={cardconfig}>
              {ShopByCata.map((item) => (
                <ProductCard
                  src={item.src}
                  title={item.title}
                  key={item.title}
                />
              ))}
            </Carousel1>
          </Box>
        </Box>
      </Box>
      <Box px={{ base: "10px", md: "20px", lg: "40px" }}>
        <Box>
          <Text fontSize={"26px"} fontWeight="semibold">
            Trending Near You
          </Text>
          <Text color="gray.900">Popular in your city</Text>
          <Box>
            <Carousel1 setting={cardconfig}>
              {ShopByCata.map((item) => (
                <ProductCard
                  src={item.src}
                  title={item.title}
                  key={item.title}
                />
              ))}
            </Carousel1>
          </Box>
        </Box>
      </Box>
      <Flex>
        <Box></Box>
      </Flex>
    </Box>
  );
};
