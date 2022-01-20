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
