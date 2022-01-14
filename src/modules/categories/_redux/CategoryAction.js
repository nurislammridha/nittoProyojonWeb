import * as Types from "./Types";
import axios from "axios";
// import { showToast } from "../../../../utils/ToastHelper";
export const GetCategoryList = () => async (dispatch) => {
  const url = `${process.env.REACT_APP_API_URL}category`;
  // dispatch({ type: Types.IS_PAGE_LOAD, payload: true });
  try {
    axios.get(url).then((res) => {
      if (res.data.status) {
        dispatch({ type: Types.CATEGORY_LIST, payload: res.data.result });
      }
    });
  } catch (error) {}
};
