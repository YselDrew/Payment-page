import React from "react";
import headerLogo from "../images/headerLogo.png";

import "../styles/header.scss";

function Header() {
  return (
    <div className="header">
      <div className="header__content">
        <img src={headerLogo} alt="My Letter Logo"></img>
        <span>Edit details in your cover letter</span>
      </div>
    </div>
  );
}

export default Header;
