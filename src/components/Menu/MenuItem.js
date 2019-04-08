import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addToCart, setOption } from "../../actions/index";

// *COULD POSSIBLY BE INTEGRATED INTO REDUCER*
const getItemsSelector = state => {
  return state.productReducer.visibleIds.map(
    id => state.productReducer.byId[id]
  );
};

const mapStateToProps = state => {
  return {
    items: getItemsSelector(state),
    filter: state.sortReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addToCart: items => dispatch(addToCart(items)),
    setOption: (items, e) => dispatch(setOption(items, e.target.value))
  };
};

const flavours = [
  "Original",
  "Water Buffalo Hot Sauce",
  "Lemon Pepper Sauce",
  "Nashville Coating",
  "Mexican Coating"
];

// *MOVE TO MENULIST*
function searchingFor(search) {
  return function fix(x) {
    return x.title.toLowerCase().includes(search.toLowerCase()) || !search;
  };
}

// SORT FILTER (DOES NOT MODIFY STATE)
const sortFilter = filter => {
  switch (filter) {
    case "SORT_DESCENDING":
      return function(a, b) {
        return b.price - a.price;
      };
    case "SORT_ASCENDING":
      return function(a, b) {
        return a.price - b.price;
      };
    case "SORT_INITIAL":
    default:
      return function(a, b) {
        return a.id - b.id;
      };
  }
};

class MenuItem extends Component {
  menuItem = items => {
    // destructuring
    const { title, price, image, id } = items;
    const { addToCart, setOption } = this.props;

    // sanitizing classname extensions for search filter
    const codex = title.toLowerCase();
    const itemContainer = `itemContainer + ${codex}`;

    // mapping flavor array
    const options = () => {
      if (items.options === true) {
        return flavours.map(function(x) {
          return (
            <option value={x} key={x}>
              {x}
            </option>
          );
        });
      }
      return (
        <option value="n/a" key="n/a">
          n/a
        </option>
      );
    };

    // menu item mapping template
    return (
      <div className={itemContainer} >
        <div className="overlay">
          <div className="previewContainer">
            <img src={image} alt="" />
          </div>
        </div>
        <div className="titleContainer">
          <h3>{title}</h3>
        </div>
        <form
          onSubmit={e => {
            e.preventDefault();
            addToCart(items, e);
          }}
        >
          <div className="optionContainer">
            <select onChange={e => setOption(items, e)}>
              {options(items)}
            </select>
          </div>
          <div className="descriptionContainer">
            <span className="itemPrice">${price}</span>
            <button type="submit" className="addToCart">
              +
            </button>
          </div>
        </form>
      </div>
    );
  };

  render() {
    const { items, filter } = this.props;
    const menuItems = items
      .slice()
      .sort(sortFilter(filter))
      .map(this.menuItem);
    return <div className="menuContainer">{menuItems}</div>;
  }
}

MenuItem.propTypes = {
  items: PropTypes.arrayOf,
  filter: PropTypes.string,
  addToCart: PropTypes.func
};

MenuItem.defaultProps = {
  items: [],
  filter: "",
  addToCart: null
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuItem);
