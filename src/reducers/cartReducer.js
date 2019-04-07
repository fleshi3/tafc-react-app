// import foodItems from "./items";

import data from "./data";

const items = data;

const initState = {
  total: 0,
  totalCost: 0,
  addedItems: [],
  addedItemsById: {}
};

// Reducer for addedItems
const addedItems = (state = initState.addedItems, action) => {
  switch (action.type) {
    case "ADD":
      // "ADD" from actions/index.js, spreads the previous state,
      // and adds the new item. Resulting in a new array.
      // return [
      //  ...state,
      //  action.items
      // ];
      if (state.indexOf(action.items) === -1) {
        return [...state, action.items];
      }
      return [...state];
    case "REMOVE":
      // "REMOVE" from actions.index.js, returns a NEW array without
      // the item that was filtered out via ID.
      return state.addedItems.filter(items.id !== action.item.id);
    default:
      return state;
  }
};

// Reducer for addedItemsById
const addedItemsById = (state = initState.addedItemsById, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        [action.items.id]: (state[action.items.id] || 0) + 1
      };
    default:
      return state;
  }
};

// Reducer for total
const total = (state = total, action) => {
  switch (action.type) {
    case "ADD":
      return state + 1;
    default:
      return state;
  }
};

export const getQuantity = (state, action) => state.addedItemsById[action] || 0;

export const getAddedItems = state => state.addedItems;

// Reducer for TOTAL COST
const totalCost = (state = initState, action) => {
  switch (action.type) {
    case "ADD":
      return state.totalCost + action.items.price;
    default:
      return state.totalCost;
  }
};

const cartReducer = (state = initState, action) => {
  switch (action.type) {
    default:
      return {
        addedItems: addedItems(state.addedItems, action),
        addedItemsById: addedItemsById(state.addedItemsById, action),
        total: total(state.total, action),
        totalCost: totalCost(state, action)
      };
  }
};

export default cartReducer;
