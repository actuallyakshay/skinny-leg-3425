import React from "react";
import CaptionCarousel from "./Carousel";
import CaptionCarouselsec from "./Carouselsec";
import { Navbar } from "../Navbar/Navbar";

import {
  Box,
  Button,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";

const Blog = () => {
  return (
    <div>
      <Navbar />
      <br />
      <br />
      <Box w="90%" margin="auto">
        <Box w="100%" margin="auto">
          <CaptionCarousel />
        </Box>

        {/* <h1>Its blog</h1> */}

        <br />
        <br />
        <br />
        <Grid
          h="900px"
          w="85%"
          m="60px auto"
          templateColumns={{ base: "repeat(7,1fr)", md: "repeat(5, 1fr)" }}
          gap={5}
        >
          <GridItem
            colStart={1}
            colEnd={5}
            h="700px"
            w="100%"
            justifySelf="center"
            textAlign="center"
          >
            <Heading
              size="2xl"
              bottomPadding="20px"
              textAlign={"left"}
              color="#212c31"
            >
              Look What's Trending!
            </Heading>

            <Image
              w="90%"
              h="100%"
              borderRadius={"30px"}
              padding="20px"
              src="https://blog-images-1.pharmeasy.in/blog/production/wp-content/uploads/2022/04/17075422/Person-Experiencing-Acidity.webp"
            ></Image>

            <Text color="#10847E" fontSize="30px" bottomPadding={"30px"}>
              HEALTH TODAY
            </Text>

            <Heading color="#212c31">
              Acidity Problems? 14 Home Remedies That Can Help
            </Heading>

            <Text m="10px 0px" fontSize="lg" bottomPadding={"30px"}>
              By Dr Prachi Garg
            </Text>
          </GridItem>

          <GridItem colStart={5} colEnd={7} w="100%" justifySelf="center">
            <Image
              h="30%"
              borderRadius={"10px"}
              src="https://blog-images-1.pharmeasy.in/blog/production/wp-content/uploads/2022/04/16065300/Image-1-375x195.webp"
            ></Image>
            <br />
            <Text color="#10847E" fontSize="18px" as="b">
              FOOD & NUTRITION / HOME REMEDIES
            </Text>
            <br />
            <br />
            <Text color="#212c31" fontSize="30px" as="b">
              Moringa Leaves - 16 Healt...
            </Text>
            <br />
            <br />
            <Text color="#10847E" fontSize="18px">
              By Nikita Banerjee
            </Text>
            <br />
            <br />

            <Image
              h="30%"
              borderRadius={"10px"}
              src="https://blog-images-1.pharmeasy.in/blog/production/wp-content/uploads/2022/06/17082440/Chandraprabha-vati-375x223.webp"
              alt="supriya"
            ></Image>
            <br />
            <Text color="#10847E" fontSize="18px" as="b">
              AYURVEDA / DOCTOR'S SPEAK
            </Text>
            <br />
            <br />
            <Text color="#212c31" fontSize="30px" as="b">
              Chandraprabha Vati: Uses,...
            </Text>
            <br />
            <br />
            <Text color="#10847E" fontSize="18px">
              By Dr Ashok Pal
            </Text>
          </GridItem>
        </Grid>
        <br />
        <br />
        <br />
        <br />
        <Heading size="2xl" padding="20px" textAlign={"left"} color="#212c31">
          Explore By Category
        </Heading>

        <br />
        <br />
        <Grid margin="auto" gap={6}>
          <CaptionCarouselsec />
        </Grid>
        <br />
        <br />
        <br />
        <br />
        <br />
        <Heading size="2xl" textAlign={"left"} color="#212c31">
          Latest Blogs
        </Heading>
        <Grid
          h="900px"
          w="100%"
          m="60px auto"
          templateColumns={{ base: "repeat(7,1fr)", md: "repeat(5, 1fr)" }}
          gap={5}
        >
          <GridItem colStart={1} colEnd={3}>
            <Image
              w="100%"
              h="50%"
              borderRadius={"20px"}
              src="https://blog-images-1.pharmeasy.in/blog/production/wp-content/uploads/2022/12/15110420/1-9-560x320.jpg"
              alt="supriya"
            ></Image>

            <Text color="#10847E" fontSize="25px">
              FEATURED
            </Text>

            <br />
            <Heading
              size="xl"
              bottomPadding="20px"
              textAlign={"left"}
              color="#212c31"
            >
              Avighna Medicare Pvt Ltd
            </Heading>
            <br />

            <Text color="#10847E">By Saksham Bhatia</Text>
          </GridItem>

          <GridItem colStart={3} colEnd={5}>
            <Image
              w="100%"
              h="50%"
              borderRadius={"20px"}
              src="https://blog-images-1.pharmeasy.in/blog/production/wp-content/uploads/2022/10/06124619/10-2-560x320.jpg"
              alt="supriya"
            ></Image>

            <Text color="#10847E" fontSize="25px">
              DIABETES / DOCTOR'S SPEAK / EXERCISE
            </Text>
            <br />

            <Heading
              size="xl"
              bottomPadding="20px"
              textAlign={"left"}
              color="#212c31"
            >
              Benefits of Shalabhasana (Locust Pose) and How to ...
            </Heading>
            <br />
            <Text color="#10847E">By Dr. Himani Bisht</Text>
            <br />
          </GridItem>
        </Grid>
        {/* ----------------------------------------------------- */}

        <Grid
          paddingTop={"-100px"}
          h="900px"
          w="100%"
          templateColumns={{ base: "repeat(7,1fr)", md: "repeat(5, 1fr)" }}
          gap={5}
        >
          <GridItem colStart={1} colEnd={3} border="1px solide green">
            <Image
              w="100%"
              h="50%"
              borderRadius={"20px"}
              src="https://blog-images-1.pharmeasy.in/blog/production/wp-content/uploads/2022/12/12104633/1-8-560x320.jpg"
              alt="supriya"
            ></Image>

            <Text color="#10847E" fontSize="25px">
              CANCER / EXERCISE / PATIENT AWARENESS
            </Text>

            <br />
            <Heading
              size="xl"
              bottomPadding="20px"
              textAlign={"left"}
              color="#212c31"
            >
              How Exercise Can Help You Deal With Breast Cancer
            </Heading>
            <br />

            <Text color="#10847E">By Saksham Bhatia</Text>
          </GridItem>

          <GridItem colStart={3} colEnd={5}>
            <Image
              w="100%"
              h="50%"
              borderRadius={"20px"}
              src="https://blog-images-1.pharmeasy.in/blog/production/wp-content/uploads/2022/12/06111050/11-1-560x320.jpg"
              alt="supriya"
            ></Image>

            <Text color="#10847E" fontSize="25px">
              DOCTOR'S SPEAK / EXERCISE
            </Text>
            <br />

            <Heading
              size="xl"
              bottomPadding="20px"
              textAlign={"left"}
              color="#212c31"
            >
              Benefits of Natarajasana (Dancer Pose) and How to ...
            </Heading>
            <br />
            <Text color="#10847E">By Dr. Ankit Sankhe</Text>
            <br />
          </GridItem>
        </Grid>
        <Button
          colorScheme="teal"
          variant="outline"
          marginLeft={"700px"}
          padding="40px 100px 40px 100px"
          align="center"
          fontSize={"30px"}
          border={"3px solid teal"}
        >
          view more
        </Button>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Grid
          h="800px"
          templateRows="repeat(3, 1fr)"
          templateColumns="repeat(6, 1fr)"
          gap={5}
        >
          <GridItem rowSpan={1} colSpan={2}>
            <Image
              src="https://blog-images-1.pharmeasy.in/blog/production/wp-content/uploads/2022/11/06122433/28-560x320.jpg"
              alt="supriya"
            ></Image>

            <br />
            <Text fontSize="3lg" color="#10847E">
              AYURVEDA / CANCER / DIABETES{" "}
            </Text>
            <br />
            <Heading color="#212c31" fontSize={"25px"}>
              Goji Berry: Uses, Benefits, Side Effects By Dr. Ra...
            </Heading>
          </GridItem>
          <GridItem rowSpan={1} colSpan={2}>
            <Image
              src="https://blog-images-1.pharmeasy.in/blog/production/wp-content/uploads/2022/11/06122833/4-15-560x320.jpg"
              alt="supriya"
            ></Image>
            <br />

            <Text color="#10847E">AYURVEDA / DIABETES / DOCTOR'S SPEAK </Text>

            <br />
            <Heading color="#212c31" fontSize={"25px"}>
              Avocado Oil: Uses, Benefits, Side Effects By Dr. R...
            </Heading>
          </GridItem>
          <GridItem rowSpan={1} colSpan={2}>
            <Image
              src="https://blog-images-1.pharmeasy.in/blog/production/wp-content/uploads/2022/05/17081934/2-2.webp"
              alt="supriya"
            ></Image>

            <Text color="#10847E">
              DOCTOR'S SPEAK / FEATURED / HOME REMEDIES{" "}
            </Text>

            <br />
            <Heading color="#212c31" fontSize={"25px"}>
              Best Home Remedies For Thick E...
            </Heading>
          </GridItem>

          <GridItem rowSpan={1} colSpan={2}>
            <Image
              src="https://blog-images-1.pharmeasy.in/blog/production/wp-content/uploads/2022/07/18013014/18.jpg"
              alt="supriya"
            ></Image>

            <br />
            <Text color="#10847E"> LIFESTYLE / PATIENT AWARENESS </Text>

            <br />
            <Heading color="#212c31" fontSize={"25px"}>
              Ashokarishta: Uses, Benefits, ...
            </Heading>
          </GridItem>

          <GridItem rowSpan={1} colSpan={2}>
            <Image
              src="https://blog-images-1.pharmeasy.in/blog/production/wp-content/uploads/2022/01/28111526/Ashokarishta.jpg"
              alt="supriya"
            ></Image>
            <br />
            <Text fontSize="3lg" color="#10847E">
              DOCTOR'S SPEAK / FEATURED / HOME REMEDIES{" "}
            </Text>
            <br />
            <Heading color="#212c31" fontSize={"25px"}>
              Best Home Remedies For Thick E...
            </Heading>
          </GridItem>
          <GridItem rowSpan={1} colSpan={2}>
            <Image
              src="https://blog-images-1.pharmeasy.in/blog/production/wp-content/uploads/2022/09/17082711/Shutterstock-Images-20-2.webp"
              alt="supriya"
            ></Image>
            <br />

            <Text color="#10847E">AYURVEDA / CANCER / DIABETES </Text>

            <br />
            <Heading color="#212c31" fontSize={"25px"}>
              Beetroot Juice: Uses, Benefits....
            </Heading>
          </GridItem>
        </Grid>

        <br />
        <br />
        <br />

        {/* ----------------------------------- */}
      </Box>
    </div>
  );
};
export default Blog;
