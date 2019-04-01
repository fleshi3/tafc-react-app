import React from "react";
import "../scss/App.scss";

function Header() {
  return (
    <header className="userHeader">
      Logged in as{" "}
      <span className="textSecondary">
        Tung{" "}
        <a href="/" style={{ color: "grey" }}>
          (log out)
        </a>{" "}
      </span>
    </header>
  );
}

export default Header;
