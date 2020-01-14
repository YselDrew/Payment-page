import React from "react";

import styles from "./styles.module.scss";

const Error = ({ touched, message }) => {
  if (!touched) {
    return <div className={styles.formMessage}></div>;
  }
  if (message) {
    return (
      <div className={styles.formMessage}>
        {message}
      </div>
    );
  }
  return (
    <div className={styles.formMessage}>
    </div>
  );
};

export default Error;
