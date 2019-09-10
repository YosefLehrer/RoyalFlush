import React from 'react'
import UserLogin from './UserLogin'
import {Link} from 'react-router-dom'


const Header = (props) => {
    return (
        <div>
            <div className="navbar-header">
                <div className="logo">
                    <img id="logo-img" src='https://www.charlotteplumbing.com/wp-content/uploads/2018/01/toilet-icon-full.png' alt="" onClick={localStorage.token ? () => props.history.push('/bathrooms') : null}/>
                </div>
                <div className="">Maybe a search</div>
                {localStorage.getItem('token') ? <Link to='/providersignup'>Sign up as a Provider</Link> : <div></div>}
                {props.currentUser ? <button onClick={() => {
                    localStorage.removeItem('token')
                    props.autoLogin()
                    }}>Logout</button> :  <UserLogin handleChange={props.userHandleChange} userForm={props.userForm} handleLogin={props.handleLogin}/>}
                {/* <div className="sign-in-username">Sign in username</div>
                <div className="sign-in-password">Sign in password</div>
                <div className="sign-in-button">Sign in button</div> */}
            </div>
        </div>
    )
}

export default Header