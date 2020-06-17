import React from 'react'

export default function User(props) {
    const { name, email, password, id, role, gender } = props.user

    return (
        <div className='user'>
            <h3>{name}</h3>
            <p>ID: {id}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Role: {role}</p>
            <p>Gender: {gender}</p>
            {/* <pre>{JSON.stringify(props.user)}</pre> */}
        </div>
    )
}