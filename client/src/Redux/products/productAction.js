import axios from "axios";
import { PRODUCT_FAILURE, PRODUCT_LOADING, PRODUCT_SUCCESS } from "./productActionTypes";

let URL = process.env.REACT_APP_URL;

// export const getData = (queryParams) => async (dispatch) => {
//     dispatch({ type: PRODUCT_LOADING });
//     try {
//         // let response = await axios.get(`${URL}/product?category=${category}&q=${q}&sort=${sort}&arr=${arr}&off=${off}&offSet=${offSet}&firstLetter=${firstLetter}&page=${page}&limit=${limit}`);
//         let response = await axios.get(`${URL}/product` , queryParams)
//         dispatch({ type: PRODUCT_SUCCESS, payload: response.data });
//         console.log(response.data)
//         // return response.data;
//     } catch (error) {
//         console.log(error.message)
//         dispatch({ type: PRODUCT_FAILURE, payload: error.message })
//     }

// }
export const getDataForSort = (category,sort) => async (dispatch) => {
    dispatch({ type: PRODUCT_LOADING });
    try {
        // let response = await axios.get(`${URL}/product?category=${category}&q=${q}&sort=${sort}&arr=${arr}&off=${off}&offSet=${offSet}&firstLetter=${firstLetter}&page=${page}&limit=${limit}`);
        let response = await axios.get(`${URL}/product?category=${category}&sort=${sort}` )
        dispatch({ type: PRODUCT_SUCCESS, payload: response.data });
        console.log(response.data)
        // return response.data;
    } catch (error) {
        console.log(error.message)
        dispatch({ type: PRODUCT_FAILURE, payload: error.message })
    }

}