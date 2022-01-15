import * as Types from "./Types";
import axios from "axios";
// import { showToast } from "../../../../utils/ToastHelper";
export const GetHomeProductsList = () => async (dispatch) => {
  const url = `${process.env.REACT_APP_API_URL}product/smart/home`;
  // dispatch({ type: Types.IS_PAGE_LOAD, payload: true });
  try {
    axios.get(url).then((res) => {
      if (res.data.status) {
        dispatch({ type: Types.HOME_PRODUCTS_LIST, payload: res.data.result });
      }
    });
  } catch (error) {}
};
