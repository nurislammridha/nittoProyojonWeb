import { combineReducers } from "redux";
import AllProductsReducer from "../../modules/allProducts/_redux/AllProductsReducer";
import AuthReducer from "../../modules/auth/_redux/AuthReducer";
import CategoryReducer from "../../modules/categories/_redux/CategoryReducer";
import HomeProductsReducer from "../../modules/homeProducts/_redux/HomeProductsReducer";

// combine all of the reducers here
const rootReducer = combineReducers({
  categoryInfo: CategoryReducer,
  homeProductsInfo: HomeProductsReducer,
  allProductsInfo: AllProductsReducer,
  authInfo: AuthReducer,
});

export default rootReducer;
