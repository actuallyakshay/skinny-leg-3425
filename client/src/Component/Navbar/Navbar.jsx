import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Image,
  Input,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { FiChevronDown } from "react-icons/fi";
import { IoPersonOutline, IoSearchOutline } from "react-icons/io5";
import { CiDiscount1 } from "react-icons/ci";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { BsCart } from "react-icons/bs";
import "./navbar.css";
import logo from "./logo.png";
import { Sidebar } from "./Sidebar";
import { useRef } from "react";
import { Login } from "../Login/Login";
import { Location } from "./Location";
export const Navbar = ({ name, avatar }) => {
  const {
    isOpen: isSearch,
    onOpen: onSearch,
    onClose: onCloseSearch,
  } = useDisclosure();
  const {
    isOpen: issidebarOpen,
    onOpen: onsidebarOpen,
    onClose: onsidebarClose,
  } = useDisclosure();
  const btnRef = useRef();
  const {
    isOpen: isLocOpen,
    onOpen: onLocOpen,
    onClose: onLocClose,
  } = useDisclosure();
  const locRef = useRef();
  const {
    isOpen: isLogin,
    onOpen: onLoginOpen,
    onClose: onLoginClose,
  } = useDisclosure();
  const logRef = useRef();
  const focusText = () => {
    document.getElementById("myText").focus();
    onSearch();
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
          align={"center"}
          borderRight={["none", "none", "1px solid #D7DFE5"]}
          px={["0", "0", "0", "40px", "80px"]}
          gap={{ base: "3", md: "5" }}
        >
          <Button
            fontSize={"24px"}
            display={["block", "block", "block", "none", "none", "none"]}
            onClick={onsidebarOpen}
            ref={btnRef}
            bg="transparent"
          >
            <AiOutlineMenuUnfold />
          </Button>
          <Image w={"40px"} src={logo}></Image>
        </Flex>
        <Box
          px={"20px"}
          display={["none", "none", "none", "block", "block", "block"]}
        >
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
            onClick={onLocOpen}
            cursor="pointer"
          >
            Select Pincode <FiChevronDown />
          </Flex>
        </Box>
        <Flex
          align={"center"}
          w={{ lg: "35%", md: "50%" }}
          px={"20px"}
          h="full"
          color={"gray"}
          display={["none", "none", "flex", "flex", "flex", "flex"]}
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
        <Flex mr="30px" gap={"20px"} w="20%">
          <Flex
            align={"center"}
            gap="1"
            display={["none", "none", "none", "flex", "flex", "flex"]}
            ref={logRef}
            onClick={onLoginOpen}
            cursor="pointer"
            w="40%"
          >
            <IoPersonOutline fontSize="20px" />
            <Text>{name ? name : "Hello,Log In"}</Text>
          </Flex>
          <Flex align={"center"} gap="1" cursor="pointer">
            <CiDiscount1 fontSize="20px" />
            <Text display={["none", "none", "flex", "flex", "flex", "flex"]}>
              Offers
            </Text>
          </Flex>
          <Flex align={"center"} gap="1" cursor="pointer">
            <BsCart fontSize="20px" />
            <Text display={["none", "none", "flex", "flex", "flex", "flex"]}>
              Cart
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <Drawer
        isOpen={issidebarOpen}
        placement="left"
        onClose={onsidebarClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody className="sidebar">
            <Sidebar Openlogin={onLoginOpen} name={name} avatar={avatar} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      <Drawer
        isOpen={isLogin}
        placement="right"
        onClose={onLoginClose}
        finalFocusRef={btnRef}
        size="sm"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <Login />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      <Drawer
        isOpen={isLocOpen}
        placement="right"
        onClose={onLocClose}
        finalFocusRef={locRef}
        size="sm"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />

          <DrawerBody>
            <Location />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};
