import React from 'react'
import { Field, reduxForm } from 'redux-form'

//VALIDACIONES
const validate = values => {
  const errors = {}
  if (!values.username) {
    errors.username = 'Requerido'
  } else if (values.username.length < 5) {
    errors.username = 'Mínimo 5 letras'
  } else if (values.username.length > 15) {
    errors.username = 'Máximo 15 letras'
  }

  if (!values.email) {
    errors.email = 'Requerido'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'email Invalido'
  }

  if (!values.password) {
    errors.password = 'Requerido'
  } else if (values.password.length > 15) {
    errors.password = 'Debe ser menor de 15'
  }

  if (!values.password_confirm) {
    errors.password_confirm = 'Requerido'
  } else if (values.password_confirm !== values.password) {
    errors.password_confirm = 'Los passwords no coinciden'
  }


  return errors
}


const renderField = ({ input, label, type, meta: { touched, error } }) =>
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {
        touched && ((error &&
          <span>   {error}   </span>))
      }
    </div>
  </div>


const SignUpFormValidationFinal = props => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="username"
        type="text"
        component={renderField}
        label="Username"
      />
      <Field name="email" type="email" component={renderField} label="Email" />
      <Field name="password" type="password" component={renderField} label="Password" />
      <Field name="password_confirm" type="password" component={renderField} label="Confirmar Password" />
      <div>
        <button type="submit" disabled={submitting}>
          Submit
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'SignUpFormValidationFinal', // a unique identifier for this form
  validate, // <--- validation function given to redux-form
})(SignUpFormValidationFinal)