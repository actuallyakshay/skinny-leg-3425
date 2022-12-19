import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  Input,
  InputGroup,
  InputLeftAddon,
  Text,
  VStack,
} from "@chakra-ui/react";
import { VscChevronRight } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { auth } from "./firebase";
import {
  onAuthStateChanged,
  RecaptchaVerifier,
  signInWithPhoneNumber,
  signOut,
} from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { getLOGINbyNUMBER } from "../../Redux/Admin/admin.actions";
import axios from "axios";
export const Login = ({ onLoginClose }) => {
  const [otp, setOtp] = useState();
  const [number, setNumber] = useState();
  const [show, setShow] = useState(true);
  const [user, setUser] = useState();
  const [userDetails, setUserDetails] = useState();
  const dispatch = useDispatch();
  const [userData, setData] = useState({});
  const userName = useSelector((state) => state?.authReducer?.userName);
  // const userAuth = useSelector((state) => state?.authReducer?.userAuth);
  const setUpRecapta = (number) => {
    const recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      { size: "invisible" },
      auth
    );
    recaptchaVerifier.render();
    return signInWithPhoneNumber(auth, number, recaptchaVerifier);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      setUser(currentuser);
    });
    return () => unsubscribe();
  }, [user]);
  const logout = () => {
    signOut(auth);
    navigate("/");
  };

  // const getdata = () => {
  //   let body = {
  //     phoneNumber: number,
  //   };
  //   axios
  //     .get(`${process.env.REACT_APP_URL}/user`, body)
  //     .then((res) => console.log(res.data));
  // };

  const [confirmObj, setConfrimObj] = useState();
  const navigate = useNavigate();
  const [takeName, setTakeName] = useState(false);
  const [name, setName] = useState("");
  const submitNumber = async () => {
    const phone = `+91${number}`;
    setNumber(number);
    try {
      const res = await setUpRecapta(phone);
      setConfrimObj(res);
      setShow(res ? false : true);
    } catch (error) {
      console.log(error);
    }
  };
  const isError = number === "";
  const verifyOtp = async () => {
    try {
      await confirmObj.confirm(otp);
      userName ? onLoginClose() : setTakeName(true);
      dispatch(getLOGINbyNUMBER(number, true));
      // getdata();
      onLoginClose();
    } catch (error) {
      console.log(error);
    }
  };
  const handleUserData = async () => {
    setUserDetails({ ...userDetails, name: name, mobile: number });
    setUser({ ...user, name: name });
  };
  // console.log(otp);
  // if (userAuth)
  //   return (
  //     <Box>
  //       <Text>User Name : {userName}</Text>
  //       <Box>Logout</Box>
  //     </Box>
  //   );
  return (
    <Box>
      <VStack
        align={"center"}
        w="360px"
        gap={[0, 0, 0, 2, 2, 2]}
        display={takeName ? "none" : "flex"}
        px={2}
      >
        <FormControl isInvalid={isError}>
          <InputGroup>
            <InputLeftAddon children="+91" />
            <Input
              type="tel"
              value={number}
              placeholder="Enter your mobile number"
              onChange={(e) => setNumber(e.target.value)}
            />
          </InputGroup>
          {!isError ? (
            ""
          ) : (
            <FormErrorMessage>
              <Text color={"red"}>Please enter valid Mobile Number!</Text>
            </FormErrorMessage>
          )}
        </FormControl>
        <Box id="recaptcha-container" />
        <Box h="80px" display={show ? "flex" : "none"}>
          <Button onClick={submitNumber} colorScheme={"teal"} size="sm">
            Send otp
          </Button>
        </Box>
        <VStack w="full" display={show ? "none" : "block"} gap={3}>
          <FormControl>
            <InputGroup>
              <Input
                type="tel"
                value={otp}
                placeholder="Enter your OTP"
                onChange={(e) => setOtp(e.target.value)}
              />
            </InputGroup>
          </FormControl>
          <Box h="60px">
            <Button
              w="full"
              onClick={verifyOtp}
              bg={"#008ecc"}
              color="white"
              fontWeight={"bold"}
              _hover={{ bg: "#008ecc" }}
            >
              Verify
            </Button>
          </Box>
        </VStack>
      </VStack>
      <VStack w="360px" display={takeName ? "flex" : "none"} gap={3}>
        <Input
          type={"text"}
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter Name"
        />
        <Box h="60px">
          <Button
            onClick={handleUserData}
            bg={"#008ecc"}
            color="white"
            fontWeight={"bold"}
            _hover={{ bg: "#008ecc" }}
          >
            Confirm
          </Button>
        </Box>
      </VStack>
    </Box>
  );
};
