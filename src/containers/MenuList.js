import React, { Component } from "react";
import { connect } from "react-redux";
import MenuItem from "../components/Menu/MenuItem";
import MenuTitle from "../components/Menu/MenuTitle";
import SortLink from "../components/Menu/SortLink";
import { SortFilters } from "../actions";
import Footer from "../components/Assets/Footer";
import Copyright from "../components/Assets/Copyright";

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

  componentDidMount() {
    const el = document.querySelector(".menuList");
    el.classList.add("fade-in");
  }

  render() {
    const { search } = this.state;
    return (
      <div className="menuList">
        <MenuTitle title="MENU" />
        <span className="Pacifico">ORDER:</span>&emsp; &emsp;
        <div className="sortButtons">
          <SortLink filter={SortFilters.SORT_INITIAL}>Product Index</SortLink>
          <SortLink filter={SortFilters.SORT_DESCENDING}>
            Price (High to Low)
          </SortLink>
          <SortLink filter={SortFilters.SORT_ASCENDING}>
            Price (Low to High)
          </SortLink>
        </div>
        <MenuItem searchMe={search} />
        <Footer />
        <Copyright />
      </div>
    );
  }
}

export default connect(MapStateToProps)(MenuList);
