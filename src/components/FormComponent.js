import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import Error from "./Error";

import "../styles/formComponent.scss";
import safeImg from "../images/safe.png";
import creditCardsImg from "../images/creditCards.png";

const validationSchema = Yup.object().shape({
  cardNumber: Yup.string()
    .required("Credit Card Number is not valid")
    .min(12, "Minimum length 12"),
  firstName: Yup.string()
    .required("Must enter First Name")
    .min(1, "First Name is too short")
    .max(50, "First Name is too long")
    .matches(/^[A-Z]/, "Name should start with capital letter")
    .matches(/^[A-Z][a-z]+$/, "First Name is not valid"),
  lastName: Yup.string()
    .required("Must enter Last Name")
    .min(1, "Last Name is too short")
    .max(50, "Last Name is too long")
    .matches(/^[A-Z]/, "Last Name should start with capital letter")
    .matches(/^[A-Z][a-z]+$/, "Last Name is not valid"),
  year: Yup.number().max(2026, "Year is not valid")
});

function creditCardNumberParse(number) {
  const v = number.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
  const matches = v.match(/\d{4,16}/g);
  const match = (matches && matches[0]) || "";
  const parts = [];

  for (let i = 0, len = match.length; i < len; i += 4) {
    parts.push(match.substring(i, i + 4));
  }

  if (parts.length) {
    return parts.join(" ");
  } else {
    return number;
  }
}

function FormComponent() {
  return (
    <div className='purchase-form'>
      <img className='credit-cards' src={creditCardsImg} alt="Credit Cards"></img>
      <Formik
        validationSchema={validationSchema}
        initialValues={{
          cardNumber: "",
          firstName: "",
          lastName: "",
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
                <label htmlFor="month">Exp. Month</label>
                <select name="month" id="month">
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
                /<label htmlFor="year">Exp. year</label>
                <select
                  name="year"
                  id="year"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.year}
                >
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
                <Error touched={touched.year} message={errors.year} />
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
