import React from 'react'

export default function Form(props) {
    const { formState, onInputChange, onCheckboxChange, onSubmit } = props
    return (
        <form onSubmit={onSubmit}>
            <label>Name:&nbsp;
                <input 
                    type='text'
                    name='name'
                    value={formState.name}
                    onChange={onInputChange}
                />
            </label>
            <br />
            <label>Email:&nbsp;
                <input 
                    type='email'
                    name='email'
                    value={formState.email}
                    onChange={onInputChange}
                />
            </label>
            <br />
            <label>Password:&nbsp;
                <input 
                    type='password'
                    name='password'
                    value={formState.password}
                    onChange={onInputChange}
                />
            </label>
            <br />
            <label>Do you agree to the terms and conditions?&nbsp;
                <input 
                    type='checkbox'
                    name='terms'
                    checked={formState.terms}
                    onChange={onCheckboxChange}
                />
            </label>
            <br />
            <button>Submit</button>
        </form>
    )
}