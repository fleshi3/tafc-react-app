// reducers/index.js

import { combineReducers } from "redux";
import sortReducer from "./sortReducer";
import cartReducer, * as fromCart from "./cartReducer";
import productReducer, * as fromProducts from "./productReducer";

export default combineReducers({
  cartReducer,
  sortReducer,
  productReducer
});

const getAddedItems = state => fromCart.getAddedItems(state.cartReducer);
const getQuantity = (state, id) => fromCart.getQuantity(state.cartReducer, id);
const getProduct = (state, id) =>
  fromProducts.getProduct(state.productReducer, id);

