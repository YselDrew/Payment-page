import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

import Timer from "../Timer";
import trialImg from "../../images/trial.png";
import styles from "./styles.module.scss";

function TrialOffer({ location }) {
  const isOpen = location.pathname === '/trial'

  return (
    <div className={isOpen ? styles.openedContainer : styles.container}>
      <Timer isOpen={isOpen} />
      <img src={trialImg} alt="#"></img>
      <div className={isOpen ? styles.openedContent : styles.content}>
        <span
          className={
            isOpen ? styles.openedTitle : styles.title
          }
        >
          Trial
        </span>
        <span
          className={
            isOpen
              ? styles.openedSuggestion
              : styles.suggestion
          }
        >
          The first week only for
          <span
            className={
              isOpen ? styles.openedPrice : styles.price
            }
          >
            $0.99
          </span>
        </span>
        <span
          className={
            isOpen ? styles.openedText : styles.text
          }
        >
          Rebills at $8.99 per month after your trial is completed.
        </span>
      </div>

      {isOpen ? (
        <Link to="/">
          <input
            className={styles.inputClose}
            type="button"
            value="Change"
          ></input>
        </Link>
      ) : (
        <Link to="/trial">
          <input
            className={styles.inputOpen}
            type="button"
            value="Get Started"
          ></input>
        </Link>
      )}
    </div>
  );
}

export default withRouter(TrialOffer);
