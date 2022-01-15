import * as Types from "./Types";

const initialState = {
  homeProductsList: null,
};
const HomeProductsReducer = (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case Types.HOME_PRODUCTS_LIST:
      return {
        ...state,
        homeProductsList: HomeProductsUser(action.payload),
      };

    default:
      break;
  }
  return newState;
};
export default HomeProductsReducer;

const HomeProductsUser = (data) => {
  let fArr = [];
  let sArr = [];
  if (data) {
    data
      .sort((a, b) => a.categoryId - b.categoryId)
      .forEach((item, index) => {
        let sr = index + 1;
        sArr.push(item);
        if (sr % 5 === 0) {
          fArr.push(sArr);
          sArr = [];
        }
      });
  }
  return fArr;
};
