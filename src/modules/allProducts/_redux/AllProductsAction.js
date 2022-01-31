import * as Types from "./Types";
import axios from "axios";
// import { showToast } from "../../../../utils/ToastHelper";
export const GetProductsByCategory = (id) => async (dispatch) => {
  const url = `${process.env.REACT_APP_API_URL}product/${id}`;
  dispatch({ type: Types.IS_PAGE_LOAD, payload: true });
  try {
    axios.get(url).then((res) => {
      if (res.data.status) {
        dispatch({ type: Types.IS_PAGE_LOAD, payload: false });
        dispatch({
          type: Types.PRODUCTS_BY_CATEGORY,
          payload: res.data.result,
        });
      }
    });
  } catch (error) {}
};
