import axios from "axios";
import {
  PRODUCT_FAILURE,
  PRODUCT_LOADING,
  PRODUCT_SUCCESS,
} from "./productActionTypes";

let URL = process.env.REACT_APP_URL;

export const getProductData =
  (
    category,
    q = "",
    sort = "",
    arr = "",
    off = "",
    offSet = "",
    firstLetter = "",
    page = 1,
    limit = 30
  ) =>
  (dispatch) => {
    console.log({ category });
    dispatch({ type: PRODUCT_LOADING });
    axios
      .get(
        `${URL}/product?category=${category}&q=${q}&sort=${sort}&arr=${arr}&off=${off}&offSet=${offSet}&firstLetter=${firstLetter}&page=${page}&limit=${limit}`
      )
      .then((res) => dispatch({ type: PRODUCT_SUCCESS, payload: res.data }))
      .catch((e) => dispatch({ type: PRODUCT_FAILURE, payload: e.message }));
  };
