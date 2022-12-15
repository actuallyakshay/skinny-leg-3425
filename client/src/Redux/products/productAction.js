import axios from "axios";
import { PRODUCT_FAILURE, PRODUCT_LOADING, PRODUCT_SUCCESS } from "./productActionTypes";

export const getData = (page,limit) => async(dispatch) => {
    dispatch({ type: PRODUCT_LOADING});
    try {
    let response = await axios.get(`${process.env.REACT_APP_URL}/product?page=${page}&limit=${limit}`);
    dispatch({ type:PRODUCT_SUCCESS , payload : response.data });
    return response.data;
    } catch (error) {
     dispatch({ type: PRODUCT_FAILURE , payload: error.message })
    }
    
}