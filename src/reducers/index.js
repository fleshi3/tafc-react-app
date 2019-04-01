// reducers/index.js

import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import sortReducer from "./sortReducer";

export default combineReducers({
  cartReducer,
  sortReducer
});
