import foodItems from "./items";

const items = foodItems;

const initState = {
  items,
  addedItems: [],
  total: 0
};

function cartReducer(state = initState, action) {
  return state;
}

export default cartReducer;
