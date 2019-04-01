import React, { Component } from "react";
import { connect } from "react-redux";
import MenuItem from "./Menu/MenuItem";
import MenuTitle from "./Menu/MenuTitle";
import SortLink from "./Menu/SortLink";
import { SortFilters } from "../actions";

const MapStateToProps = state => {
  return { items: state.cartReducer.items };
};

class MenuList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  // Sort Reset (uses default id order)
  sortInitial = () => {
    const { items } = this.state;
    const sortReset = items.sort(function sortFood(a, b) {
      return a.id - b.id;
    });
    this.setState({ items: sortReset });
  };

  // Sort Descending
  sortPriceDown = () => {
    const { items } = this.state;
    const sortPriceDown = items.sort(function sortFood(a, b) {
      return b.price - a.price;
    });
    this.setState({ items: sortPriceDown });
  };

  // Sort Ascending
  sortPriceUp = () => {
    const { items } = this.state;
    const sortPriceUp = items.sort(function sortFood(a, b) {
      return a.price - b.price;
    });
    this.setState({ items: sortPriceUp });
  };

  // Update empty state.search
  handleChange = e => {
    this.setState({ search: e.target.value });
  };

  render() {
    const { search } = this.state;
    return (
      <div className="menuList">
        <MenuTitle title="Our Menu" />
        <SortLink filter={SortFilters.SORT_DESCENDING}>DOWN</SortLink>
        {/*  <MenuSorted handleChange={this.handleChange} search={search} /> */}
        <MenuItem searchMe={search} />
      </div>
    );
  }
}

export default connect(MapStateToProps)(MenuList);
