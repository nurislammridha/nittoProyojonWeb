import * as Types from "./Types";

const initialState = {
  homeProductsList: null,
  openCart: false,
  afterRemoveCart: [],
  isOrderCreated: false,
  isOrderHit: false,
  isPageLoad: false,
  ismenubar: false,
};
const HomeProductsReducer = (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case Types.HOME_PRODUCTS_LIST:
      return {
        ...state,
        homeProductsList: HomeProductsUser(action.payload),
      };
    case Types.OPEN_CART:
      return {
        ...state,
        openCart: action.payload,
      };
    case Types.AFTER_REMOVE_CART:
      return {
        ...state,
        afterRemoveCart: action.payload,
      };
    case Types.IS_ORDER_CREATED:
      return {
        ...state,
        isOrderCreated: action.payload,
      };
    case Types.IS_ORDER_HIT:
      return {
        ...state,
        isOrderHit: action.payload,
      };
    case Types.IS_PAGE_LOAD:
      return {
        ...state,
        isPageLoad: action.payload,
      };
    case Types.HANDLE_MENU_BAR:
      return {
        ...state,
        isMenuBar: action.payload,
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
