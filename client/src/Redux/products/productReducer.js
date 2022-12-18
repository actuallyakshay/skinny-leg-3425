import {
  PRODUCT_LOADING,
  PRODUCT_SUCCESS,
  PRODUCT_FAILURE,
} from "./productActionTypes";

const initialState = {
  productData: [],
  isLoading: false,
  isError: false,
  message: "",
};

const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case PRODUCT_LOADING: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case PRODUCT_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        productData: payload,
        message: "Product data fetched successfully",
      };
    }
    case PRODUCT_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        message: "Product data fetched unsuccessfull",
      };
    }
    default:
      return state;
  }
};

export default productReducer;
