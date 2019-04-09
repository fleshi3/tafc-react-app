import React from "react";
import { NavLink } from "react-router-dom";
import logoSVG from "../Features/logo";

function NavBar() {
  return (
    <div className="navBar">
      <ul className="navList">
        <li>
          <NavLink exact to="/" activeClassName="NavLinkActive">
            <span className="PacificoPlain">Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/about" activeClassName="NavLinkActive">
            <span className="PacificoPlain">About</span>
          </NavLink>
        </li>
        <div className="roundCut">{logoSVG()}</div>
        <li>
          <NavLink exact to="/catering" activeClassName="NavLinkActive">
            <span className="PacificoPlain">Catering</span>
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/contact" activeClassName="NavLinkActive">
            <span className="PacificoPlain">Contact</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
