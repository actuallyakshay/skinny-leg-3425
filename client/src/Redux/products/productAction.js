import axios from "axios";
import {
  PRODUCT_FAILURE,
  PRODUCT_LOADING,
  PRODUCT_SUCCESS,
} from "./productActionTypes";



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
        `https://tame-elk-trench-coat.cyclic.app/product?category=${category}&q=${q}&sort=${sort}&arr=${arr}&off=${off}&offSet=${offSet}&firstLetter=${firstLetter}&page=${page}&limit=${limit}`
      )
      .then((res) => dispatch({ type: PRODUCT_SUCCESS, payload: res.data }))
      .catch((e) => dispatch({ type: PRODUCT_FAILURE, payload: e.message }));
  };
