import axios from "axios";
import { GET_LOGIN_LOADING, GET_LOGIN_SUCCESS } from "./admin.types";

export const getLOGIN = (body) => (dispatch) => {
  dispatch({ type: GET_LOGIN_LOADING });
  axios
    .post(`${process.env.REACT_APP_URL}/user/login`, body)
    .then((res) => dispatch({ type: GET_LOGIN_SUCCESS, payload: res.data }))
    .catch((e) => console.log(e.message));
};
