// import foodItems from "./items";

import data from "./data";

const items = data;

const initState = {
  items,
  total: 0,
  addedItems: [],
  addedItemsById: {}
};

function cartReducer(state = initState, action) {
  const newItem = action.items;
  switch (action.type) {
    case "ADD":
      // "ADD" from actions/index.js, spreads the previous state,
      // and adds the new item. Resulting in a new array.
      return {
        ...state,
        total: state.total + 1,
        addedItems: [...state.addedItems, newItem],
        addedItemsById: {
          ...state.addedItemsById,
          [action.items.id]: (state.addedItemsById[action.items.id] || 0) + 1
        }
        // [action.item]: (state.addedItemsById[action.item] || 0) + 1
      };
    case "REMOVE":
      // "REMOVE" from actions.index.js, returns a NEW array without
      // the item that was filtered out via ID.
      return state.addedItems.filter(items.id !== action.item.id);
    default:
      return state;
  }
}

export default cartReducer;
