import React, { useState, useEffect } from "react";
import {
  Input,
  Stack,
  Card,
  CardHeader,
  CardBody,
  Text,
  Button,
  Image,
} from "@chakra-ui/react";
import axios from "axios";
import styles from "./Healthpackages.module.css";

const Healthpackages = () => {
  const [test, setTest] = useState([]);

  async function getTestData() {
    const data = await axios.get(
      "http://localhost:8080/product?category=healthPackages"
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
          <span className={styles.span_h1}>Affordable Packages</span>
          <span className={styles.span_h5}>10 Test</span>
        </div>
        <div>
          {test.map((item) => (
            <Stack spacing={10}>
              <Card
                key="md"
                size="md"
                _hover={{ borderColor: "teal" }}
                marginBottom="20px"
                className={styles.card}
              >
                <CardHeader className={styles.cardHeader}>
                  <box className={styles.head}>
                    <Image
                      src="https://assets.pharmeasy.in/web-assets/dist/dea295a0.svg"
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

export default Healthpackages;
