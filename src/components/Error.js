import React from "react";

import errorImg from "../images/invalidFormField.png";
import successImg from "../images/validFormField.png";

const Error = ({ touched, message }) => {
  if (!touched) {
    return <div className="form-message"></div>;
  }
  if (message) {
    return (
      <div className="form-message">
        {message}
        {/* <img className='invalid-icon' src={errorImg} alt='Error'></img> */}
      </div>
    );
  }
  return (
    <div className="form-message">
      {/* <img className='valid-icon' src={successImg} alt='Success'></img> */}
    </div>
  );
};

export default Error;
