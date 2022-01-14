import { combineReducers } from "redux";
import CategoryReducer from "../../modules/categories/_redux/CategoryReducer";

// combine all of the reducers here
const rootReducer = combineReducers({
  categoryInfo: CategoryReducer,
});

export default rootReducer;
