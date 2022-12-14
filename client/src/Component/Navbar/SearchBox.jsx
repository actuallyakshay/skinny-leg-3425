import { Box, Flex, Input, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { IoSearchOutline } from "react-icons/io5";

export const SearchBox = () => {
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
    <Flex
      align={"center"}
      w="full"
      px={"20px"}
      h="full"
      color={"gray"}
      display={["none", "none", "flex", "flex", "flex", "flex"]}
    >
      <Flex
        align={"center"}
        border="1px solid #8897A2"
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
          _hover={{ background: "#0E746E" }}
          px="14px"
          py="8px"
          borderRadius={"2xl"}
          cursor="pointer"
          transition={"all"}
          transitionDuration="500ms"
          color={"white"}
          mr="5px"
          fontWeight={"semibold"}
        >
          Search
        </Box>
      </Flex>
    </Flex>
  );
};
