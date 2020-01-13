import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  cardNumber: Yup.string()
    .required("Credit Card Number is not valid")
    .min(14, "Minimum length 12")
    .matches(/^\d+\s\d+\s\d+[\s\d+]*$/, "Credit Card number is not valid"),
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
  year: Yup.number()
    .required("Choose year")
    .max(2026, "Year is not valid"),
  month: Yup.string().required("Choose month")
});

export const parseCreditCardNumber = number => {
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
};

// export default creditCardNumberParse;
