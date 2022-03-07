import { combineReducers } from "redux";

import post from "./post";
import get from "./get";

export default combineReducers({
  post,
  get,
});
