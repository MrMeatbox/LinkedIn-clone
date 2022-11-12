import userReducer from "./userReducer";
import { combineReducers } from "redux";
import articleReducer from "./articleReducer";

const rootReducers = combineReducers({
  userState: userReducer,
  articleState: articleReducer,
});
export default rootReducers;
