import React from "react";
import headerLogo from "../../images/headerLogo.png";

import styles from "./styles.module.scss";

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.content}>
        <img src={headerLogo} alt="My Letter Logo"></img>
        <span>Edit details in your cover letter</span>
      </div>
    </div>
  );
}

export default Header;
