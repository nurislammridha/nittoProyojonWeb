import * as Types from "./Types";
const lang = localStorage.getItem("language") || "Bangla";
const initialState = {
  categoryList: null,
  language: lang,
};
const CategoryReducer = (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case Types.CATEGORY_LIST:
      return {
        ...state,
        categoryList: action.payload,
      };
    case Types.GLOBAL_LANGUAGE:
      return {
        ...state,
        language: action.payload,
      };

    default:
      break;
  }
  return newState;
};
export default CategoryReducer;
