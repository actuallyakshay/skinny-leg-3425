import { signOut } from "firebase/auth";
import { auth } from "../../Component/Login/firebase";
import {
  GET_LOGIN_ERROR,
  GET_LOGIN_LOADING,
  GET_LOGIN_SUCCESS,
  GET_NUMBER_LOGIN,
  GET_SIGNOUT,
} from "./admin.types";

let token = localStorage.getItem("token") || "";
let role = localStorage.getItem("role") || "";
let userToken = localStorage.getItem("userToken") || "";
let userName = localStorage.getItem("userName") || "";

const iState = {
  token: token,
  isAuth: !!token,
  authLoading: false,
  authError: false,
  role: role,
  name: "",
  phoneNumber: "",
  userToken: userToken,
  userAuth: !!userToken,
  userName: userName,
  userID: "",
};

export const authReducer = (state = iState, { type, payload }) => {
  switch (type) {
    case GET_LOGIN_LOADING:
      return {
        ...state,
        authLoading: true,
        
      };

    case GET_LOGIN_SUCCESS:
      localStorage.setItem("token", payload.token);
      localStorage.setItem("role", payload.role);
      return {
        ...state,
        authLoading: false,
        token: payload.token,
        name: payload.name,
        role: payload.role,
        isAuth: true,
      };

    case GET_SIGNOUT:
      // export const logout = () => {
        signOut(auth);
        // dispatch({ type: GET_SIGNOUT });
      // };
      localStorage.removeItem("token");
      localStorage.removeItem("role");
      localStorage.removeItem("userToken");
      localStorage.removeItem("userName");
      return {
        ...state,
        isAuth: false,
        role: "",
        name: "",
        token: "",
      };

    case GET_NUMBER_LOGIN:
      localStorage.setItem("userToken", payload.token);
      localStorage.setItem("userName", payload.userName);
      return {
        ...state,
        userAuth: true,
        userToken: payload.token,
        userName: payload.name,
        userID: payload._id,
      };
    default:
      return state;
  }
};
