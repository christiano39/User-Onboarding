import React from 'react'

export default function User(props) {
    const { name, email, password, id } = props.user

    return (
        <div className='user'>
            <h3>{name}</h3>
            <p>ID: {id}</p>
            <p>Email: {email}</p>
            <p>Password Length: {password.length} characters</p>
            {/* <pre>{JSON.stringify(props.user)}</pre> */}
        </div>
    )
}