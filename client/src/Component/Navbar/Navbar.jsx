import { Box, Flex, Image, Input, Text, useDisclosure } from "@chakra-ui/react";
import { FiChevronDown } from "react-icons/fi";
import { IoPersonOutline, IoSearchOutline } from "react-icons/io5";
import { CiDiscount1 } from "react-icons/ci";
import { BsCart } from "react-icons/bs";
import "./navbar.css";
import logo from "./logo.png";
export const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const focusText = () => {
    document.getElementById("myText").focus();
    onOpen();
  };
  return (
    <Box>
      <Flex
        h={"64px"}
        align="center"
        px={["10px", "10px", "30px"]}
        justify="space-between"
        borderBottom={"1px solid #D7DFE5"}
      >
        <Flex
          borderRight={"1px solid #D7DFE5"}
          px={["20px", "20px", "20px", "80px"]}
        >
          <Image w={"40px"} src={logo}></Image>
        </Flex>
        <Box px={"20px"}>
          <Text display={"flex"} color="gray" fontSize="12px">
            <Image src="https://assets.pharmeasy.in/apothecary/images/ic_express%20delivery.svg?dim=16x0"></Image>
            Express delivery to
          </Text>
          <Flex
            gap={1}
            pl="8px"
            align="center"
            fontWeight={"semibold"}
            fontSize="15px"
          >
            Select Pincode <FiChevronDown />
          </Flex>
        </Box>
        <Flex
          align={"center"}
          w={{ lg: "35%", md: "40%" }}
          px={"20px"}
          h="full"
          color={"gray"}
        >
          <Flex
            align={"center"}
            border="1px solid #8897A2"
            borderRadius={"14px"}
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
              onBlur={onClose}
            >
              <IoSearchOutline />
              <Flex ml={"5px"} w="full" position="relative" fontSize={"15px"}>
                <Input
                  id="myText"
                  variant={"unstyled"}
                  onBlur={onClose}
                  border="none"
                  w="full"
                  placeholder="Search for"
                ></Input>
                <Box
                  className="animated-text"
                  display={isOpen ? "none" : "block"}
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
              borderRadius={"15px"}
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
        <Flex justify={"space-between"} mr="30px" gap={"20px"}>
          <Flex
            align={"center"}
            gap="1"
            display={["none", "none", "none", "none", "flex", "flex"]}
          >
            <IoPersonOutline />
            Hello,Log In
          </Flex>
          <Flex align={"center"} gap="1">
            <CiDiscount1 />
            Offers
          </Flex>
          <Flex align={"center"} gap="1">
            <BsCart />
            Cart
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};
