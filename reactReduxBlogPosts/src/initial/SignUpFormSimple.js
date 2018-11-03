import React from 'react'
import { Field, reduxForm } from 'redux-form'

let SignUpFormSimple= (props) => { // props podría ir sin paréntesis si es el único param.
  const { handleSubmit } = props //la constante toma las properties que entran de paràmetro. Es como { handleSubmit: handleSubmit }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="firstName">First Name</label>
        <Field name="firstName" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="lastName">Last Name</label>
        <Field name="lastName" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <Field name="email" component="input" type="email" />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

SignUpFormSimple= reduxForm({
  // a unique name for the form
  form: 'SignUpFormSimple' //este valor es único por form.
})(SignUpFormSimple)

export default SignUpFormSimple;