import React, {useState} from 'react';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import styled from "styled-components";
import Filter from '../filter/Filter';
import { Box, Text , Select} from "@chakra-ui/react"

const Products = () => {

  return (
   <>
   
    <WrapperBreadcrumb>
     <Breadcrumbs step1 step2 step3 />
     </WrapperBreadcrumb>

  <div className='product-main-container'>
     
   <Wrapper>

   <WrapperFilter>
     <Filter />
   </WrapperFilter>

   <WrapperProducts>
   <Box width={800} display="flex" justifyContent="space-between" >
        <Box width={400}>
            <Text fontSize="27px" fontWeight="490" color="#4F585E">Mega Clearance Sale</Text>
        </Box>

        <Box width={400} height={47} display="flex" justifyContent="space-around">

            <Text display="flex" alignItems="center" color="gray.500">Sort By:</Text>

            <Select placeholder='Popularity' width={250} borderColor="#4F585E">
            <option value='Relevance'>Relevance</option>
            <option value='Price low to high'>Price low to high</option>
            <option value='Price high to low'>Price high to low</option>
            </Select>
        </Box>
    </Box>

   </WrapperProducts>

   </Wrapper>

  </div>

    </>
  )
}

export default Products

const WrapperBreadcrumb = styled.div`
width: 100%;
margin-left: 100px;
margin-bottom:30px;
margin-top:30px
`;

const Wrapper = styled.div`
display: flex;
width: 85%;
height: auto;
margin:auto
`;

const WrapperFilter = styled.div`

width : 350px;
margin-right:30px
`;

const WrapperProducts = styled.div`

width: 100%;
display : grid;
grid-template-columns : repeat(auto-fit , minmax(200px,max-content)) ;
justify-content: center;
grid-gap:10px;
font-size : 15px
`