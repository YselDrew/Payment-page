import React from "react";
import suggestionsTitleImg from "../../images/suggestionsTitle.png";

import styles from "./styles.module.scss";

function Suggestions() {
  return (
    <div className={styles.root}>
      <img src={suggestionsTitleImg} alt="Suggestion Title"></img>
      <div className={styles.listWrapper}>
        <span>Your plan will include:</span>
        <ul>
          <li>Unlimited Cover Letters</li>
          <li>50+ custom templates</li>
          <li>Creative designs</li>
          <li>Custom backgrounds</li>
          <li>More than 15 color schemes</li>
          <li>Create multiple versions</li>
          <li>Custom sections</li>
          <li>Unlimited PDF downloads</li>
          <li>Email sharing</li>
        </ul>
      </div>
    </div>
  );
}

export default Suggestions;
