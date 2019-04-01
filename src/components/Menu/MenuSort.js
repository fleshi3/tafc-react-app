import React from "react";
import PropTypes from "prop-types";
import { SortFilters, setSortFilter } from "../../actions/index";
import { connect } from "react-redux";
import Button from "./SortButton";

const MenuSort = props => {
  const { handleChange, search } = props;
  const { SORT_INITIAL, SORT_DESCENDING, SORT_ASCENDING } = SortFilters;
  return (
    <div className="sortList">
      <button type="button" filter={SORT_INITIAL}>
        Popularity
      </button>
      <button type="button" filter={SORT_DESCENDING}>
        Price (D)
      </button>
      <button type="button" filter={SORT_ASCENDING}>
        Price (U)
      </button>
      <div className="searchContainer">
        <input
          type="text"
          className="searchingFor"
          placeholder="Filter results"
          value={search}
          onChange={handleChange}
        />
      </div>
      <div>
        <Button filter="SORT_DESCENDING" />
      </div>
    </div>
  );
};

MenuSort.propTypes = {
  handleChange: PropTypes.func,
  search: PropTypes.string
};

MenuSort.defaultProps = {
  handleChange: () => null,
  search: ""
};

const MenuSorted = connect(mapDispatchToProps)(MenuSort);

export default MenuSorted;
