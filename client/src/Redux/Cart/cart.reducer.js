import { CART_LOADING, CART_SUCCESS } from "./cart.types";

const iState = {
  cartData: [],
  cartloading: false,
  cartError: false,
};

export const cartReducer = (state = iState, { type, payload }) => {
  switch (type) {
    case CART_LOADING:
      return {
        ...state,
        cartloading: true,
      };

    case CART_SUCCESS:
      return {
        ...state,
        cartloading: false,
        cartData: payload,
      };
    default:
      return state;
  }
};
