import React from "react";
import "./HeaderOption.css";
const HeaderOption = ({ Icon, title }) => {
  return (
    <div className="headerOption">
      {Icon && <Icon className="headerOption__icon" />}
      {title && <h4>{title}</h4>}
    </div>
  );
};

export default HeaderOption;
