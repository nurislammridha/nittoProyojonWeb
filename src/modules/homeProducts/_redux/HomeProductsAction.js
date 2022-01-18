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

export const OpenCart = (data) => async (dispatch) => {
  dispatch({ type: Types.OPEN_CART, payload: data });
};
export const AfterRemoveCart = (data) => async (dispatch) => {
  dispatch({ type: Types.AFTER_REMOVE_CART, payload: data });
};

export const isCartAdded = (id) => {
  let isAlreadyAdded = false;
  const cartList = JSON.parse(localStorage.getItem("cartList")) || [];
  if (cartList.length > 0) {
    cartList.forEach((item) => {
      if (item._id === id) {
        isAlreadyAdded = true;
      }
    });
  }
  return isAlreadyAdded;
};
export const isCartAdded2 = (id, arr) => {
  let isAlreadyAdded = false;
  if (arr.length > 0) {
    arr.forEach((item) => {
      if (item._id === id) {
        isAlreadyAdded = true;
      }
    });
  }
  return isAlreadyAdded;
};
export const TotalCartPrice = (arr) => {
  let total = 0;
  if (arr.length > 0) {
    arr.forEach((item) => {
      total = total + parseInt(item.discountPrice) * parseInt(item.quantity);
    });
  }
  return total;
};
