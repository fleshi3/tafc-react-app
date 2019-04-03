import { combineReducers } from "redux";
import data from "./data";

const initState = {
  products: data
};

const products = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const byId = (state = initState.products.byId, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const visibleIds = (state = initState.products.visibleIds, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default combineReducers({
  byId,
  visibleIds
});

export const getProduct = (state, id) => state.byId[id];

export const getVisibleProducts = state =>
  state.visibleIds.map(id => getProduct(state, id));
