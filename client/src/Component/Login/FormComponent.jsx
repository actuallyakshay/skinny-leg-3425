import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import {
  onAuthStateChanged,
  RecaptchaVerifier,
  signInWithPhoneNumber,
  signOut,
} from "firebase/auth";
import { Field, Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { auth } from "./firebase";

export const FormComponent = ({ setNumber }) => {
  const [user, setUser] = useState({
    phoneNumber: "",
    verified: false,
  });
  const [obj, setObj] = useState({});

  const validateNumber = (value) => {
    let error;
    if (!value) {
      error = "Phone number is required";
    } else if (value.length !== 10) {
      error = "Enter a valid phone number";
    }
    return error;
  };

  // const setUpRecapta = (number) => {
  //   const recaptchaVerifier = new RecaptchaVerifier(
  //     "recaptcha-container",
  //     { size: "invisible" },
  //     auth
  //   );
  //   recaptchaVerifier.render();
  //   return signInWithPhoneNumber(auth, number, recaptchaVerifier);
  // };
  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
  //     setUser(currentuser);
  //   });
  //   return () => unsubscribe();
  // }, [user]);

  // const logout = () => {
  //   signOut(auth);
  //   // navigate("/");
  // };

  // const verifyOtp = async () => {
  //   try {
  //     await obj.confirm(otp);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const sendOTP = async (number) => {
  //   // console.log
  //   try {
  //     const res = await setUpRecapta(`+91${number}`);
  //     console.log(res);
  //     setObj(res);
  //   } catch (e) {
  //     console.log(e.message);
  //   }
  // };

  return (
    <Box>
      <Formik
        initialValues={{ number: "" }}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            // sendOTP(values.number);
            setNumber(values.number);
            actions.setSubmitting(false);
          }, 1000);
        }}
      >
        {(props) => (
          <Form>
            <Field name="number" validate={validateNumber}>
              {({ field, form }) => (
                <FormControl
                  isInvalid={form.errors.number && form.touched.number}
                >
                  <FormLabel mb="4" fontSize={"18px"}>
                    Quick Login / Register
                  </FormLabel>
                  <Input
                    {...field}
                    name="number"
                    placeholder="Enter your phone number"
                  />
                  <FormErrorMessage>{form.errors.number}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Button
              mt={4}
              colorScheme="teal"
              isLoading={props.isSubmitting}
              type="submit"
              w="full"
            >
              Send OTP
            </Button>
            <Text mt="2" px="2" fontSize={"14px"}>
              By clicking continue, you agree with our{" "}
              <strong>Privacy Policy</strong>
            </Text>
          </Form>
        )}
      </Formik>
    </Box>
  );
};
