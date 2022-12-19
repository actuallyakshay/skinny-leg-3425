import React, { ReactNode } from "react";
import {
  Avatar,
  Box,
  Flex,
  HStack,
  Link,
  Text,
  Image,
  Button,
  Divider,
} from "@chakra-ui/react";
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
  FiBell,
  FiChevronDown,
} from "react-icons/fi";
import { BsFillShieldLockFill } from "react-icons/bs";
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineLogin } from "react-icons/ai";
import { RiLogoutCircleLine } from "react-icons/ri";
import { GET_SIGNOUT } from "../Redux/Admin/admin.types";

const LinkItems = [
  { name: "Home", icon: FiHome },
  { name: "Trending", icon: FiTrendingUp },
  { name: "Explore", icon: FiCompass },
  { name: "Favourites", icon: FiStar },
  { name: "Settings", icon: FiSettings },
];

export default function AdminDashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { name, role, isAuth, token } = useSelector(
    (state) => state?.authReducer
  );

  if (!isAuth) {
    return <Navigate to="/admin/login" />;
  }

  const handleSignout = () => {
    if (isAuth) {
      dispatch({ type: GET_SIGNOUT });
    } else if (!isAuth) {
      navigate("/admin/login");
    }
  };

  return (
    <Box>
      <Flex
        position={"sticky"}
        top="0"
        zIndex={5}
        justifyContent={"space-between"}
        bgColor="#e7e7ff"
        px={5}
      >
        <Box
          w="200px"
          onClick={() => navigate("/")}
          _hover={{ cursor: "pointer" }}
        >
          <Image
            src="https://res.cloudinary.com/dhxtxmw5n/image/upload/v1671389264/logo_bj5fla.png"
            w="70%"
          />
        </Box>
        <HStack gap={{ base: "2", sm: "2", md: "5", lg: "12" }}>
          <Link
            display={role == "ProductManager" ? "none" : ""}
            onClick={() => navigate("/admin/dashboard")}
          >
            Dashboard
          </Link>
          <Link onClick={() => navigate("/admin/products")}>Products</Link>
          <Link
            display={role == "ProductManager" ? "none" : ""}
            onClick={() => navigate("/admin/users")}
          >
            Users
          </Link>
          <Link onClick={() => navigate("/admin/trash")}>Trash</Link>
          <Link
            display={role == "ProductManager" ? "none" : ""}
            onClick={() => navigate("/admin/createuser")}
          >
            Create User
          </Link>
        </HStack>
        <HStack display={{ base: "none", md: "flex" }}>
          <Avatar name={name} />
          <Text>{role}</Text>
          <Button
            fontSize={"sm"}
            fontWeight={200}
            variant={"link"}
            color="black"
            leftIcon={isAuth ? <AiOutlineLogin /> : <RiLogoutCircleLine />}
            onClick={() => handleSignout()}
          >
            {isAuth ? "Signout" : "Login"}
          </Button>
        </HStack>
      </Flex>
      <Divider />
      {/* <FirstPage /> */}
    </Box>
  );
}
