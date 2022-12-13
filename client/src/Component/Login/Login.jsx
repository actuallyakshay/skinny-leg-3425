import { Box } from "@chakra-ui/react";
import { useState } from "react";
import { FormComponent } from "./FormComponent";
import { OtpComponent } from "./OtpComponent";
export const Login = () => {
  const [otp, setOtp] = useState();
  const [number, setNumber] = useState();

  console.log(otp);
  return (
    <Box>
      {number ? (
        <OtpComponent number={number} setOtp={setOtp} setNumber={setNumber} />
      ) : (
        <FormComponent setNumber={setNumber} />
      )}
    </Box>
  );
};
