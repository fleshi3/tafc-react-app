import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "../../scss/App.scss";

const sortedItems = (items, filter) => {
  switch (filter) {
    case "SORT_DESCENDING":
      return items.slice().sort(function(a, b) {
        return b.price - a.price;
      });
    case "SORT_ASCENDING":
      return items.slice().sort(function(a, b) {
        return a.price - b.price;
      });
    case "SORT_INITIAL":
    default:
      return items;
  }
};

const mapStateToProps = state => {
  return { items: sortedItems(state.cartReducer.items, state.sortReducer) };
};

const flavours = [
  "Original",
  "Water Buffalo Hot Sauce",
  "Lemon Pepper Sauce",
  "Nashville Coating",
  "Mexican Coating"
];

function searchingFor(search) {
  return function fix(x) {
    return x.title.toLowerCase().includes(search.toLowerCase()) || !search;
  };
}

class MenuItem extends Component {
  menuItem = items => {
    const { title, price, image, id, select, key } = items;
    const codex = title.toLowerCase();
    const itemContainer = `itemContainer + ${codex}`;
    const optionItems = flavours.map(function gish(x) {
      if (items.flavour === true) {
        return (
          <option key={x} value={x}>
            {x}
          </option>
        );
      }
      return <option key={x}>{items.special}</option>;
    });

    return (
      <div className={itemContainer} key={key}>
        <div className="overlay">
          <div className="previewContainer" key={items.key}>
            <img src={image} alt="" />
          </div>
        </div>
        <div className="titleContainer">
          <h3>{title}</h3>
        </div>
        <div className="optionContainer" key={id}>
          <select key={id}>{optionItems}</select>
        </div>
        <div className="descriptionContainer">
          $<span>{price}</span>
        </div>
      </div>
    );
  };

  render() {
    const { items } = this.props;
    const { searchMe } = this.props;
    const menuItems = items.filter(searchingFor(searchMe)).map(this.menuItem);
    return <div className="menuContainer">{menuItems}</div>;
  }
}

MenuItem.propTypes = {
  searchMe: PropTypes.string,
  items: PropTypes.arrayOf
};

MenuItem.defaultProps = {
  searchMe: "",
  items: []
};

export default connect(mapStateToProps)(MenuItem);
