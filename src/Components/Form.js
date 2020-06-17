import React from 'react'

export default function Form(props) {
    const { 
        formState,
        disabled,
        errors,
        onInputChange, 
        onCheckboxChange, 
        onSubmit,
    } = props

    return (
        <form onSubmit={onSubmit}>
            <h2>New User</h2>
            <div className='error'>{errors.name}</div>
            <div className='error'>{errors.email}</div>
            <div className='error'>{errors.password}</div>
            <div className='error'>{errors.role}</div>
            <div className='error'>{errors.terms}</div>
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
            <label>Role:&nbsp;
                <select
                    onChange={onInputChange}
                    value={formState.role}
                    name='role'
                >
                    <option value=''>-- Select a role --</option>
                    <option value='Student'>Student</option>
                    <option value='Instructor'>Instructor</option>
                    <option value='Team Lead'>Team Lead</option>
                    <option value='Alumni'>Alumni</option>
                </select>
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