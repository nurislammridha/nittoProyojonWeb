import * as Types from "./Types";

const initialState = {
  productsByCategory: null,
  isPageLoad: false,
};
const AllProductsReducer = (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case Types.PRODUCTS_BY_CATEGORY:
      return {
        ...state,
        productsByCategory: action.payload,
      };
    case Types.IS_PAGE_LOAD:
      return {
        ...state,
        isPageLoad: action.payload,
      };

    default:
      break;
  }
  return newState;
};
export default AllProductsReducer;
