import React from "react";
import PropTypes from "prop-types";

const MenuTitle = props => {
  const { title } = props;
  return (
    <div className="menuTitle">
      <span>{title}</span>
    </div>
  );
};

MenuTitle.propTypes = {
  title: PropTypes.string
};

MenuTitle.defaultProps = {
  title: ""
};

export default MenuTitle;
