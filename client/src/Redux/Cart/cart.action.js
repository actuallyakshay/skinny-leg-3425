import axios from "axios";
import { CART_LOADING, CART_SUCCESS } from "./cart.types";

export const getCartdata = (token) => (dispatch) => {
  dispatch({ type: CART_LOADING });
  axios
    .get(`${process.env.REACT_APP_URL}/cart`, {
      headers: token,
    })
    .then((res) => dispatch({ type: CART_SUCCESS, payload: res.data }))
    .catch((e) => console.log(e.message));
};

export const postCartData = (token, product, quantity) => (dispatch) => {
  let body = {
    product,
    quantity,
  };
  axios
    .post(`${process.env.REACT_APP_URL}/cart`, body, {
      headers: token,
    })
    .then((res) => console.log(res.data))
    .catch((e) => console.log(e.message));
};
