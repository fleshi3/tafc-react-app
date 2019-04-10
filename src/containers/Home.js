import React, { Component } from "react";
import PropTypes from "prop-types";
import HomeBar from "../components/Navigation/HomeBar";
import HomeBanner from "../components/Navigation/HomeBanner";

class Home extends Component {
  Home = () => {
    const { handleClick } = this.props;
    return (
      <div className="Home">
        <HomeBar />
        <HomeBanner handleClick={handleClick} />
      </div>
    );
  };

  render() {
    const { Home } = this;
    return <div>{Home(this.props)}</div>;
  }
}

Home.propTypes = {
  handleClick: PropTypes.func
};

export default Home;
