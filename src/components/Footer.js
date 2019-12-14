import React from "react";
import footerLogo from "../images/footerLogo.png";

import "../styles/footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__top">
        <img src={footerLogo} alt="My Letter Logo"></img>
        <div className='footer__top--text'>
          <span>Private Policy</span>
          <div></div>
          <span>Term Of Use</span>
        </div>
      </div>

      <div className="footer__bottom">
        <span>© 2019, My Letter. All rights reserved.</span>
      </div>
    </div>
  );
}

export default Footer;
