import React from "react";
import { Formik, Form } from "formik";
import { validationSchema, parseCreditCardNumber } from "./Validator.js";
import Error from "./Error";

import "../styles/formComponent.scss";
import safeImg from "../images/safe.png";
import creditCardsImg from "../images/creditCards.png";

const initialValues = {
  cardNumber: "",
  firstName: "",
  lastName: "",
  month: "",
  year: ""
}

const years = [
  "2019",
  "2020",
  "2021",
  "2022",
  "2023",
  "2024",
  "2025",
  "2026",
  "2027",
  "2028",
  "2029",
  "2030",
]

const months = [
  { number: 1, name: 'January' },
  { number: 2, name: 'February' },
  { number: 3, name: 'March' },
  { number: 4, name: 'April' },
  { number: 5, name: 'May' },
  { number: 6, name: 'June' },
  { number: 7, name: 'July' },
  { number: 8, name: 'August' },
  { number: 9, name: 'September' },
  { number: 10, name: 'October' },
  { number: 11, name: 'November' },
  { number: 12, name: 'December' },
]

const onSubmit = (values, { setSubmitting, resetForm }) => {
  setSubmitting(false);

  setTimeout(() => {
    alert(JSON.stringify(values, null, 2));
    resetForm();
    setSubmitting(false);
  }, 500);
}

function FormComponent() {
  return (
    <div className="purchase-form">
      <img
        className="credit-cards"
        src={creditCardsImg}
        alt="Credit Cards"
      />
      <Formik
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={onSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          isSubmitting
        }) => (
          <Form>
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
                  value={parseCreditCardNumber(values.cardNumber)}
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
                  <select
                    name="month"
                    id="month"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.month}
                  >
                    <option value="" default hidden>
                      Month
                    </option>
                    {months.map(month => (
                      <option value={month.number} key={month.number}>
                        {`${month.number} - ${month.name}`}
                      </option>
                    ))}
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
                    <option value="" default hidden>
                      Year
                    </option>
                    {years.map(year => ( 
                      <option key={year} value={year}>{year}</option> 
                    ))}
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
              <img src={safeImg} alt="safe"/>
              <span>Secure credit card payment</span>
            </div>
          </Form>
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
