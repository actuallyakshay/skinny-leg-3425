import React, { useState, useEffect } from "react";
import {
  Input,
  Stack,
  Card,
  CardHeader,
  Heading,
  CardBody,
  Text,
  Button,
  Image,
} from "@chakra-ui/react";
import axios from "axios";
import LazyLoad from "react-lazyload";
import styles from "../Pages/AllTest.module.css";

const AllTest = () => {
  const [test, setTest] = useState([]);

  async function getTestData() {
    const data = await axios.get(
      "http://localhost:8080/product?category=labtest&limit=10&page=2"
    );

    setTest((prev) => [...data.data]);
  }

  useEffect(() => {
    getTestData();
  }, []);

  return (
    <div className={styles.main_container}>
      <div className={styles.container_one}>
        <div className={styles.all_test_heading}>
          <span className={styles.span_h1}>Lab Tests</span>
          <span className={styles.span_h5}>10 Test</span>
        </div>
        <div>
          {test.map((item) => (
            <LazyLoad height={250} offset={150}>
              <Stack spacing="4">
                <Card
                  key="md"
                  size="md"
                  _hover={{ borderColor: "teal", borderWidth: "2px" }}
                  marginBottom="20px"
                  className={styles.card}
                >
                  <CardHeader className={styles.cardHeader}>
                    <box className={styles.head}>
                      <Image
                        src="https://assets.pharmeasy.in/web-assets/dist/6b3d644c.svg"
                        alt="Pharmecy"
                        className={styles.Image_ph}
                      />
                      <Text className={styles.heading} size="md">
                        {item.name}
                      </Text>
                    </box>

                    <box className={styles.select}>
                      <Button colorScheme="teal" size="lg">
                        Select
                      </Button>
                    </box>
                  </CardHeader>
                  <CardBody>
                    <Text className={styles.text}>${item.price1} onwards</Text>
                  </CardBody>
                </Card>
              </Stack>
            </LazyLoad>
          ))}
        </div>
      </div>
      <div className={styles.container_two}>
        <Input variant="flushed" placeholder="Order Summary" />
        <p className={styles.para_right}>Please select a test to proceed</p>
        <Button colorScheme="teal" size="lg" disabled={true}>
          View Cart
        </Button>
      </div>
    </div>
  );
};

export default AllTest;
