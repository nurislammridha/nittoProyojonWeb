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
    { label: "Mograbazar", value: "Mograbazar" },
    { label: "Bagmara", value: "Bagmara" },
    { label: "Rajapur", value: "Rajapur" },
    { label: "Badokhali", value: "Badokhali" },
    { label: "Rahimabad", value: "Rahimabad" },
    { label: "Chapatola", value: "Chapatola" },
    { label: "Mogra", value: "Mogra" },
    { label: "Shatgumbuj", value: "Shatgumbuj" },
  ];
};
export const VillageAreaList = (data) => {
  let arr = [];
  if (data === "Mograbazar") {
    arr = [
      { label: "Mograbazar School", value: "Mograbazar School" },
      { label: "Mograbazar Mosjid", value: "Mograbazar Mosjid" },
      { label: "Mograbazar Hospital", value: "Mograbazar Hospital" },
    ];
  } else if (data === "Bagmara") {
    arr = [
      { label: "Bagmara School", value: "Bagmara School" },
      { label: "Bagmara Mosjid", value: "Bagmara Mosjid" },
      { label: "Bagmara Hospital", value: "Bagmara Hospital" },
    ];
  } else if (data === "Rajapur") {
    arr = [
      { label: "Rajapur School", value: "Rajapur School" },
      { label: "Rajapur Mosjid", value: "Rajapur Mosjid" },
      { label: "Rajapur Hospital", value: "Rajapur Hospital" },
    ];
  } else if (data === "Badokhali") {
    arr = [
      { label: "Badokhali School", value: "Badokhali School" },
      { label: "Badokhali Mosjid", value: "Badokhali Mosjid" },
      { label: "Badokhali Hospital", value: "Badokhali Hospital" },
    ];
  } else if (data === "Rahimabad") {
    arr = [
      { label: "Rahimabad School", value: "Rahimabad School" },
      { label: "Rahimabad Mosjid", value: "Rahimabad Mosjid" },
      { label: "Rahimabad Hospital", value: "Rahimabad Hospital" },
    ];
  } else if (data === "Chapatola") {
    arr = [
      { label: "Chapatola School", value: "Chapatola School" },
      { label: "Chapatola Mosjid", value: "Chapatola Mosjid" },
      { label: "Chapatola Hospital", value: "Chapatola Hospital" },
    ];
  } else if (data === "Mogra") {
    arr = [
      { label: "Mogra School", value: "Mogra School" },
      { label: "Mogra Mosjid", value: "Mogra Mosjid" },
      { label: "Mogra Hospital", value: "Mogra Hospital" },
    ];
  } else if (data === "Shatgumbuj") {
    arr = [
      { label: "Shatgumbuj School", value: "Shatgumbuj School" },
      { label: "Shatgumbuj Mosjid", value: "Shatgumbuj Mosjid" },
      { label: "Shatgumbuj Hospital", value: "Shatgumbuj Hospital" },
    ];
  }
  return arr;
};
