import * as Types from "./Types";
import axios from "axios";
import { showToast } from "../../../utils/ToastHelper";

// export const GetHomeProductsList = () => async (dispatch) => {
//   const url = `${process.env.REACT_APP_API_URL}product/smart/home`;
//   // dispatch({ type: Types.IS_PAGE_LOAD, payload: true });
//   try {
//     axios.get(url).then((res) => {
//       if (res.data.status) {
//         dispatch({ type: Types.HOME_PRODUCTS_LIST, payload: res.data.result });
//       }
//     });
//   } catch (error) {}
// };
export const CheckPhoneNumber = (number) => async (dispatch) => {
  if (number.length === 0) {
    showToast("error", "Phone number should not be empty");
    return 0;
  } else if (number.substring(0, 2) !== "01") {
    showToast("error", "Phone number should start with 01");
    return 0;
  } else if (number.length !== 11) {
    showToast("error", "In valid phone number");
    return 0;
  }
  const url = `${process.env.REACT_APP_API_URL}user/phone`;
  const postData = {
    phoneNumber: number,
  };
  dispatch({ type: Types.IS_LOAD_NUMBER, payload: true });
  try {
    axios.post(url, postData).then((res) => {
      if (res.data.status) {
        dispatch({
          type: Types.CHECK_PHONE_NUMBER,
          payload: res.data,
        });
        dispatch({ type: Types.IS_LOAD_NUMBER, payload: false });
      }
    });
  } catch (error) {}
};
export const SubmitUserInput = (data) => async (dispatch) => {
  if (data.fullName.length === 0) {
    showToast("error", "Full name should not be empty");
    return 0;
  } else if (data.nickName.length === 0) {
    showToast("error", "Nick name should not be empty");
    return 0;
  } else if (data.profession.length === 0) {
    showToast("error", "Profession should not be empty");
    return 0;
  } else if (data.village.length === 0) {
    showToast("error", "Please select your village");
    return 0;
  } else if (data.villageArea.length === 0) {
    showToast("error", "Please select your village area");
    return 0;
  } else if (data.gender.length === 0) {
    showToast("error", "Please select your gender");
    return 0;
  }
  data.phoneNumber = localStorage.getItem("phoneNumber");
  data.password = localStorage.getItem("password");
  const url = `${process.env.REACT_APP_API_URL}user`;
  const url2 = `${process.env.REACT_APP_API_URL}user/login`;
  const logiData = {
    phoneNumber: data.phoneNumber,
    password: data.password,
  };
  dispatch({ type: Types.IS_DETAILS_HIT, payload: true });
  try {
    axios.post(url, data).then((res) => {
      if (res.data.status) {
        axios.post(url2, logiData).then((res2) => {
          if (res2.data.status) {
            localStorage.setItem("isLoggedIn", "true");
            localStorage.setItem("userInfo", JSON.stringify(res2.data.result));
            dispatch({
              type: Types.IS_LOGGED_IN,
              payload: true,
            });
            dispatch({ type: Types.IS_DETAILS_HIT, payload: false });
          }
        });
      }
    });
  } catch (error) {}
};
export const UpdateUserInput = (data) => async (dispatch) => {
  if (data.fullName.length === 0) {
    showToast("error", "Full name should not be empty");
    return 0;
  } else if (data.nickName.length === 0) {
    showToast("error", "Nick name should not be empty");
    return 0;
  } else if (data.profession.length === 0) {
    showToast("error", "Profession should not be empty");
    return 0;
  } else if (data.village.length === 0) {
    showToast("error", "Please select your village");
    return 0;
  } else if (data.villageArea.length === 0) {
    showToast("error", "Please select your village area");
    return 0;
  } else if (data.gender.length === 0) {
    showToast("error", "Please select your gender");
    return 0;
  }
  data.phoneNumber = localStorage.getItem("phoneNumber");
  data.password = localStorage.getItem("password");
  const url = `${process.env.REACT_APP_API_URL}user/${data._id}`;
  const url2 = `${process.env.REACT_APP_API_URL}user/login`;
  const logiData = {
    phoneNumber: data.phoneNumber,
    password: data.password,
  };
  delete data._id;
  dispatch({ type: Types.IS_DETAILS_HIT, payload: true });
  try {
    axios.put(url, data).then((res) => {
      if (res.data.status) {
        axios.post(url2, logiData).then((res2) => {
          if (res2.data.status) {
            localStorage.setItem("isLoggedIn", "true");
            localStorage.setItem("userInfo", JSON.stringify(res2.data.result));
            dispatch({
              type: Types.IS_LOGGED_IN,
              payload: true,
            });
            dispatch({ type: Types.IS_DETAILS_HIT, payload: false });
          }
        });
      }
    });
  } catch (error) {}
};
export const UserLogin = (data) => async (dispatch) => {
  const url = `${process.env.REACT_APP_API_URL}user/login`;
  dispatch({ type: Types.IS_LOGGIN_HIT, payload: true });
  try {
    axios.post(url, data).then((res) => {
      if (res.data.status) {
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("userInfo", JSON.stringify(res.data.result));
        dispatch({ type: Types.IS_LOGGIN_HIT, payload: false });
        dispatch({
          type: Types.IS_LOGGED_IN,
          payload: true,
        });
      }
    });
  } catch (error) {}
};
export const ChangeUserInput = (name, value) => (dispatch) => {
  const data = {
    name,
    value,
  };
  dispatch({
    type: Types.CHANGE_USER_INPUT,
    payload: data,
  });
};
export const GetOrderList = (id) => (dispatch) => {
  const url = `${process.env.REACT_APP_API_URL}order/user/${id}`;
  axios.get(url).then((res) => {
    if (res.data.status) {
      dispatch({ type: Types.GET_ORDER_LIST, payload: res.data.result });
    }
  });
};
export const GetEditableData = (data) => (dispatch) => {
  dispatch({ type: Types.GET_EDITABLE_DATA, payload: data });
};
export const isLogout = (data) => (dispatch) => {
  dispatch({ type: Types.IS_LOGOUT, payload: data });
};
export const VillageList = () => {
  return [
    { label: "বাগমারা", value: "বাগমারা" },
    { label: "রাজাপুর", value: "রাজাপুর" },
    { label: "মগরা", value: "মগরা" },
    { label: "বাদোখালি", value: "বাদোখালি" },
    { label: "রহিমাবাদ", value: "রহিমাবাদ" },
  ];
};
export const VillageAreaList = (data) => {
  let arr = [];
  if (data === "বাগমারা") {
    arr = [
      { label: "উত্তর পাড়া", value: "উত্তর পাড়া" },
      { label: "পূর্ব পাড়া", value: "পূর্ব পাড়া" },
      { label: "দক্ষিন পাড়া", value: "দক্ষিন পাড়া" },
      { label: "মধ্য পাড়া", value: "মধ্য পাড়া" },
      { label: "পাল পাড়া", value: "পাল পাড়া" },
    ];
  } else if (data === "রাজাপুর") {
    arr = [
      { label: "মোল্লা বাড়ি", value: "মোল্লা বাড়ি" },
      { label: "সেখ বাড়ি", value: "সেখ বাড়ি" },
      { label: "পশ্চিম পাড়া", value: "পশ্চিম পাড়া" },
    ];
  } else if (data === "মগরা") {
    arr = [
      { label: "দো-সিমানা", value: "দো-সিমানা" },
      { label: "হালদার পাড়া", value: "হালদার পাড়া" },
      { label: "পাল পাড়া", value: "পাল পাড়া" },
      { label: "বান্দাঘাট পাল পাড়া", value: "বান্দাঘাট পাল পাড়া" },
      { label: "মগরা স্কুল সংলগ্ন", value: "মগরা স্কুল সংলগ্ন" },
    ];
  } else if (data === "বাদোখালি") {
    arr = [
      { label: "দাস পাড়া", value: "দাস পাড়া" },
      { label: "বাদখালি স্কুল সংলগ্ন", value: "বাদখালি স্কুল সংলগ্ন" },
      { label: "সরকারি পুকুর পাড়", value: "সরকারি পুকুর পাড়" },
    ];
  } else if (data === "রহিমাবাদ") {
    arr = [
      { label: "শিকদার পাড়া", value: "শিকদার পাড়া" },
      { label: "পশ্চিম পাড়া", value: "পশ্চিম পাড়া" },
      { label: "ভাঙর", value: "ভাঙর" },
      { label: "হাইস্কুল সংলগ্ন", value: "হাইস্কুল সংলগ্ন" },
      { label: "উচু পোল", value: "উচু পোল" },
      { label: "নাথ পাড়া", value: "নাথ পাড়া" },
      { label: "চৌধুরী বাড়ি", value: "চৌধুরী বাড়ি" },
      { label: "খা বাড়ি", value: "খা বাড়ি" },
    ];
  }
  return arr;
};
