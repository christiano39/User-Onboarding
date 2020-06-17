import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './Components/Form'
import User from './Components/User'
import formSchema from './Validation/formSchema'
import axios from 'axios'
import * as Yup from 'yup'

const initialFormState = {
  name: '',
  email: '',
  password: '',
  terms: false,
}
const initialFormErrors = {
  name: '',
  email: '',
  password: '',
  terms: '',
}
const initialDisabledState = true

function App() {
  const [formState, setFormState] = useState(initialFormState)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabledState)
  const [users, setUsers] = useState([])
  const URL = 'https://reqres.in/api/users'

  const postNewUser = newUser => {
    axios.post(URL, newUser)
      .then(res => {
        setUsers([ ...users, res.data ])
      })
      .catch(err => {
        console.log(err)
      })
      .finally(() => {
        setFormState(initialFormState)
      })
  }
  
  const onInputChange = e => {
    const { name, value } = e.target

    Yup
      .reach(formSchema, name)
      //we can then run validate using the value
      .validate(value)
      // if the validation is successful, we can clear the error message
      .then(valid => {
        setFormErrors({
          ...formErrors,
          [name]: ""
        })
      })
      /* if the validation is unsuccessful, we can set the error message to the message 
        returned from yup (that we created in our schema) */
      .catch(err => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0]
        })
      })

    setFormState({
      ...formState,
      [name]: value
    })
  }

  const onCheckboxChange = e => {
    const { name, checked } = e.target

    Yup
      .reach(formSchema, name)
      //we can then run validate using the value
      .validate(checked)
      // if the validation is successful, we can clear the error message
      .then(valid => {
        setFormErrors({
          ...formErrors,
          [name]: ""
        })
      })
      /* if the validation is unsuccessful, we can set the error message to the message 
        returned from yup (that we created in our schema) */
      .catch(err => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0]
        })
      })

    setFormState({
      ...formState,
      [name]: checked,
    })
  }

  const onSubmit = e => {
    e.preventDefault()

    const newUser = {
      name: formState.name.trim(),
      email: formState.email.trim(),
      password: formState.password.trim(),
      terms: formState.terms
    }

    postNewUser(newUser)
  }

  useEffect(() => {
    formSchema.isValid(formState).then(valid => {
      setDisabled(!valid)
    })
  }, [formState])
  
  return (
    <div className="App">
      <Form 
        formState={formState}
        disabled={disabled}
        errors={formErrors}
        onInputChange={onInputChange}
        onCheckboxChange={onCheckboxChange}
        onSubmit={onSubmit}
      />
      { users.length > 0 ? <h2>Users</h2> : '' }
      {
        users.map(user => {
          return <User user={user} key={user.id} />
        })
      }
    </div>
  );
}

export default App;
