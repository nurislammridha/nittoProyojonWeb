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
};
const AuthReducer = (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case Types.CHECK_PHONE_NUMBER:
      return {
        ...state,
        checkPhoneNumber: action.payload,
      };
    case Types.CHANGE_USER_INPUT:
      const { name, value } = action.payload;
      let userInfo = { ...state.userInfo };
      userInfo[name] = value;
      return {
        ...state,
        userInfo: userInfo,
      };

    default:
      break;
  }
  return newState;
};
export default AuthReducer;
