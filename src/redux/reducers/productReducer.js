import {
  GET_PRODUCT,
  GET_PRODUCT_FAILURE,
  GET_PRODUCT_SUCCESS,
} from "../actions/constants";

const initialState = {
  isLoading: false,
  productData: [],
  error: null,
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCT: {
      return { ...state, isLoading: true };
    }
    case GET_PRODUCT_SUCCESS: {
      return { ...state, productData: action.payload, isLoading: false };
    }
    case GET_PRODUCT_FAILURE: {
      return { ...state, error: action.payload, isLoading: false };
    }

    default:
      return state;
  }
};
