import { SortFilters } from "../actions/index";

const sortReducer = (state = SortFilters.SORT_INITIAL, action) => {
  switch (action.type) {
    case "SET_SORT_FILTER":
      return action.filter;
    default:
      return state;
  }
};

export default sortReducer;
