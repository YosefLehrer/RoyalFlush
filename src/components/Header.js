import React from 'react'
import UserSignupForm from './UserSignupForm'

const Header = (props) => {
    return (
        <div>
            <div className="navbar-header">

                <div className="logo">
                    <img id="logo-img" src='https://www.charlotteplumbing.com/wp-content/uploads/2018/01/toilet-icon-full.png' alt=""/>
                </div>
                <div className="">Maybe a search</div>
                <div className="">Sign up as a Provider</div>
                {props.currentUser ? <button onClick={() => {
                    localStorage.removeItem('token')
                    props.autoLogin()
                    }}>Logout</button> :  <UserSignupForm handleChange={props.userHandleChange} userForm={props.userForm} handleSubmit={props.handleSubmit}/>}
                {/* <div className="sign-in-username">Sign in username</div>
                <div className="sign-in-password">Sign in password</div>
                <div className="sign-in-button">Sign in button</div> */}
            </div>
        </div>
    )
}

export default Header