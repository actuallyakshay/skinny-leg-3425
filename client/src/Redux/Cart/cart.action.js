import axios from "axios";
import { CART_LOADING, CART_SUCCESS } from "./cart.types";

export const getCartdata = (token) => (dispatch) => {
  dispatch({ type: CART_LOADING });
  axios
    .get(`${process.env.REACT_APP_URL}/cart`, {
      headers: token,
    })
    .then((res) => dispatch({ type: CART_SUCCESS, payload: res.data }))
    .then((res) => console.log(res.data))
    .catch((e) => console.log(e.message));
};

export const postCartData = (product, quantity, token) => (dispatch) => {
  axios(`${process.env.REACT_APP_URL}/cart`, {
    method: "POST",
    data: {
      product,
      quantity,
    },
    headers: {
      token: token,
      "content-type": "application/json",
    },
    
  })
    .then((res) => console.log(res.data))
    .catch((e) => console.log(e.message));
};
