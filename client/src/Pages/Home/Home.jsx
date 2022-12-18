import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Image,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import { AiOutlineClockCircle, AiOutlinePaperClip } from "react-icons/ai";
import { BsCardList } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import { SearchBox } from "../../Component/Navbar/SearchBox";
import { Carousel1 } from "./Components/Carousels/Carousel1";
import {
  articleconfig,
  cardconfig,
  cardconfig2,
  cataconfig,
  cataconfig2,
  offerconfig,
  offerconfig2,
} from "./Components/Carousels/setting";
import { Cata } from "./Components/Cata";
import { Cata2 } from "./Components/Cata2";
import { OfferCard } from "./Components/OfferCard";
import { OfferCard2 } from "./Components/OfferCard2";
import offer2data from "./Data/Offer2.json";
import cata2data from "./Data/Cata2.json";
import ShopByCata from "./Data/ShopbyCata.json";
import ShopByConcern from "./Data/ShopbyConcern.json";
import { Cata3 } from "./Components/Cata3";
import { ProductCard } from "./Components/ProductCard";
import { ProductCard2 } from "./Components/ProductCard2";
import labtextdata from "./Data/Labtext.json";
import { LabtextCard } from "./Components/LabtextCard";
import { ProductCard3 } from "./Components/ProductCard3";
import featuredbranddata from "./Data/FeaturedBrand.json";
import offerData from "./Data/Offer.json";
import articles from "./Data/Articles.json";
import { ArticleCard } from "./Components/ArticleCard";
import { WhyUs } from "./Components/WhyUs";
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
      <Flex
        className="plus_memberbox"
        color={"white"}
        my="20px"
        py={{ base: "20px", lg: "0" }}
        flexDir={{ base: "column", lg: "row" }}
      >
        <Box
          px={{ base: "20px", lg: "40px" }}
          py={{ base: "0", lg: "40px" }}
          w={{ base: "full", lg: "30%" }}
        >
          <Flex fontSize={"24px"} gap="5px" whiteSpace={"nowrap"}>
            Become a
            <Text fontWeight={"bold"} color="#ff9341">
              PLUS
            </Text>
            member
          </Flex>
          <Text>And enjoy extra bachat on every order</Text>
          <Box
            mt="20px"
            h="2px"
            bgGradient="linear(90deg, #ff9341 -1.35%, transparent 97.57%)"
          ></Box>
        </Box>
        <Box px={{ base: "20px", lg: "40px" }} py={{ base: "0", lg: "40px" }}>
          <Text>
            Save 5% on allopathic medicines, 50% on lab tests & get FREE
            delivery with PLUS membership Know more {`>`}
          </Text>
          <Button mt="20px" colorScheme={"yellow"}>
            Explore Now
          </Button>
        </Box>
        <Flex
          px={{ base: "20px", lg: "40px" }}
          h="210px"
          w="max-content"
          display={{ base: "none", lg: "block" }}
        >
          <Flex h="full" align={"flex-end"} justify="flex-end">
            <Image
              w="100%"
              src="https://assets.pharmeasy.in/apothecary/_next/static/media/PlusFamily.22677720.png?dim=1440x0"
            ></Image>
          </Flex>
        </Flex>
      </Flex>
      <Box px={{ base: "10px", md: "20px", lg: "40px" }}>
        <Box>
          <Text fontSize={"26px"} fontWeight="semibold">
            Shop by Concern
          </Text>
          <Text color="gray.900">Products are handpicked by experts</Text>
        </Box>
        <Flex w={"100%"} m="auto" py="20px" gap="5" flexWrap={"wrap"}>
          {ShopByConcern.map((item) => (
            <ProductCard2 src={item.src} title={item.title} key={item.title} />
          ))}
        </Flex>
      </Box>
      <Box px={{ base: "10px", md: "20px", lg: "40px" }}>
        <Flex justify={"space-between"} align="center" w="98%">
          <Text fontSize={{ base: "20px", lg: "26px" }} fontWeight="semibold">
            Frequently Booked Lab Tests
          </Text>
          <Text className="highText">View All</Text>
        </Flex>
        <Grid
          templateRows={{ base: "repeat(2, 1fr)", lg: "repeat(1, 1fr)" }}
          templateColumns={{ base: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }}
          gap={4}
          py="20px"
          px={{ base: "0", lg: "20px" }}
        >
          {labtextdata.map((item, i) => (
            <LabtextCard
              src={item.src}
              title={item.title}
              des={item.des}
              mrp={item.mrp}
              cmrp={item.cmrp}
              off={item.off}
              i={i}
            />
          ))}
        </Grid>
      </Box>
      <Box px={{ base: "10px", md: "20px", lg: "40px" }}>
        <Box>
          <Text fontSize={{ base: "20px", lg: "26px" }} fontWeight="semibold">
            Wellness Essentials of the Week
          </Text>
          <Text color="gray.900">Super charge your immunity with us</Text>
          <Box>
            <Carousel1 setting={cardconfig2}>
              {ShopByCata.map((item) => (
                <ProductCard3
                  src={item.src}
                  title={item.title}
                  key={item.title}
                />
              ))}
            </Carousel1>
          </Box>
        </Box>
      </Box>
      <Box px={{ base: "10px", md: "20px", lg: "40px" }} py="20px">
        <Box>
          <Text fontSize={"26px"} fontWeight="semibold">
            Featured Brands
          </Text>
          <Text color="gray.900">Pick from our favourite brands</Text>
          <Box>
            <Carousel1 setting={cataconfig2}>
              {featuredbranddata.map((item) => (
                <Cata3
                  src={item.src}
                  title={item.title}
                  key={item.title}
                  px="0px"
                  py="0px"
                />
              ))}
            </Carousel1>
          </Box>
        </Box>
      </Box>
      <Box px={{ base: "10px", md: "20px", lg: "40px" }}>
        <Box>
          <Flex justify={"space-between"} align="center" w="98%">
            <Flex flexDir={{ base: "column", lg: "row" }} gap="10px">
              <Text fontSize={"26px"} fontWeight="semibold">
                Deals of the Day
              </Text>
              <Flex
                align={"center"}
                gap="5px"
                bg="#ffae71"
                px="8px"
                py="2px"
                borderRadius={"md"}
                color="white"
              >
                <AiOutlineClockCircle />
                <Text>19:57 MINS LEFT, HURRY!</Text>
              </Flex>
            </Flex>
            <Text className="highText">View All</Text>
          </Flex>
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
      <Box
        px={{ base: "10px", md: "20px", lg: "40px" }}
        bg={{
          base: "url(https://assets.pharmeasy.in/apothecary/images/spotlight.svg) center top no-repeat, linear-gradient(rgb(255, 248, 227) 0%, rgba(255, 255, 255, 0) 100%)",
          lg: "url(https://assets.pharmeasy.in/apothecary/images/spotlightBig.svg) no-repeat, linear-gradient(rgb(255, 248, 227) 0%, rgba(255, 255, 255, 0) 100%)",
        }}
        bgPos="center"
        py="10px"
        bgRepeat={"no-repeat"}
      >
        <Box>
          <Text fontSize={{ base: "20px", md: "26px" }} fontWeight="semibold">
            In the Spotlight
          </Text>

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
        <Carousel1 setting={offerconfig2}>
          {offerData.map((item, i) => (
            <OfferCard2
              key={i + "offer"}
              src={item.src}
              border="lg"
              base="250px"
            />
          ))}
        </Carousel1>
      </Box>
      <Box px={{ base: "10px", md: "20px", lg: "40px" }}>
        <Box>
          <Flex justify={"space-between"} align="center" w="98%">
            <Box gap="10px">
              <Text fontSize={"26px"} fontWeight="semibold">
                Health Articles
              </Text>
              <Text color="gray.900">
                Get up-to-date on our latest health updates
              </Text>
            </Box>
            <Text className="highText">View All</Text>
          </Flex>
          <Box>
            <Carousel1 setting={articleconfig}>
              {articles.map((item, i) => (
                <ArticleCard
                  src={item.src}
                  title={item.des}
                  key={i + "articles"}
                />
              ))}
            </Carousel1>
          </Box>
        </Box>
      </Box>
      <Box
        px={{ base: "10px", md: "20px", lg: "40px" }}
        bg="#ebf2ff"
        py="20px"
        my="20px"
      >
        <Text
          fontSize={"26px"}
          pb="20px"
          fontWeight="semibold"
          textAlign={"center"}
        >
          Why Choose Us?
        </Text>
        <Flex gap="20px" justify={"center"} flexWrap="wrap">
          <WhyUs
            src="https://assets.pharmeasy.in/apothecary/images/family.svg?dim=256x0"
            title="32 Million+"
            des="Registered users as of Mar 31, 2022"
          />
          <WhyUs
            src="https://assets.pharmeasy.in/apothecary/images/deliveryBoy.svg?dim=256x0"
            title="36 Million+"
            des="Orders on Pharmeasy till date "
          />
          <WhyUs
            src="https://assets.pharmeasy.in/apothecary/images/pincodeServed.svg?dim=256x0"
            title="99000+"
            des="Unique items sold last 3 months"
          />
          <WhyUs
            src="https://assets.pharmeasy.in/apothecary/images/locationMarker.svg?dim=256x0"
            title="19500+"
            des="Pin codes serviced last 3 months"
          />
        </Flex>
      </Box>
      <Box
        px={{ base: "10px", md: "20px", lg: "40px" }}
        my="40px"
        bg="#bfeddd"
        w="95%"
        mx="auto"
        position={"relative"}
        display={{ base: "none", lg: "block" }}
      >
        <Image src="https://assets.pharmeasy.in/apothecary/images/downloadBanner.webp?dim=1440x0&q=100"></Image>
        <Box
          position={"absolute"}
          className="downloadBanner"
          w="23%"
          textAlign={"center"}
        >
          <Heading fontSize={"30px"}>
            Simplifying Healthcare Impacting Lives
          </Heading>
          <Text py="2%">Download the App for Free</Text>
          <Flex w="full" justify={"space-between"} align="center" h="60px">
            <Link href="https://pey.onelink.me/3krD/2bwqxjrj">
              <Box>
                <Image src="https://assets.pharmeasy.in/apothecary/images/googlePlay.svg?dim=256x0"></Image>
              </Box>
            </Link>
            <Link href="https://pey.onelink.me/3krD/2bwqxjrj">
              <Box>
                <Image src="https://assets.pharmeasy.in/apothecary/images/appStore.svg?dim=256x0"></Image>
              </Box>
            </Link>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};
