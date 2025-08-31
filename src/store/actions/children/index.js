import { apiGet } from "@/apis/ApiRequest";
import {
  EditChildrenDataConstants,
  GetAllChildrenConstants,
  GetAllProductsConstants,
} from "@/store/constants";
import { ApiEndpoints } from "@/utils/ApiEndpoints";
import { toast } from "sonner";

export const getAllChildren = () => (dispatch) => {
  dispatch({ type: GetAllChildrenConstants.GET_ALL_CHILDREN_LOADING });
  apiGet(
    `${ApiEndpoints.children.base}${ApiEndpoints.children.getAll}`,
    (res) => {
      dispatch({
        type: GetAllChildrenConstants.GET_ALL_CHILDREN_SUCCESS,
        payload: res,
      });
    },
    (err) => {
      dispatch({
        type: GetAllChildrenConstants.GET_ALL_CHILDREN_ERROR,
      });
      toast.error(err?.message);
    }
  );
};

export const editChildrenData = (data) => (dispatch) => {
  dispatch({ type: EditChildrenDataConstants.EDIT_CHILDREN_DATA_LOADING });
  dispatch({
    type: EditChildrenDataConstants.EDIT_CHILDREN_DATA_SUCCESS,
    payload: { data },
  });
};