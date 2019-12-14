import React from "react"
import { Link } from "react-router-dom"

function FormComponent() {
  return (
    <div>
      <form>
        <span>Card number</span>
        <input type="text"/>
        <span>Cardholder First Name</span>
        <input type="text"/>
        <span>Cardholder Last Name</span>
        <input type="text"/>
        <span>Exp. Month</span>
        <input type="text"/>
        <span>Exp. Year</span>
        <input type="text"/>
        <input type="submit" value="confirm"/>
      </form>
    </div>
  )
}

export default FormComponent
