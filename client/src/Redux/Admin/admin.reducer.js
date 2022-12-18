import {
  GET_LOGIN_ERROR,
  GET_LOGIN_LOADING,
  GET_LOGIN_SUCCESS,
  GET_SIGNOUT,
} from "./admin.types";

let token = localStorage.getItem("token") || "";
let role = localStorage.getItem("role") || "";
let userToken = localStorage.getItem("userToken") || "";

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
      localStorage.removeItem("token");
      localStorage.removeItem("role");
      return {
        ...state,
        isAuth: false,
        role: "",
        name: "",
        token: "",
      };
    default:
      return state;
  }
};
