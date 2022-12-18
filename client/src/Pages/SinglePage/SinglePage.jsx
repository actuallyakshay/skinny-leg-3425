import { Box, Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SingleProduct } from "./Components/SingleProduct";
export const SinglePage = () => {
  const id = useParams().id;
  const [data, setData] = useState({});
  const getData = async () => {
    const res = await fetch(
      `https://tame-elk-trench-coat.cyclic.app/product/${id}`
    );
    const data = await res.json();
    setData(data);
    return data;
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <Flex
      w="full"
      bg="#fff"
      flexDir={{ base: "column", lg: "row" }}
      h="100vh"
      mt="104"
      className="sidebar"
      py={{ base: "0", lg: "30px" }}
    >
      <Box w={{ base: "100%", lg: "75%" }}>
        <SingleProduct item={data} />
      </Box>
      <Box
        display={{ base: "none", lg: "block" }}
        w={{ base: "100%", lg: "25%" }}
      >
        Cart
      </Box>
    </Flex>
  );
};
