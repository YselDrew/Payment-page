import React from "react";

import errorImg from "../images/invalidFormField.png"
import successImg from "../images/validFormField.png"

const Error = ({ touched, message }) => {
  if (!touched) {
    return <div className="form-message invalid">&nbsp;</div>;
  }
  if (message) {
    return (
    <div className="form-message invalid">
        {message}
        <img src={errorImg} alt='Error'></img>
    </div>
    )
  }
  return (
  <div className="form-message valid">
      <img src={successImg} alt='Success'></img>
  </div>
  )
};

export default Error;
