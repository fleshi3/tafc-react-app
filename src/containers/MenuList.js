import React, { Component } from "react";
import { connect } from "react-redux";
import MenuItem from "../components/Menu/MenuItem";
import MenuTitle from "../components/Menu/MenuTitle";
import SortLink from "../components/Menu/SortLink";
import { SortFilters } from "../actions";

const MapStateToProps = state => {
  return { items: state.productReducer.byId };
};

class MenuList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  // Update empty state.search
  handleChange = e => {
    this.setState({ search: e.target.value });
  };

  render() {
    const { search } = this.state;
    return (
      <div className="menuList">
        <MenuTitle title="Our Menu" />
        <SortLink filter={SortFilters.SORT_INITIAL}>ID</SortLink>
        <SortLink filter={SortFilters.SORT_DESCENDING}>DOWN</SortLink>
        <SortLink filter={SortFilters.SORT_ASCENDING}>UP</SortLink>
        <MenuItem searchMe={search} />
      </div>
    );
  }
}

export default connect(MapStateToProps)(MenuList);
