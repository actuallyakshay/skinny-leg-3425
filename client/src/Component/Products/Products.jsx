import React, { useState } from "react";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import styled from "styled-components";
import Filter from "../filter/Filter";
import { Box, Text, Select } from "@chakra-ui/react";
import Filterbutton from "../filter/Filterbutton";
import { useSelector,useDispatch } from "react-redux";
import { getData } from "../../Redux/products/productAction";
import {Loading} from "../Loading/Loading";
import ProductsCard from "./ProductsCard";
import { useLocation , useSearchParams } from "react-router-dom";
import { useParams} from "react-router-dom"


const Products = () => {
const [searchParams] = useSearchParams();  
const location = useLocation();
const {data, isError, isLoading} = useSelector((store) => store.product);
const dispatch = useDispatch();
const {category} = useParams();


// React.useEffect(() => {
//   if(location || data.length === 0){
//     searchParams.get("category")
//     dispatch(getData(category))
//   }
  
// }, [location.search,searchParams]);

React.useEffect(() => {
  if(location || data.length === 0){
     const category = searchParams.getAll("category");
    const queryParams = {
      params : {
        category : category,
       sort : searchParams.get("sortData") && "price1",
       order: searchParams.get("sortData")
      }
    }
    dispatch(getData(queryParams))
    
  }
  
  
}, [location.search]);




if(isError){
  return <h1>Something Went Wrong!!!</h1>
}else if(isLoading){
  return <Loading />
}else

  return (
    <>
      <WrapperBreadcrumb>
        <Breadcrumbs  />
      </WrapperBreadcrumb>

      <ButtonFilterWrapper>
        <Filterbutton />
      </ButtonFilterWrapper>

      
      <Box width={800}  display="flex" justifyContent="space-between" mb={-10}  ml={400}>
              <Box width={300}>
                <Text fontSize="27px" fontWeight="490" color="#4F585E" >
                  Mega Clearance Sale
                </Text>
              </Box>

              <Box
                width={400}
                height={47}
                display="flex"
                justifyContent="space-around"
              >
                {/* <Text display="flex" alignItems="center" color="gray.500">
                  Sort By:
                </Text> */}

              
              </Box>
            </Box>

      <div>
        <Wrapper>
          <WrapperFilter>
            <Filter />
          </WrapperFilter>

           

          <WrapperProducts>
           
           
           {
            data?.map((data) => (
              <ProductsCard
              key={data.id}
              src={data.image}
              alt={data.alt}
              name={data.name}
              price1={data.price1}
              />
            ))
           }
           
          </WrapperProducts>
        </Wrapper>
      </div>
    </>
  )
};

export default Products;

const ButtonFilterWrapper = styled.div`
  width: 70%;
  margin: auto;
  margin-bottom: 30px;
`;

const WrapperBreadcrumb = styled.div`
  width: 100%;
  margin-left: 100px;
  margin-bottom: 30px;
  margin-top: 100px;
`;

const Wrapper = styled.div`
  display: flex;
  width: 85%;
  height: auto;
  margin: auto;
`;

const WrapperFilter = styled.div`
  width: 350px;
  margin-right: 30px;
`;

const WrapperProducts = styled.div`
  width: 100%;
  margin-top:50px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, max-content));
  justify-content: center;
  grid-gap: 15px;
  font-size: 15px;
`;
