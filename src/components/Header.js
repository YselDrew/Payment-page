import React from "react"
import headerLogo from "../images/headerLogo.png"

function Header() {
  return (
    <div>
      <img src={headerLogo} alt="My Letter Logo"></img>
      <span>Edit details in your cover letter</span>
    </div>
  )
}

export default Header
