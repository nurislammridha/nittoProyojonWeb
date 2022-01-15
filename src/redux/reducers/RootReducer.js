import { combineReducers } from "redux";
import AllProductsReducer from "../../modules/allProducts/_redux/AllProductsReducer";
import CategoryReducer from "../../modules/categories/_redux/CategoryReducer";
import HomeProductsReducer from "../../modules/homeProducts/_redux/HomeProductsReducer";

// combine all of the reducers here
const rootReducer = combineReducers({
  categoryInfo: CategoryReducer,
  homeProductsInfo: HomeProductsReducer,
  allProductsInfo: AllProductsReducer,
});

export default rootReducer;
