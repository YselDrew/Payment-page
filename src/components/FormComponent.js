import React from "react";
import { Formik } from "formik";
import { validationSchema, creditCardNumberParse } from "./Validator.js";
import Error from "./Error";

import "../styles/formComponent.scss";
import safeImg from "../images/safe.png";
import creditCardsImg from "../images/creditCards.png";

function FormComponent(props) {
  return (
    <div className="purchase-form">
      <img
        className="credit-cards"
        src={creditCardsImg}
        alt="Credit Cards"
      ></img>
      <Formik
        validationSchema={validationSchema}
        initialValues={{
          cardNumber: "",
          firstName: "",
          lastName: "",
          month: "",
          year: ""
        }}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setSubmitting(false);

          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            resetForm();
            setSubmitting(false);
          }, 500);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting
        }) => (
          <form onSubmit={handleSubmit}>
            <div className="card-data">
              <div className="input-row">
                <label htmlFor="cardNumber">Card Number</label>
                <input
                  type="text"
                  name="cardNumber"
                  id="cardNumber"
                  placeholder="Enter card number"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={creditCardNumberParse(values.cardNumber)}
                  className={
                    touched.cardNumber && errors.cardNumber ? "has-error" : null
                  }
                />
                <Error
                  touched={touched.cardNumber}
                  message={errors.cardNumber}
                />
              </div>

              <div className="select-row">
                <div className="select-month">
                  <label htmlFor="month">Exp. Month</label>
                  {/* <select name="month" id="month"> */}
                  <select
                    name="month"
                    id="month"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.month}
                  >
                    <option value="" disabled selected hidden>
                      Month
                    </option>
                    <option value="1">1 - January</option>
                    <option value="2">2 - February</option>
                    <option value="3">3 - March</option>
                    <option value="4">4 - April</option>
                    <option value="5">5 - May</option>
                    <option value="6">6 - June</option>
                    <option value="7">7 - July</option>
                    <option value="8">8 - August</option>
                    <option value="9">9 - September</option>
                    <option value="10">10 - October</option>
                    <option value="11">11 - November</option>
                    <option value="12">12 - December</option>
                  </select>
                  <Error touched={touched.month} message={errors.month} />
                  <Error touched={touched.year} message={errors.year} />
                </div>
                <span>/</span>
                <div className="select-year">
                  <label htmlFor="year">Exp. year</label>
                  <select
                    name="year"
                    id="year"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.year}
                  >
                    <option value="" default selected hidden>
                      Year
                    </option>
                    <option value="2019">2019</option>
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                    <option value="2026">2026</option>
                    <option value="2027">2027</option>
                    <option value="2028">2028</option>
                    <option value="2029">2029</option>
                    <option value="2030">2030</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="person-data">
              <div className="input-row">
                <label htmlFor="firstName">Cardholder First Name</label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  placeholder="Enter First Name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.firstName}
                  className={
                    touched.firstName && errors.firstName ? "has-error" : null
                  }
                />
                <Error touched={touched.firstName} message={errors.firstName} />
              </div>

              <div className="input-row">
                <label htmlFor="lastName">Cardholder Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  placeholder="Enter Last Name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.lastName}
                  className={
                    touched.lastName && errors.lastName ? "has-error" : null
                  }
                />
                <Error touched={touched.lastName} message={errors.lastName} />
              </div>
            </div>

            <div className="submit-row">
              <button type="submit" disabled={isSubmitting}>
                Confirm
              </button>
              <img src={safeImg} alt="safe"></img>
              <span>Secure credit card payment</span>
            </div>
          </form>
        )}
      </Formik>
      <span className="submit-text">
        Your card will be automatically attached to your profile, you can remove
        it at any time. By clicking “Confirm” you agree to the{" "}
        <span>Terms & Conditions</span>
      </span>
    </div>
  );
}

export default FormComponent;
