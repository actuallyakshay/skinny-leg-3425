import React from "react";
import {
  Text,
  Box,
  Input,
  Radio,
  RadioGroup,
  Icon,
  Checkbox,
  VStack,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useSearchParams } from "react-router-dom";

const arr = [
  "sale",
  "ayurvedic",
  "babycare",
  "diabetes",
  "disinfactents",
  "healthcareDevices",
  "healthFood",
  "immunity",
  "medicine",
  "mens",
  "stomach",
  "skincare",
];

const priceArr = [
  "0 - 100",
  "100 - 200",
  "200 - 400",
  "400 - 800",
  "800 - 1600",
  "1600 - 3000",
  "3000 & above"
]

const Filter = ({ handleClick, handleFilter }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filterData, setFilterData] = React.useState(
    searchParams.getAll("category") || []
  );
  const [sortData, setSortData] = React.useState(
    searchParams.get("sort") || ""
  );


  return (
    <>
      <div></div>

      <div>
        <Text color="#4F585E" fontSize="26px" fontWeight="610">
          Filter
        </Text>
      </div>

      <Box mt={8} mb={9}>
        <Text color="#4F585E" fontSize="18px" fontWeight="700">
          Category
        </Text>

        <RadioGroup mt={4}>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Text color="gray.500">Mega Clearance Sale</Text>
            <Radio size="lg" defaultChecked={true} colorScheme="green" />
          </Box>
        </RadioGroup>
      </Box>

      <hr />

      <Box mt={8} mb={8}>
        <Text color="#4F585E" fontSize="18px" fontWeight="700">
          Sub Category
        </Text>
      </Box>

      <hr />

      <Box mt={8} mb={8}>
        <Text color="#4F585E" fontSize="18px" fontWeight="700">
          {" "}
          Filter By
        </Text>
      </Box>

      <Box position="relative" alignItems="center">
        <Input
          placeholder="Search"
          paddingLeft={3}
          height="46px"
          borderColor="#4F585E"
          focusBorderColor="green.800"
        />
        <Icon as={SearchIcon} position="absolute" right={3} top={3}></Icon>
      </Box>

      <RadioGroup mt="4">
        <VStack gap="1" align="flex-start">
          {arr.map((el, i) => {
            return (
              <Radio
                key={i + el}
                colorScheme="green"
                borderColor="blackAlpha.700"
                value={el}
                onClick={() => handleClick(el)}
              >
                <Text textTransform={"capitalize"}>{el}</Text>
              </Radio>
            );
          })}
        </VStack>
      </RadioGroup>

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

      <RadioGroup mt="4">
        <VStack gap="1" align="flex-start">
          {priceArr.map((el, i) => {
            return (
              <Radio
                key={i + el}
                colorScheme="green"
                borderColor="blackAlpha.700"
                value={el}
                onClick={() => handleFilter(el)}
              >
                <Text textTransform={"capitalize"}>{el}</Text>
              </Radio>
            );
          })}
        </VStack>
      </RadioGroup>

    </>
  );
};

export default Filter;
