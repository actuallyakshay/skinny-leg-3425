import React, { useEffect, useState } from "react";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import styled from "styled-components";
import Filter from "../filter/Filter";
import { Box, Text, Select, Grid, Flex } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { getProductData } from "../../Redux/products/productAction";
import { useLocation, useSearchParams } from "react-router-dom";
import  ProComponent  from "./ProComponent";
import Pagination from "../pagination/Pagination";

const Products = () => {
  const { productData, isError, isLoading } = useSelector(
    (store) => store?.product
  );
  
  const dispatch = useDispatch();

  const [cat, setCat] = useState("sale");
  const [page,setPage] = useState(1)

  const handlePageClick = () => {

  }
  
  useEffect(() => {
    dispatch(getProductData(cat,page));
  }, [cat,page, dispatch]);

  

  const handleClick = (val) => {
    setCat(val);
  };

  const handleFilter = (prc) => {
    let temp = prc.split(" - ").join(",");
    dispatch(getProductData(cat,"","",temp));
  }

  const handleSort = (val) => {
    console.log({ val });
    dispatch(getProductData(cat, "", val));
  };
  const handleSortDiscount = (val) => {
    console.log({ val });
    dispatch(getProductData(cat, "", "", "", val));
  };

  if (isError) {
    return <h1>Something Went Wrong!!!</h1>;
  } else
    return (
      <>
        <Box w="100%" overflowX={"hidden"}>
          <Box ml={{ base: "10px", lg: "100px" }}>
            <WrapperBreadcrumb>
              <Breadcrumbs />
            </WrapperBreadcrumb>
          </Box>
          <Flex px="5" w="full" justifyContent="space-between">
            <Text fontSize="27px" fontWeight="490" color="#4F585E">
            Category :   {cat}
            </Text>
            <Select
              size="sm"
              placeholder="Sort By"
              width={250}
              borderColor="#4F585E"
              onChange={(e) => handleSort(e.target.value)}
            >
              <option value="asc">Price low to high</option>
              <option value="desc">Price high to low</option>
            </Select>
          </Flex>
          <Box
            width={800}
            display="flex"
            justifyContent="space-between"
            mb={-10}
            ml={400}
          >
            <Box
              width={400}
              height={47}
              display="flex"
              justifyContent="space-around"
            ></Box>
          </Box>
          <Box overflowX={"hidden"}>
            <Wrapper>
              <Box
                display={{ base: "none", lg: "flex" }}
                w={{ base: "0", lg: "25%" }}
              >
                <WrapperFilter>
                  <Filter
                    handleClick={handleClick}
                    handleFilter={handleFilter}
                  />
                </WrapperFilter>
              </Box>

              <ProComponent productData={productData} />
            </Wrapper>
          </Box>
        </Box>

        <Pagination handlePageClick={(val) => setPage(val)} current={page} />
      </>
    );
};

export default Products;


const WrapperBreadcrumb = styled.div`
  width: max-content;
  /* margin-left: 100px;/ */
  margin-bottom: 30px;
  margin-top: 100px;
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 40px;
  padding: 0px 10px;
  height: auto;
  margin: auto;
`;

const WrapperFilter = styled.div`
  width: 350px;
  margin-right: 30px;
`;

