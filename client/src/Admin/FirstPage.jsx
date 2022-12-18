import React from "react";

import {
  Box,
  Flex,
  Text,
  Grid,
  Image,
  Button,
} from "@chakra-ui/react";
import AdminDashboard from "./Dashboard";
function FirstPage() {
  return (
    <>
      <AdminDashboard />
      <Box p="4" bg="#f5f5f9" _hover={{ cursor: "pointer" }}>
        {/* first grid */}
        <Grid
          gridTemplateColumns={{ base: "1fr", md: "2.10fr .5fr .5fr" }}
          textAlign=""
          gap={6}
        >
          <Box>
            <Flex
              borderRadius="10px"
              boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
              bg="white"
              gap="3rem"
            >
              <Box p="1.5rem">
                <Flex align="center" mb=".7rem">
                  <Text
                    color="#696cff"
                    fontSize="18px"
                    fontFamily="Poppins"
                    fontWeight="400"
                    mr=".7rem"
                  >
                    Congratulations Akshay ! ❤️
                  </Text>
                  <Image
                    src="https://cdn-icons-png.flaticon.com/512/685/685247.png"
                    alt="celebration"
                    w="20px"
                    h="20px"
                  />
                </Flex>
                <Text
                  color="#697a8d"
                  fontSize="14px"
                  fontFamily="Poppins"
                  fontWeight="400"
                  mr="1rem"
                  maxW="25rem"
                  mb="1rem"
                >
                  You have done{" "}
                  <span style={{ fontWeight: "600", fontSize: "15px" }}>
                    {" "}
                    72%{" "}
                  </span>
                  more sales today. Check your new badge in your profile.
                </Text>
                <Button
                  color="#696cff"
                  size="sm"
                  bg="#e7e7ff"
                  fontSize="12px"
                  fontFamily="Poppins"
                  fontWeight="400"
                  _hover={{ color: "white", bg: "#696cff" }}
                >
                  View Badge
                </Button>
              </Box>
              <Flex align="end" px="1.5rem">
                <Image
                  src="https://i.ibb.co/JnRHJZK/IMG-2271.jpg"
                  alt="person_with_laptop"
                  w="13rem"
                  h="10rem"
                  borderRadius={"20px"}
                />
              </Flex>
            </Flex>
          </Box>
          <Box>
            <Image
              src="https://i.ibb.co/wCJ2VgB/p3.png"
              alt="person_with_laptop"
              w="100%"
              h="90%"
              borderRadius="5px"
              boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
            />
          </Box>
          <Box>
            <Image
              src="https://i.ibb.co/PN6cZq2/p10.png"
              alt="person_with_laptop"
              w="100%"
              h="90%"
              borderRadius="5px"
              boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
            />
          </Box>
        </Grid>
        {/* second grid */}
        <Grid
          gridTemplateColumns={{ base: "1fr", md: "2fr 1fr" }}
          textAlign=""
          gap={6}
          rowGap={6}
          mb={6}
        >
          <Box>
            <Image
              src="https://i.ibb.co/SQLv2Dv/p16.png"
              alt="person_with_laptop"
              w="100%"
              h="100%"
              borderRadius="5px"
              boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
            />
          </Box>
          <Grid gridTemplateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={6}>
            <Box>
              <Image
                src="https://i.ibb.co/6ZSdK1P/p5.png"
                alt="person_with_laptop"
                w="100%"
                h="100%"
                borderRadius="5px"
                boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
              />
            </Box>
            <Box>
              <Image
                src="https://i.ibb.co/rbL1KvQ/p4.png"
                alt="person_with_laptop"
                w="100%"
                h="100%"
                borderRadius="5px"
                boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
              />
            </Box>
            <Box gridColumnStart={1} gridColumnEnd={4}>
              <Image
                src="https://i.ibb.co/PzQYRQ8/p6.png"
                alt="person_with_laptop"
                w="100%"
                h="100%"
                borderRadius="5px"
                boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
              />
            </Box>
          </Grid>
        </Grid>
        {/* third grid */}
        <Grid
          gridTemplateColumns={{ base: "1fr", md: ".9fr .9fr .9fr" }}
          gap={6}
          rowGap={6}
        >
          <Box>
            <Image
              src="https://i.ibb.co/Wf2VPMd/p7.png"
              alt="person_with_laptop"
              w="100%"
              h="100%"
              borderRadius="5px"
              boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
            />
          </Box>
          <Box>
            <Image
              src="https://i.ibb.co/M66fSjj/p15.png"
              alt="person_with_laptop"
              w="100%"
              h="100%"
              borderRadius="5px"
              boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
            />
          </Box>
          <Box>
            <Image
              src="https://i.ibb.co/J7xwpTw/p9.png"
              alt="person_with_laptop"
              w="100%"
              h="100%"
              borderRadius="5px"
              boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
            />
          </Box>
        </Grid>
      </Box>
    </>
  );
}

export default FirstPage;
