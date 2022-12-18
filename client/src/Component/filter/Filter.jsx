
import React from "react";
import {
  Text,
  Box,
  Input,
  Radio,
  RadioGroup,
  Icon,
  Checkbox,
  Select,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useSearchParams } from "react-router-dom";

const Filter = ({handleFilter}) => {
 const [searchParams , setSearchParams] = useSearchParams();
 const [filterData , setFilterData] = React.useState(searchParams.getAll("category") || []);
 const [sortData , setSortData] = React.useState(searchParams.get("sort") || "");


//  const handleFilter = (e) => {
//     const option = e.target.value;
//     const newFilterData = [...filterData];
//     if(newFilterData.includes(option)){
//         newFilterData.splice(newFilterData.indexOf(option), 1);
//     }else{
//         newFilterData.push(option)
//     }
//     setFilterData(newFilterData)
//  }


 
  const handleFilter = (e) => {
    const option = e.target.value;
    const newFilterData = [...filterData];
    if (newFilterData.includes(option)) {
      newFilterData.splice(newFilterData.indexOf(option), 1);
    } else {
      newFilterData.push(option);
    }
    setFilterData(newFilterData);
  };

 const handleSort = (e) => {
    setSortData(e.target.value)
 }

 React.useEffect(() => {
    const params = {};
    filterData && (params.category = filterData);
    sortData && (params.sort = sortData)
    setSearchParams(params)
 }, [filterData , sortData, setSearchParams]);

  return (
    <>

<div>
         <Select
                  placeholder="Sort By"
                  width={250}
                  borderColor="#4F585E"
                  value="sortData"
                 onChange={handleSort}
                >
                  <option value="asc" defaultValue={sortData === "asc"} onChange={handleSort} >Price low to high</option>
                  <option value="desc" defaultValue={sortData === "desc"}  onChange={handleSort} >Price high to low</option>
                  <option value="offerasc">Discount low to high</option>
                  <option value="offerdesc">Discount high to low</option>
                </Select>
    </div>

    <div>
       <Text color="#4F585E" fontSize="26px" fontWeight="610">Filter</Text>
    </div>

    <Box mt={8} mb={9} >
     <Text color="#4F585E" fontSize="18px" fontWeight="700">Category</Text>

      <RadioGroup mt={4}>
     <Box display="flex" alignItems="center" justifyContent="space-between">
        <Text color="gray.500" >Mega Clearance Sale</Text>
        <Radio size="lg" colorScheme="green" />
        </Box>
     </RadioGroup>

    </Box>

    <hr />

    <Box mt={8} mb={8} >
        <Text color="#4F585E" fontSize="18px" fontWeight="700" >Sub Category</Text>
    </Box>

    <hr />

    <Box mt={8} mb={8}>
        <Text color="#4F585E" fontSize="18px" fontWeight="700"> Filter By</Text>
    </Box>

    <Box position="relative" alignItems="center" >
        <Input placeholder='Search' paddingLeft={3} height="46px" borderColor="#4F585E" focusBorderColor='green.800' />
         <Icon as={SearchIcon} position="absolute" right={3} top={3} ></Icon> 
    </Box>

    <Box mt={4} display="flex" justifyContent="space-around" >
        <Box width="80%">
          <Text>Ayurvedic</Text>
        </Box>
        <Box width="20%" display="flex" justifyContent="space-between">

            <Text fontSize="15px">(2)</Text>
             <Checkbox colorScheme="green" borderColor="blackAlpha.700" value="ayurvedic" onChange={() => handleFilter("ayurvedic")}  ></Checkbox>

          <Text fontSize="15px">(2)</Text>
          <Checkbox
            colorScheme="green"
            borderColor="blackAlpha.700"
            value="ayurvedic"
            onChange={handleFilter}
            defaultChecked={filterData.includes("ayurvedic")}
          ></Checkbox>

        </Box>
      </Box>

      <Box mt={4} display="flex" justifyContent="space-around">
        <Box width="80%">
          <Text>Medicine</Text>
        </Box>
        <Box width="20%" display="flex" justifyContent="space-between">

            <Text fontSize="15px">(1)</Text>
             <Checkbox colorScheme="green" borderColor="blackAlpha.700" value="medicine" onChange={() => handleFilter("medicine")} ></Checkbox>

          <Text fontSize="15px">(1)</Text>
          <Checkbox
            colorScheme="green"
            borderColor="blackAlpha.700"
            value="medicine"
            onChange={handleFilter}
            defaultChecked={filterData.includes("medicine")}
          ></Checkbox>

        </Box>
      </Box>

      <Box mt={4} display="flex" justifyContent="space-around">
        <Box width="80%">
          <Text>Babycare</Text>
        </Box>
        <Box width="20%" display="flex" justifyContent="space-between">
          <Text fontSize="15px">(2)</Text>
          <Checkbox
            colorScheme="green"
            borderColor="blackAlpha.700"
            value="babycare"
            onChange={handleFilter}
            defaultChecked={filterData.includes("babycare")}
          ></Checkbox>
        </Box>
      </Box>

      <Box mt={4} display="flex" justifyContent="space-around">
        <Box width="80%">
          <Text>Diabetes</Text>
        </Box>
        <Box width="20%" display="flex" justifyContent="space-between">
          <Text fontSize="15px">(1)</Text>
          <Checkbox
            colorScheme="green"
            borderColor="blackAlpha.700"
            value="diabetes"
            onChange={handleFilter}
            defaultChecked={filterData.includes("diabetes")}
          ></Checkbox>
        </Box>
      </Box>

      <Box mt={4} display="flex" justifyContent="space-around">
        <Box width="80%">
          <Text>Health Food</Text>
        </Box>
        <Box width="20%" display="flex" justifyContent="space-between">
          <Text fontSize="15px">(1)</Text>
          <Checkbox
            colorScheme="green"
            borderColor="blackAlpha.700"
            value="healthFood"
            onChange={handleFilter}
            defaultChecked={filterData.includes("healthFood")}
          ></Checkbox>
        </Box>
      </Box>

      <Box mt={4} display="flex" justifyContent="space-around">
        <Box width="80%">
          <Text>Immunity</Text>
        </Box>
        <Box width="20%" display="flex" justifyContent="space-between">
          <Text fontSize="15px">(1)</Text>
          <Checkbox
            colorScheme="green"
            borderColor="blackAlpha.700"
            value="immunity"
            onChange={handleFilter}
            defaultChecked={filterData.includes("immunity")}
          ></Checkbox>
        </Box>
      </Box>

      <Box mt={4} display="flex" justifyContent="space-around">
        <Box width="80%">
          <Text>Mens</Text>
        </Box>
        <Box width="20%" display="flex" justifyContent="space-between">
          <Text fontSize="15px">(1)</Text>
          <Checkbox
            colorScheme="green"
            borderColor="blackAlpha.700"
            value="mens"
            onChange={handleFilter}
            defaultChecked={filterData.includes("mens")}
          ></Checkbox>
        </Box>
      </Box>

      <Box mt={4} display="flex" justifyContent="space-around">
        <Box width="80%">
          <Text>Skin Care</Text>
        </Box>
        <Box width="20%" display="flex" justifyContent="space-between">
          <Text fontSize="15px">(1)</Text>
          <Checkbox
            colorScheme="green"
            borderColor="blackAlpha.700"
            value="skincare"
            onChange={handleFilter}
            defaultChecked={filterData.includes("skincare")}
          ></Checkbox>
        </Box>
      </Box>

      <Box mt={4} display="flex" justifyContent="space-around">
        <Box width="80%">
          <Text>Dis-Infactants</Text>
        </Box>
        <Box width="20%" display="flex" justifyContent="space-between">
          <Text fontSize="15px">(1)</Text>
          <Checkbox
            colorScheme="green"
            borderColor="blackAlpha.700"
            value="disinfactents"
            onChange={handleFilter}
            defaultChecked={filterData.includes("disinfactents")}
          ></Checkbox>
        </Box>
      </Box>

      <Box mt={4} display="flex" justifyContent="space-around">
        <Box width="80%">
          <Text>Healthcare Devices</Text>
        </Box>
        <Box width="20%" display="flex" justifyContent="space-between">
          <Text fontSize="15px">(1)</Text>
          <Checkbox
            colorScheme="green"
            borderColor="blackAlpha.700"
            value="healthcareDevices"
            onChange={handleFilter}
            defaultChecked={filterData.includes("healthcareDevices")}
          ></Checkbox>
        </Box>
      </Box>

      <Box mt={4} mb={4}>
        <Text color="#10847E" fontWeight="bold">
          View More
        </Text>
      </Box>

      <hr />

      <Box mt={5}>
        <Text color="#4F585E" fontWeight="bold" fontSize="17px">
          Price
        </Text>
      </Box>

      <Box mt={4} display="flex" justifyContent="space-around">
        <Box width="80%">
          <Text>0 - 100</Text>
        </Box>
        <Box width="20%" display="flex" justifyContent="space-between">
          <Text fontSize="15px">(3)</Text>
          <Checkbox colorScheme="green" borderColor="blackAlpha.700"></Checkbox>
        </Box>
      </Box>

      <Box mt={4} display="flex" justifyContent="space-around">
        <Box width="80%">
          <Text>100 - 200</Text>
        </Box>
        <Box width="20%" display="flex" justifyContent="space-between">
          <Text fontSize="15px">(2)</Text>
          <Checkbox colorScheme="green" borderColor="blackAlpha.700"></Checkbox>
        </Box>
      </Box>

      <Box mt={4} display="flex" justifyContent="space-around">
        <Box width="80%">
          <Text>200 - 400</Text>
        </Box>
        <Box width="20%" display="flex" justifyContent="space-between">
          <Text fontSize="15px">(2)</Text>
          <Checkbox colorScheme="green" borderColor="blackAlpha.700"></Checkbox>
        </Box>
      </Box>

      <Box mt={4} display="flex" justifyContent="space-around">
        <Box width="80%">
          <Text>400 - 800</Text>
        </Box>
        <Box width="20%" display="flex" justifyContent="space-between">
          <Text fontSize="15px">(6)</Text>
          <Checkbox colorScheme="green" borderColor="blackAlpha.700"></Checkbox>
        </Box>
      </Box>

      <Box mt={4} display="flex" justifyContent="space-around">
        <Box width="80%">
          <Text>800 - 1600</Text>
        </Box>
        <Box width="20%" display="flex" justifyContent="space-between">
          <Text fontSize="15px">(3)</Text>
          <Checkbox colorScheme="green" borderColor="blackAlpha.700"></Checkbox>
        </Box>
      </Box>

      <Box mt={4} display="flex" justifyContent="space-around">
        <Box width="80%">
          <Text>1600 - 3000</Text>
        </Box>
        <Box width="20%" display="flex" justifyContent="space-between">
          <Text fontSize="15px">(7)</Text>
          <Checkbox colorScheme="green" borderColor="blackAlpha.700"></Checkbox>
        </Box>
      </Box>

      <Box mt={4} display="flex" justifyContent="space-around">
        <Box width="80%">
          <Text>3000 and above</Text>
        </Box>
        <Box width="20%" display="flex" justifyContent="space-between">
          <Text fontSize="15px">(2)</Text>
          <Checkbox colorScheme="green" borderColor="blackAlpha.700"></Checkbox>
        </Box>
      </Box>
    </>
  );
};

export default Filter;
