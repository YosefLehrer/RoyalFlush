import React from 'react'

const UserSignupForm = (props) => {
    return (
        <div className="ProviderSignupForm">
            <form onSubmit={(event) => props.handleSubmit(event, "signup")}>
                <label>Username </label>
                <input onChange={props.handleChange} value={props.userForm.username} name="username" type="text" placeholder="Username"/> <br/>
                <label>Password </label>
                <input onChange={props.handleChange} value={props.userForm.password} name="password" type="password" placeholder="Password"/><br/>
                <input type="submit" value="Signup" />
            </form>
        </div>
    )
}

export default UserSignupForm