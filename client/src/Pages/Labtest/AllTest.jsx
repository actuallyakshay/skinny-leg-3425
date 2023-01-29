import React, { useState, useEffect } from "react";
import {
  Stack,
  Card,
  Text,
  Button,
  Image,
  Box,
  HStack,
  VStack,
  Flex,
} from "@chakra-ui/react";
import axios from "axios";
import styles from "./AllTest.module.css";

const AllTest = () => {
  const [test, setTest] = useState([]);

  async function getTestData() {
    const data = await axios.get(
      `${process.env.REACT_APP_URL}/product?category=labtest&limit&=10&page=1`
      
    );

    
      
    
    
    // setTest((prev) => [...data.data]);
    setTest(data.data);
    
  }

  useEffect(() => {
    getTestData();
  }, []);

  return (
    <Box w={["100%", "100%", "90%", "80%"]} m="auto" mt="104px">
      <Flex
        display={{ base: "flex", lg: "none" }}
        p={[2, 3, 4, 5]}
        w="full"
        justifyContent={"space-between"}
      >
        <Text fontWeight={"semibold"} color="blackAlpha.800" fontSize={"26px"}>
          Lab Tests
        </Text>
        <Text fontWeight={"semibold"} color="blackAlpha.800" fontSize={"20px"}>
          {test?.length || 0} Tests
        </Text>
      </Flex>
      <Flex
        gap={[2, 3, 4, 5]}
        flexDirection={{ base: "column", lg: "row-reverse" }}
      >
        <VStack px="4" pt={[2, 3, 4, 5]} mb={"10px"} align="start">
          <Text
            fontWeight={"semibold"}
            color="blackAlpha.600"
            fontSize={"23px"}
            borderBottom="1px solid #d7dfe5"
          >
            Order Summary
          </Text>
          <Text>Please select a test to proceed</Text>
          <Button
            colorScheme="teal"
            size="md"
            letterSpacing={".6px"}
            disabled={true}
          >
            View Cart
          </Button>
        </VStack>
        <Box>
          <Flex
            display={{ base: "none", lg: "flex" }}
            p={[2, 3, 4, 5]}
            w="full"
            justifyContent={"space-between"}
          >
            <Text
              fontWeight={"semibold"}
              color="blackAlpha.800"
              fontSize={"26px"}
            >
              Lab Tests
            </Text>
            <Text
              fontWeight={"semibold"}
              color="blackAlpha.800"
              fontSize={"20px"}
            >
              {test?.length || 0} Tests
            </Text>
          </Flex>
          {test?.map((item) => (
            <Stack direction={["column"]} spacing="24px">
              <Card
                key="md"
                size="md"
                _hover={{ borderColor: "teal" }}
                marginBottom="20px"
                className={styles.card}
              >
                <VStack align="start" w="100%" p={[2, 3, 4, 5]}>
                  <Flex w="full" alignItems="center">
                    <HStack>
                      <Image
                        src="https://assets.pharmeasy.in/web-assets/dist/6b3d644c.svg"
                        alt="Pharmecy"
                      />
                      <Text className={styles.heading} size="md">
                        {item.name}
                      </Text>
                    </HStack>
                    <Box ml="auto">
                      <Button
                        letterSpacing={".6px"}
                        colorScheme="teal"
                        size="md"
                      >
                        Select
                      </Button>
                    </Box>
                  </Flex>
                  <Flex
                    w="60%"
                    bg="#f2fff8"
                    p="2"
                    justifyContent={"space-between"}
                    fontSize="13px"
                    fontWeight={"500"}
                    color="#38544a"
                    borderRadius={"5px"}
                    _hover={{ bg: "#bfeddd", cursor: "pointer" }}
                    transition="ease-in"
                    transitionDuration={"200ms"}
                  >
                    <Text>Includes 5 Tests</Text>
                    <Text> Show all</Text>
                  </Flex>
                  <Text className={styles.text}>${item.price1} onwards</Text>
                </VStack>
              </Card>
            </Stack>
          ))}
        </Box>
      </Flex>
    </Box>
  );
};

export default AllTest;
