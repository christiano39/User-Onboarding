import React from 'react'

export default function Form(props) {
    const { formState,
            disabled,
            errors,
            onInputChange, 
            onCheckboxChange, 
            onSubmit,
        } = props
    return (
        <form onSubmit={onSubmit}>
            <div>{errors.name}</div>
            <div>{errors.email}</div>
            <div>{errors.password}</div>
            <div>{errors.terms}</div>
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
            <button disabled={disabled}>Submit</button>
        </form>
    )
}