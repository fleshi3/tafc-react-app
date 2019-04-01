import React from "react";
import PropTypes from "prop-types";

const MenuSort = props => {
  const { sortInitial, sortPriceDown, sortPriceUp, handleChange } = props;
  const { search } = props;
  return (
    <div className="sortList">
      <button type="button" onClick={sortInitial}>
        Popularity
      </button>
      <button type="button" onClick={sortPriceDown}>
        Price (D)
      </button>
      <button type="button" onClick={sortPriceUp}>
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
    </div>
  );
};

MenuSort.propTypes = {
  sortInitial: PropTypes.func,
  sortPriceDown: PropTypes.func,
  sortPriceUp: PropTypes.func,
  handleChange: PropTypes.func,
  search: PropTypes.string
};

MenuSort.defaultProps = {
  sortInitial: () => null,
  sortPriceDown: () => null,
  sortPriceUp: () => null,
  handleChange: () => null,
  search: ""
};

export default MenuSort;
