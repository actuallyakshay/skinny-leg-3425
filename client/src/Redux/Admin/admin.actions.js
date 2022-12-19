import axios from "axios";
import {
  GET_LOGIN_LOADING,
  GET_LOGIN_SUCCESS,
  GET_NUMBER_LOGIN,
} from "./admin.types";

export const getLOGIN = (body) => (dispatch) => {
  dispatch({ type: GET_LOGIN_LOADING });
  axios
    .post(`${process.env.REACT_APP_URL}/user/login`, body)
    .then((res) => dispatch({ type: GET_LOGIN_SUCCESS, payload: res.data }))
    .catch((e) => console.log(e.message));
};

export const getLOGINbyNUMBER = (phoneNumber, varified) => (dispatch) => {
  let body = { phoneNumber, varified };
  axios.post(`${process.env.REACT_APP_URL}/user/login`, body).then((res) => {
    dispatch({ type: GET_NUMBER_LOGIN, payload: res.data });
    console.log(res.data.token);
  });
};

// export const getSingleUSer = (phoneNumber) =>(dispatch)=> {
  
// }
