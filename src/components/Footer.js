import React from "react"
import footerLogo from "../images/footerLogo.png"

function Footer() {
  return (
    <div>
      <div>
        <img src={footerLogo} alt="My Letter Logo"></img>
        <span>Private Policy</span>
        <hr />
        <span>Term Of Use</span>
      </div>

      <div>
        <span>© 2019, My Letter. All rights reserved.</span>
      </div>
    </div>
  )
}

export default Footer
