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
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { FiChevronDown } from "react-icons/fi";
import { IoPersonOutline } from "react-icons/io5";
import { CiDiscount1 } from "react-icons/ci";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { BsCart } from "react-icons/bs";
import "./navbar.css";
import logo from "./logo.png";
import { Sidebar } from "./Sidebar";
import { useEffect, useRef, useState } from "react";
import { Login } from "../Login/Login";
import { Location } from "./Location";
import { SearchBox } from "./SearchBox";
import { RouteLinks } from "./RouteLinks";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Coupon } from "../../Pages/Cart/Coupon";
import { RiLogoutCircleLine } from "react-icons/ri";
import { GET_SIGNOUT } from "../../Redux/Admin/admin.types";
export const Navbar = ({ name, avatar, pin }) => {
  const location = useLocation();
  const dispatch = useDispatch();
  // const [number, setNumber] = useState();
  const [display, setDisplay] = useState(false);
  const { userName } = useSelector((state) => state?.authReducer);
  const { userAuth } = useSelector((state) => state?.authReducer);
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
  const {
    isOpen: isOffer,
    onOpen: onOfferOpen,
    onClose: onOfferClose,
  } = useDisclosure();
  const logRef = useRef();
  const offerRef = useRef();
  const [active, setActive] = useState(" ");
  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);
    if (location.pathname.includes("admin")) {
      setDisplay(true);
    } else {
      setDisplay(false);
    }
    return () => window.removeEventListener("scroll", stickNavbar);
  }, [location]);
  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 40 ? setActive("navbar") : setActive("");
    }
  };

  // console.log({ userName });
  return (
    <Box
      display={display ? "none" : "block"}
      className={`${active} nav`}
      bg="white"
    >
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
          pr={["0", "0", "0", "20px", "40px"]}
          pl={["0", "0", "0", "10px", "20px"]}
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
          <Link to={"/"}>
            <Image w="150px" src={logo}></Image>
          </Link>
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
            <Text>{pin ? pin : "Select Pincode"}</Text>
            <FiChevronDown />
          </Flex>
        </Box>
        <Box
          w={{ md: "50%", lg: "40%" }}
          display={["none", "none", "flex", "flex", "flex", "flex"]}
        >
          <SearchBox />
        </Box>
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
            <Text whiteSpace={"nowrap"}>
              {userAuth ? (
                <Flex align={"center"} w="max-content">
                  <Text>Akshay</Text>
                </Flex>
              ) : (
                "Hello,Log In"
              )}
            </Text>
          </Flex>
          <Text
            display={userAuth ? "flex" : "none"}
            onClick={() => {
              dispatch({ type: GET_SIGNOUT }) && window.location.reload();
            }}
            cursor={"pointer"}
          >
            <RiLogoutCircleLine />
          </Text>
          <Flex
            align={"center"}
            gap="1"
            ref={offerRef}
            onClick={onOfferOpen}
            cursor="pointer"
          >
            <CiDiscount1 fontSize="20px" />
            <Text display={["none", "none", "flex", "flex", "flex", "flex"]}>
              Offers
            </Text>
          </Flex>
          <Flex align={"center"} gap="1" cursor="pointer">
            <BsCart fontSize="20px" />
            <Link to="/cart">
              <Text display={["none", "none", "flex", "flex", "flex", "flex"]}>
                Cart
              </Text>
            </Link>
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
            <Sidebar
              Openlogin={onLoginOpen}
              name={userName || "Akshay"}
              avatar={avatar}
            />
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
          <DrawerHeader borderBottom={"1px solid #d7dfe5"}>
            <Flex justify={"center"}>
              <Image w="250px" src={logo}></Image>
            </Flex>
          </DrawerHeader>

          <DrawerBody>
            <Login
              // number={number}
              // setnumber={setNumber}
              onLoginClose={onLoginClose}
            />
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
            <Location onLogin={onLoginOpen} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      <Box w="full" h="40px" borderBottom={"1px solid #D7DFE5"}>
        <Box
          display={["none", "none", "none", "block", "block", "block"]}
          h="full"
        >
          <Flex h="full" justify={"center"} align="center">
            <RouteLinks mx="-4px" link={"/medicine"} title={"Medicine"} />
            <RouteLinks mx="-4px" title={"Lab Test"} link={"/labtest"} />
            <RouteLinks mx="-4px" link={"/products"} title={"Healthcare"} />
            <RouteLinks mx="-4px" title={"Surgeries"} />
            <RouteLinks mx="4px" link={"/blog"} title={"Health Blogs"} />
            <RouteLinks mx={"-20px"} title={"PLUS"} />
            <RouteLinks mx={"-20px"} link={"/offers"} title={"Offers"} />
            <RouteLinks title={"Value Store"} />
          </Flex>
        </Box>
        <Box
          h="full"
          px={"20px"}
          display={["block", "block", "block", "none", "none", "none"]}
        >
          <Flex
            gap={1}
            align="center"
            justify={"center"}
            h="full"
            fontWeight={"semibold"}
            fontSize="15px"
            onClick={onLocOpen}
            cursor="pointer"
          >
            <Image src="https://assets.pharmeasy.in/apothecary/images/ic_express%20delivery.svg?dim=16x0"></Image>
            <Text display={"flex"} color="gray" fontSize="12px">
              Express delivery to
            </Text>
            <Text>{pin ? pin : "Select Pincode"}</Text>
            <FiChevronDown />
          </Flex>
        </Box>
      </Box>
      <Coupon isOpen={isOffer} btnRef={offerRef} onClose={onOfferClose} />
    </Box>
  );
};
