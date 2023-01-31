import { Box, Flex, Input, useDisclosure } from "@chakra-ui/react";
import React, { useState } from "react";
import { useEffect } from "react";
import { IoSearchOutline } from "react-icons/io5";
import searchData from "./db.json";
import { useNavigate } from "react-router-dom";
// import { async } from './../../../../server/src/config/db';

export const SearchBox = () => {
  const [searchedValue, setSearchedValue] = useState("");
  const [searchedData, setSearchedData] = useState([]);
  const navigate = useNavigate();

  function handleClick() {
    navigate("/searchedData");
    window.location.reload();
  }

  useEffect(() => {
    handleChange();
  }, [searchedValue]);

  const handleChange = async (e) => {
    setSearchedValue(e.target.value);
    // e.preventDefault();
    const data = searchData
      .map((data) => data)
      .filter((data) => data.name.startsWith(e.target.value) || data.category.startsWith(e.target.value))

    const shortData = data.slice(0, 40);
    setSearchedData([...data]);
    localStorage.setItem("searchData", JSON.stringify(shortData));

    console.log(searchedData, "searchlatest");
  };

  const {
    isOpen: isSearch,
    onOpen: onSearch,
    onClose: onCloseSearch,
  } = useDisclosure();
  const focusText = () => {
    document.getElementById("myText").focus();
    onSearch();
  };
  return (
    <Flex align={"center"} w="full" px={"20px"} h="full" color={"gray"}>
      <Flex
        align={"center"}
        border="1px solid #D7DFE5"
        borderRadius={"2xl"}
        py="2px"
        pl="10px"
        justify={"space-between"}
        h="75%"
        w="full"
      >
        <Flex
          align={"center"}
          w="full"
          onClick={focusText}
          onBlur={onCloseSearch}
        >
          <IoSearchOutline />
          <Flex ml={"5px"} w="full" position="relative" fontSize={"15px"}>
            <Input
              id="myText"
              variant={"unstyled"}
              onBlur={onCloseSearch}
              value={searchedValue}
              onChange={(e) => handleChange(e)}
              border="none"
              w="full"
              placeholder="Search for"
            ></Input>
            <Box
              className="animated-text"
              display={isSearch ? "none" : "block"}
            >
              <div className="line">Medicine</div>
              <div className="line">Shampoo</div>
              <div className="line">Health Drinks</div>
              <div className="line">Home Care</div>
            </Box>
          </Flex>
        </Flex>

        <Box
          bg={"#10847E"}
          _hover={{ background: "#0A534F" }}
          px="14px"
          py="8px"
          borderRadius={"2xl"}
          cursor="pointer"
          transition={"all"}
          transitionDuration="500ms"
          color={"white"}
          mr="5px"
          fontWeight={"semibold"}
          onClick={handleClick}
        >
          Search
        </Box>
      </Flex>
    </Flex>
  );
};
