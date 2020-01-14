import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

import annualImg from "../../images/annual.png";

import styles from "./styles.module.scss";

function AnnualPlanOffer({ location }) {
  const isOpen = location.pathname === '/annual'

  return (
    <div className={isOpen ? styles.openedContainer : styles.container}>
      <img src={annualImg} alt="#"/>
      <div className={isOpen ? styles.openedContent : styles.content}>
        <span
          className={
            isOpen ? styles.openedTitle : styles.title
          }
        >
          Annual plan
        </span>
        <span
          className={
            isOpen ? styles.openedPrice : styles.price
          }
        >
          $39.00<span> / year</span>
        </span>
        <span
          className={
            isOpen ? styles.openedText : styles.text
          }
        >
          Your Premium plan will auto-renew. Cancel any time.
        </span>
      </div>
      {isOpen ? (
        <Link to="/">
          <input
            className={styles.inputClose}
            type="button"
            value="Change"
          />
        </Link>
      ) : (
        <Link to="/annual">
          <input
            className={styles.inputOpen}
            type="button"
            value="Get Started"
          />
        </Link>
      )}
    </div>
  );
}

export default withRouter(AnnualPlanOffer);

