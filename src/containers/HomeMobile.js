import React, { Component } from "react";
import PropTypes from "prop-types";
import HomeBarMobile from "../components/Navigation/HomeBarMobile";
import HomeBanner from "../components/Navigation/HomeBanner";

class HomeMobile extends Component {
  Home = () => {
    const { handleClick, showMenu, menuVisible } = this.props;
    return (
      <div className="Home">
        <div className="toggleMenu">
          <button onClick={showMenu}>MENU</button>
        </div>
        <div
          style={{
            opacity: menuVisible ? "1" : "0",
          }}
        >
          <HomeBarMobile />
        </div>
        <HomeBanner handleClick={handleClick} />
      </div>
    );
  };

  render() {
    const { Home } = this;
    return <div>{Home(this.props)}</div>;
  }
}

HomeMobile.propTypes = {
  handleClick: PropTypes.func,
  showMenu: PropTypes.func
};

export default HomeMobile;
