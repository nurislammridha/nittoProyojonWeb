import * as Types from "./Types";

const initialState = {
  checkPhoneNumber: null,
};
const AuthReducer = (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case Types.CHECK_PHONE_NUMBER:
      return {
        ...state,
        checkPhoneNumber: action.payload,
      };

    default:
      break;
  }
  return newState;
};
export default AuthReducer;
