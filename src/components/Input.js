import React from 'react'
import "materialize-css/dist/css/materialize.min.css";
import Form from "react-forms-materialize-css"

const Input = props => {
  const {handleChange, name, placeholder, title, type, value} = props
    return (
      <>
      <label htmlFor={name} for={name}>{title}</label>
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          className="validate"
        />

      </>
    )
}

export default Input
