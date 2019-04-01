import React from "react";
import { NavLink } from "react-router-dom";
import logoSVG from "./logo";

function NavBar() {
  return (
    <div className="navBar">
      <ul className="navList">
        <li>
          <NavLink exact to="/" activeClassName="NavLinkActive">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/about" activeClassName="NavLinkActive">
            About
          </NavLink>
        </li>
        <div className="roundCut">{logoSVG()}</div>
        <li>
          <a href="/">Order</a>
        </li>
        <li>
          <a href="/">Catering</a>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
