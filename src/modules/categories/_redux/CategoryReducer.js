import * as Types from "./Types";

const initialState = {
  categoryList: null,
};
const CategoryReducer = (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case Types.CATEGORY_LIST:
      return {
        ...state,
        categoryList: action.payload,
      };

    default:
      break;
  }
  return newState;
};
export default CategoryReducer;
