import * as Types from "./Types";

const initialState = {
  checkPhoneNumber: null,
  userInfo: {
    phoneNumber: "",
    password: "",
    fullName: "",
    nickName: "",
    profession: "",
    village: "",
    villageArea: "",
    gender: "",
    foundDescription: "",
  },
  isLoggedIn: false,
  orderList: null,
};
const AuthReducer = (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case Types.CHECK_PHONE_NUMBER:
      return {
        ...state,
        checkPhoneNumber: action.payload,
      };
    case Types.IS_LOGGED_IN:
      return {
        ...state,
        isLoggedIn: action.payload,
      };
    case Types.CHANGE_USER_INPUT:
      const { name, value } = action.payload;
      let userInfo = { ...state.userInfo };
      userInfo[name] = value;
      return {
        ...state,
        userInfo: userInfo,
      };
    case Types.GET_ORDER_LIST:
      return {
        ...state,
        orderList: action.payload,
      };

    default:
      break;
  }
  return newState;
};
export default AuthReducer;
