import React, { useState } from 'react';
import './App.css';
import Form from './Components/Form'

const initialFormState = {
  name: '',
  email: '',
  password: '',
  terms: false,
}

function App() {
  const [formState, setFormState] = useState(initialFormState)

  const onInputChange = e => {
    const { name, value } = e.target
    setFormState({
      ...formState,
      [name]: value
    })
  }

  const onCheckboxChange = e => {
    const { name, checked } = e.target
    setFormState({
      ...formState,
      [name]: checked,
    })
  }

  const onSubmit = e => {
    e.preventDefault()
  }
  
  return (
    <div className="App">
      <Form formState={formState} onInputChange={onInputChange} onCheckboxChange={onCheckboxChange} onSubmit={onSubmit} />
    </div>
  );
}

export default App;
