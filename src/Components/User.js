import React from 'react'

export default function User(props) {
    const { name, email, password } = props.user

    return (
        <div className='user'>
            <h3>{name}</h3>
            <p>Email: {email}</p>
            <p>Password Length: {password.length} characters</p>
        </div>
    )
}