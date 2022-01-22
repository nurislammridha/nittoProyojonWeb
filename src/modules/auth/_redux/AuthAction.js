import * as Types from "./Types";
import axios from "axios";

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
  const url = `${process.env.REACT_APP_API_URL}user/phone`;
  const postData = {
    phoneNumber: number,
  };
  try {
    axios.post(url, postData).then((res) => {
      if (res.data.status) {
        dispatch({
          type: Types.CHECK_PHONE_NUMBER,
          payload: res.data,
        });
      }
    });
  } catch (error) {}
};
export const SubmitUserInput = (data) => async (dispatch) => {
  data.phoneNumber = localStorage.getItem("phoneNumber");
  data.password = localStorage.getItem("password");
  const url = `${process.env.REACT_APP_API_URL}user`;
  const url2 = `${process.env.REACT_APP_API_URL}user/login`;
  const logiData = {
    phoneNumber: data.phoneNumber,
    password: data.password,
  };
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
          }
        });
      }
    });
  } catch (error) {}
};
export const UpdateUserInput = (data) => async (dispatch) => {
  data.phoneNumber = localStorage.getItem("phoneNumber");
  data.password = localStorage.getItem("password");
  const url = `${process.env.REACT_APP_API_URL}user/${data._id}`;
  const url2 = `${process.env.REACT_APP_API_URL}user/login`;
  const logiData = {
    phoneNumber: data.phoneNumber,
    password: data.password,
  };
  delete data._id;
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
          }
        });
      }
    });
  } catch (error) {}
};
export const UserLogin = (data) => async (dispatch) => {
  const url = `${process.env.REACT_APP_API_URL}user/login`;
  try {
    axios.post(url, data).then((res) => {
      if (res.data.status) {
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("userInfo", JSON.stringify(res.data.result));
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
