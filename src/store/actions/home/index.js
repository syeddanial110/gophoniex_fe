import { apiGet } from "@/apis/ApiRequest";
import { GetHomePageContentConstants } from "@/store/constants";
import { ApiEndpoints } from "@/utils/ApiEndpoints";
import { toast } from "sonner";

export const getHomePageContent = () => (dispatch) => {
  dispatch({ type: GetHomePageContentConstants.GET_HOME_PAGE_CONTENT_LOADING });
  apiGet(
    `${ApiEndpoints.homePageContent.get}`,
    (res) => {
      dispatch({
        type: GetHomePageContentConstants.GET_HOME_PAGE_CONTENT_SUCCESS,
        payload: { res },
      });
    },
    (err) => {
      dispatch({
        type: GetHomePageContentConstants.GET_HOME_PAGE_CONTENT_ERROR,
      });
      toast.error(err?.message);
    },
  );
};
