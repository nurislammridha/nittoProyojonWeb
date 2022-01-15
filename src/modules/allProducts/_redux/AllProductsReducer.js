import * as Types from "./Types";

const initialState = {
  productsByCategory: null,
};
const AllProductsReducer = (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case Types.PRODUCTS_BY_CATEGORY:
      return {
        ...state,
        productsByCategory: action.payload,
      };

    default:
      break;
  }
  return newState;
};
export default AllProductsReducer;
