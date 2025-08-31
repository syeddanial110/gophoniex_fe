import { EditChildrenDataConstants } from "../constants";

const initialState = {
  data: {},
};

export const EditChildrenDataReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case EditChildrenDataConstants.EDIT_CHILDREN_DATA_LOADING:
      return { ...state, type: "loading" };
    case EditChildrenDataConstants.EDIT_CHILDREN_DATA_SUCCESS:
      return { ...state, type: "success", data: payload };
    case EditChildrenDataConstants.EDIT_CHILDREN_DATA_ERROR:
      return { ...state, type: "error", res: payload };
    default:
      return state;
  }
};
