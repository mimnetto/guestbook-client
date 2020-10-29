import React from 'react'
import Form from './Form.js'

function Footer(props) {
  return (
    <footer>
      <h1>Footer</h1>
      <Form handleSubmit={props.handleSubmit} />
    </footer>
  )
}

export default Footer
