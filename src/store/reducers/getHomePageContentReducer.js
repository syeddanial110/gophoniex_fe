import { GetHomePageContentConstants } from "../constants";

const initialState = {
  data: [],
};

export const GetHomePageContentReducer = (
  state = initialState,
  { type, payload },
) => {
  switch (type) {
    case GetHomePageContentConstants.GET_HOME_PAGE_CONTENT_LOADING:
      return { ...state, type: "loading" };
    case GetHomePageContentConstants.GET_HOME_PAGE_CONTENT_SUCCESS:
      return { ...state, type: "success", res: payload };
    case GetHomePageContentConstants.GET_HOME_PAGE_CONTENT_ERROR:
      return { ...state, type: "error", res: payload };
    default:
      return state;
  }
};
