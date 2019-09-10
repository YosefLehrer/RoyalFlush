import React from 'react'

const UserLogin = (props) => {
    return (
        <>
            <form onSubmit={(event) => props.handleLogin(event, "login")}>
                <label>Username </label>
                <input onChange={props.handleChange} value={props.userForm.username} name="username" type="text" placeholder="Username"/> <br/>
                <label>Password </label>
                <input onChange={props.handleChange} value={props.userForm.password} name="password" type="password" placeholder="Password"/><br/>
                <input type="submit" value="Login" />
            </form>
        </>
    )
}

export default UserLogin