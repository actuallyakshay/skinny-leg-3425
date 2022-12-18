import React, { useEffect, useState } from "react";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import styled from "styled-components";
import Filter from "../filter/Filter";
import { Box, Text, Select, Grid, Flex } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { getProductData } from "../../Redux/products/productAction";
import { Loading } from "../Loading/Loading";
import { ProductCard } from "./ProductsCard";
import { useLocation, useSearchParams } from "react-router-dom";

const Products = () => {
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const { productData, isError, isLoading } = useSelector(
    (store) => store?.product
  );
  const dispatch = useDispatch();
  // const { category } = useParams();
  const [cat, setCat] = useState("sale");

  // React.useEffect(() => {
  //   if(location || data.length === 0){
  //     searchParams.get("category")
  //     dispatch(getProductData(category))
  //   }

  // }, [location.search,searchParams]);

  // React.useEffect(() => {
  //   if(location || data.length === 0){
  //      const category = searchParams.getAll("category");
  //     const queryParams = {
  //       params : {
  //         category : category,
  //        sort : searchParams.get("sortData") && "price1",
  //         order: searchParams.get("sortData")
  //       }
  //     }
  //     dispatch(getProductData(queryParams))

  //   }
  // }, [location.search]);

  useEffect(() => {
    dispatch(getProductData(cat));
  }, [cat, dispatch]);

  const handleClick = (val) => {
    setCat(val);
  };

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
      <Box w="100%" overflowX={"hidden"}>
        <Box ml={{ base: "10px", lg: "100px" }}>
          <WrapperBreadcrumb>
            <Breadcrumbs />
          </WrapperBreadcrumb>
        </Box>
        <Flex px="5" w="full" justifyContent="space-between">
          <Text fontSize="27px" fontWeight="490" color="#4F585E">
            Mega Clearance Sale
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
                <Filter handleClick={handleClick} />
              </WrapperFilter>
            </Box>
            <Grid
              fontFamily={"poppins"}
              gridTemplateColumns={{
                base: "repeat(1,1fr)",
                md: "repeat(2,1fr)",
                lg: "repeat(3,1fr)",
              }}
              w="full"
              gap="3"
              rowGap={[3, 3, 5, 6]}
            >
              {productData?.map((data) => (
                <ProductCard key={data._id} {...data} />
              ))}
            </Grid>
          </Wrapper>
        </Box>
      </Box>
    );
};

export default Products;

// const ButtonFilterWrapper = styled.div`
//   width: 70%;
//   margin: auto;
//   margin-bottom: 30px;
// `;

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

// const WrapperProducts = styled.div`
//   width: 100%;
//   margin-top: 50px;
//   display: grid;
//   grid-template-columns: repeat(3, 1fr);
//   justify-content: center;
//   /* grid-gap: 2px; */
//   font-size: 15px;
// `;
