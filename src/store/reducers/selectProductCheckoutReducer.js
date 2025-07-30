import { GetAllProductsConstants, SelectProductCheckoutConstants } from "../constants";

const initialState = {
  data: [],
};

export const SelectProductCheckoutReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case SelectProductCheckoutConstants.SELECT_PRODUCT_CHECKOUT_LOADING:
      return { ...state, type: "loading" };
    case SelectProductCheckoutConstants.SELECT_PRODUCT_CHECKOUT_SUCCESS:
      return { ...state, type: "success", res: payload };
    case SelectProductCheckoutConstants.SELECT_PRODUCT_CHECKOUT_ERROR:
      return { ...state, type: "error", res: payload };
    default:
      return state;
  }
};
