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
  isLoadNumber: false,
  isLoggedHit: false,
  isDetailsHit: false,
  isLogout: false,
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
    case Types.GET_EDITABLE_DATA:
      let data = state.userInfo;
      data = action.payload;
      return {
        ...state,
        userInfo: data,
      };
    case Types.IS_LOAD_NUMBER:
      return {
        ...state,
        isLoadNumber: action.payload,
      };
    case Types.IS_LOGGIN_HIT:
      return {
        ...state,
        isLoggedHit: action.payload,
      };
    case Types.IS_DETAILS_HIT:
      return {
        ...state,
        isDetailsHit: action.payload,
      };
    case Types.IS_LOGOUT:
      return {
        ...state,
        isLogout: action.payload,
      };

    default:
      break;
  }
  return newState;
};
export default AuthReducer;
