import React from "react";
import footerLogo from "../../images/footerLogo.png";

import styles from "./styles.module.scss";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.top}>
        <img src={footerLogo} alt="My Letter Logo" />
        <div className={styles.text}>
          <span>Private Policy</span>
          <div className={styles.vertLine}></div>
          <span>Term Of Use</span>
        </div>
      </div>

      <div className={styles.bottom}>
        <span>© 2019, My Letter. All rights reserved.</span>
      </div>
    </div>
  );
}

export default Footer;

