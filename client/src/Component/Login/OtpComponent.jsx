import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";

export const OtpComponent = ({ number, setOtp, setNumber }) => {
  const validateOTP = (value) => {
    let error;
    if (!value) {
      error = "OTP is required";
    } else if (value.length !== 6) {
      error = "Enter a valid OTP";
    }
    return error;
  };
  return (
    <Box>
      <Formik
        initialValues={{ name: "" }}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            setOtp(values.name);
            actions.setSubmitting(false);
          }, 1000);
        }}
      >
        {(props) => (
          <Form>
            <Field name="name" validate={validateOTP}>
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.name && form.touched.name}>
                  <FormLabel mb="4" fontSize={"18px"}>
                    Enter OTP sent to +91{number}
                  </FormLabel>
                  <Input {...field} placeholder="Enter OTP" />
                  <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Flex justify={"space-between"} py="4" fontSize={"14px"}>
              <Text color={"teal"} onClick={() => setNumber(null)}>
                Change Number
              </Text>
              <Text color={"teal"}>Resend OTP</Text>
            </Flex>
            <Button
              colorScheme="teal"
              isLoading={props.isSubmitting}
              type="submit"
              w="full"
            >
              Continue
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
