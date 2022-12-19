import { Box } from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getLOGINbyNUMBER } from "../../Redux/Admin/admin.actions";
import { FormComponent } from "./FormComponent";
import { OtpComponent } from "./OtpComponent";
export const Login = ({ onLoginClose }) => {
  const [otp, setOtp] = useState();
  const [number, setNumber] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const verified = true;

  const handlelogin = (otp) => {
    if (otp === "123456") {
      dispatch(getLOGINbyNUMBER(number, verified));
      onLoginClose();
    }
  };

  return (
    <Box mt={"104px"}>
      {number ? (
        <OtpComponent
          handlelogin={handlelogin}
          number={number}
          setOtp={setOtp}
          setNumber={setNumber}
        />
      ) : (
        <FormComponent setNumber={setNumber} />
      )}
    </Box>
  );
};
