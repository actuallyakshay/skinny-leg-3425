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
import { setUpRecapta } from "./Login";

export const FormComponent = ({ setNumber, setObj }) => {
  const validateNumber = (value) => {
    let error;
    if (!value) {
      error = "Phone number is required";
    } else if (value.length !== 10) {
      error = "Enter a valid phone number";
    }
    return error;
  };

  const sendOTP = async (number) => {
    try {
      const res = await setUpRecapta(`+91${number}`);
      console.log(res);
      setObj(res);
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <Box>
      <Formik
        initialValues={{ number: "" }}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            sendOTP(values.number);
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
      <Box id="recaptcha-container"></Box>
    </Box>
  );
};
