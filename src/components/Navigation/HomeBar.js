import React from "react";
import { NavLink } from "react-router-dom";
import logoSVG from "../Features/logo";

function HomeBar() {
  const scrollTo = () => window.scrollTo(0, 990);
  const scrollBack = () => window.scrollTo(0, 0);
  return (
    <div className="homeBar">
      <ul className="homeList">
        <li>
          <NavLink
            exact
            to="/"
            activeClassName="NavLinkActive"
            onClick={scrollBack}
          >
            <span className="homeLink">HOME</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            to="/about"
            activeClassName="NavLinkActive"
            onClick={scrollTo}
          >
            <span className="homeLink">ABOUT</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            to="/contact"
            activeClassName="NavLinkActive"
            onClick={scrollTo}
          >
            <span className="homeLink">CATERING</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            to="/contact"
            activeClassName="NavLinkActive"
            onClick={scrollTo}
          >
            <span className="homeLink">CONTACT</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default HomeBar;
