import React from "react";
import { Link } from "react-router-dom";

function HomeBarMobile() {
  const scrollTo = () => window.scrollTo(0, 667);
  const scrollBack = () => window.scrollTo(0, 0);
  return (
    <div className="homeBar">
      <ul className="homeList">
        <li>
          <Link
            exact
            to="/"
            activeClassName="NavLinkActive"
            onClick={scrollBack}
          >
            <span className="homeLink">HOME</span>
          </Link>
        </li>
        <li>
          <Link
            exact
            to="/menu"
            activeClassName="NavLinkActive"
            onClick={scrollTo}
          >
            <span className="homeLink">MENU</span>
          </Link>
        </li>
        <li>
          <Link
            exact
            to="/about"
            activeClassName="NavLinkActive"
            onClick={scrollTo}
          >
            <span className="homeLink">ABOUT</span>
          </Link>
        </li>
        <li>
          <Link
            exact
            to="/contact"
            activeClassName="NavLinkActive"
            onClick={scrollTo}
          >
            <span className="homeLink">CONTACT</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default HomeBarMobile;
