import {
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  Heading,
  HStack,
  Image,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { BsShieldLockFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { getLOGIN } from "../Redux/Admin/admin.actions";

function LoginPage() {
  const [loginform, setLoginform] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { name, role, isAuth, token } = useSelector(
    (state) => state?.authReducer
  );

  if (isAuth) {
    return <Navigate to="/admin/products" />;
  }

  const handleLOGIN = (e) => {
    setLoginform({ ...loginform, [e.target.name]: e.target.value });
  };

  const handleGETLOGIN = (loginform) => {
    dispatch(getLOGIN(loginform));
    navigate("/admin/products");
  };

  // if (isAuth) {
  //   return <Navigate to="/" />;
  // }

  return (
    <Box position={"relative"}>
      <Box position={"absolute"} w="fit-content" opacity={0.7}>
        <Image
          m="auto"
          src="https://d1edzrgaei4psf.cloudfront.net/newHome/12.svg"
          w="90%"
        />
      </Box>
      <Flex
        position={"sticky"}
        top="0"
        zIndex={5}
        bgColor="transparent"
        justifyContent={"space-between"}
        py="3"
        px="10"
      >
        <Box onClick={() => navigate("/")} _hover={{ cursor: "pointer" }}>
          <Image
            src="https://res.cloudinary.com/dhxtxmw5n/image/upload/v1671389264/logo_bj5fla.png"
            w="30%"
          />
        </Box>
        <HStack>
          <BsShieldLockFill color="green" fontSize={"30px"} />
          <Text
            fontWeight={"500"}
            color="blackAlpha.600"
            display={{ base: "none", md: "flex" }}
          >
            1 0 0 % {"  "} S E C U R E
          </Text>
        </HStack>
      </Flex>
      <Divider />
      <Grid
        w="80%"
        m="auto"
        position="relative"
        gridTemplateColumns={"repeat(2,1fr)"}
      >
        <Flex h="full" display={["none", "none", "flex", "flex"]}>
          <Image
            src="https://i.ibb.co/W5fTGkZ/undraw-Unlock-re-a558.png"
            w="70%"
            m="auto"
            alignContent={"end"}
          />
        </Flex>
        <Flex align={"center"} justify={"center"} flexDirection="column">
          <Stack spacing={4} w={"full"} maxW={"md"} p={6}>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input
                placeholder="your-email@example.com"
                fontWeight={"600"}
                letterSpacing="1px"
                type="text"
                value={loginform.email}
                onChange={(e) => handleLOGIN(e)}
                outline="none"
                flex="1"
                border={"none"}
                borderBottom={"1px solid #ff3e6c"}
                w="full"
                borderRadius={0}
                focusBorderColor="none"
                _hover={{ borderBottom: "1px solid #ff3e6c" }}
                _placeholder={{
                  opacity: 0.4,
                  color: "gray",
                  letterSpacing: "0",
                  fontWeight: "400",
                }}
                onFocus={{ border: "0", borderBottom: "1px solid #ff3e6c" }}
                name="email"
              />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <Input
                fontWeight={"600"}
                letterSpacing="1px"
                type="password"
                value={loginform.password}
                onChange={(e) => handleLOGIN(e)}
                outline="none"
                flex="1"
                border={"none"}
                borderBottom={"1px solid #ff3e6c"}
                w="full"
                borderRadius={0}
                focusBorderColor="none"
                placeholder="password here !"
                _hover={{ borderBottom: "1px solid #ff3e6c" }}
                _placeholder={{
                  opacity: 0.4,
                  color: "gray",
                  letterSpacing: "0",
                  fontWeight: "400",
                }}
                onFocus={{ border: "0", borderBottom: "1px solid #ff3e6c" }}
                name="password"
              />
            </FormControl>

            <Stack spacing={6}>
              <Button
                // isLoading={authLoading ? "u" : ""}
                mt="3"
                bgColor="rgba(255, 49, 109, 0.7)"
                w="full"
                size="md"
                _hover={{ bgColor: "rgba(255, 49, 109, 0.7)" }}
                letterSpacing={"1.3px"}
                fontWeight="500"
                fontSize="16px"
                color="white"
                onClick={() => handleGETLOGIN(loginform)}
              >
                Login
              </Button>
            </Stack>
          </Stack>
        </Flex>
      </Grid>
    </Box>
  );
}

export default LoginPage;
