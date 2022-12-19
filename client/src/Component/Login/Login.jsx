import { Box } from "@chakra-ui/react";
import axios from "axios";
import {
  onAuthStateChanged,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "./firebase";
import { FormComponent } from "./FormComponent";
import { OtpComponent } from "./OtpComponent";
export const Login = ({ onLoginClose }) => {
  const [number, setNumber] = useState();
  const [obj, setObj] = useState({});
  const [user, setUser] = useState({
    phoneNumber: "",
    verified: false,
  });
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      setUser(currentuser);
    });
    return () => unsubscribe();
  }, [user]);

  const getdata = async (number) => {
    const phoneNumber = number.substring(3, number.length);
    var body = {
      phoneNumber: Number(phoneNumber),
    };
    let res = await axios.post(`${process.env.REACT_APP_URL}/user`, body);
    let data = console.log("data", res.data);
    console.log(data);
  };

  return (
    <Box>
      <Box id="recaptcha-container"></Box>
      {number ? (
        <OtpComponent
          obj={obj}
          getdata={getdata}
          number={number}
          setNumber={setNumber}
          onLoginClose={onLoginClose}
        />
      ) : (
        <FormComponent setObj={setObj} setNumber={setNumber} />
      )}
    </Box>
  );
};
export const setUpRecapta = (number) => {
  const recaptchaVerifier = new RecaptchaVerifier(
    "recaptcha-container",
    { size: "invisible" },
    auth
  );
  recaptchaVerifier.render();
  return signInWithPhoneNumber(auth, number, recaptchaVerifier);
};
