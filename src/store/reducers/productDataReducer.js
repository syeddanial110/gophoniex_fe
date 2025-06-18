import { ProductDataConstants } from "../constants";

const initialState = {
  data: [],
};

export const ProductDataReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ProductDataConstants.PRODUCT_DATA_LOADING:
      return { ...state, type: "loading" };
    case ProductDataConstants.PRODUCT_DATA_SUCCESS:
      return { ...state, type: "success", res: payload };
    case ProductDataConstants.PRODUCT_DATA_ERROR:
      return { ...state, type: "error" };
    default:
      return state;
  }
};
