// actions/index.js

// action objects
export const SortFilters = {
  SORT_INITIAL: "SORT_INITIAL",
  SORT_DESCENDING: "SORT_DESCENDING",
  SORT_ASCENDING: "SORT_ASCENDING"
};

// action creator
export const setSortFilter = filter => ({
  type: "SET_SORT_FILTER",
  filter
});

export function addToCart(items) {
  return {
    type: "ADD",
    items
  };
}

export function removeFromCart(items) {
  return {
    type: "REMOVE",
    items
  };
}

export function setOption(items, e) {
  return {
    type: "SET_OPTION",
    items,
    option: e
  };
}
