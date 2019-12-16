import React from "react";

import errorImg from "../images/invalidFormField.png"
import successImg from "../images/validFormField.png"

const Error = ({ touched, message }) => {
  if (!touched) {
    return <div className="form-message invalid">&nbsp;</div>;
  }
  if (message) {
    return (
    <div className="form-message">
        {message}
        <img className='validation-icon' src={errorImg} alt='Error'></img>
    </div>
    )
  }
  return (
  <div className="form-message">
      <img className='validation-icon' src={successImg} alt='Success'></img>
  </div>
  )
};

export default Error;
