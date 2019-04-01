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
