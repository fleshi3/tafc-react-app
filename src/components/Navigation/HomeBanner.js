import React, { Component } from "react";
import PropTypes from "prop-types";
import logoSVG from "../Features/logo";

class HomeBanner extends Component {
  Banner = () => {
    const { handleClick } = this.props;
    return (
      <div className="homeBanner">
        <div className="logoContainer">{logoSVG()}</div>
        <div className="textContainer">
          <div className="bigText">T.A.F.C</div>
          <div className="smallText">
            THE <span className="highlight">ART</span> OF FRIED CHICKEN
          </div>
          <div className="underline" />
          <div className="scrollButton">
            <button type="button" onClick={handleClick}>
              browse menu
            </button>
          </div>
        </div>
      </div>
    );
  };

  render() {
    const { Banner } = this;
    return <div>{Banner(this.props)}</div>;
  }
}

HomeBanner.propTypes = {
  handleClick: PropTypes.func
};

export default HomeBanner;
