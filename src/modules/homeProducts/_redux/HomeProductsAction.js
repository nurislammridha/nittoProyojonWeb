import * as Types from "./Types";
import axios from "axios";
import moment from "moment";
import { showToast } from "../../../utils/ToastHelper";
export const GetHomeProductsList = () => async (dispatch) => {
  const url = `${process.env.REACT_APP_API_URL}product/smart/home`;
  dispatch({ type: Types.IS_PAGE_LOAD, payload: true });
  try {
    axios.get(url).then((res) => {
      if (res.data.status) {
        dispatch({ type: Types.HOME_PRODUCTS_LIST, payload: res.data.result });
        dispatch({ type: Types.IS_PAGE_LOAD, payload: false });
      }
    });
  } catch (error) {}
};
export const SubmitOrderData = (data, language) => async (dispatch) => {
  if (data.length === 0) {
    showToast(
      "error",
      language === "Bangla"
        ? "Please atleast one product add to cart!"
        : "ন্যূনতম একটি পন্য কার্টে যোগ করা উচিত"
    );
    return 0;
  }
  const date = new Date();
  const url = `${process.env.REACT_APP_API_URL}order`;
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const postData = userInfo;
  postData.userId = userInfo._id;
  postData.orderDate = moment(date).format("DD-MM-YYYY");
  postData.orderDateTime = moment(date).format("lll");
  postData.productInfo = data;
  postData.isCreatedDate = moment(date).format("lll");
  postData.isCreated = true;
  delete postData._id;
  dispatch({ type: Types.IS_ORDER_HIT, payload: true });
  try {
    axios.post(url, postData).then((res) => {
      if (res.data.status) {
        dispatch({ type: Types.IS_ORDER_CREATED, payload: true });
        dispatch({ type: Types.IS_ORDER_HIT, payload: false });
        // localStorage.setItem("cartList", []);
        localStorage.removeItem("cartList");
      }
    });
  } catch (error) {}
};

export const FalseOrderCreated = () => async (dispatch) => {
  dispatch({ type: Types.IS_ORDER_CREATED, payload: false });
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
export const getBdNumber = (number) => {
  let bdNumber = "";
  let myArr = String(number)
    .split("")
    .map((num) => {
      return Number(num);
    });
  myArr.forEach((e) => {
    switch (e) {
      case 1:
        bdNumber = bdNumber + "১";
        break;
      case 2:
        bdNumber = bdNumber + "২";
        break;
      case 3:
        bdNumber = bdNumber + "৩";
        break;
      case 4:
        bdNumber = bdNumber + "৪";
        break;
      case 5:
        bdNumber = bdNumber + "৫";
        break;
      case 6:
        bdNumber = bdNumber + "৬";
        break;
      case 7:
        bdNumber = bdNumber + "৭";
        break;
      case 8:
        bdNumber = bdNumber + "৮";
        break;
      case 9:
        bdNumber = bdNumber + "৯";
        break;
      case 0:
        bdNumber = bdNumber + "০";
        break;
      default:
        break;
    }
  });
  return bdNumber;
};
