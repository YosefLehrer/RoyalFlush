import React from 'react'

const Header = () => {
    return (
        <div>
            <div className="navbar-header">

                <div className="logo">
                    <img id="logo-img" src='https://www.charlotteplumbing.com/wp-content/uploads/2018/01/toilet-icon-full.png' alt=""/>
                </div>
                <div className="">Maybe a search</div>
                <div className="">Sign up as a Provider</div>
                <div className="sign-in-username">Sign in username</div>
                <div className="sign-in-password">Sign in password</div>
                <div className="sign-in-button">Sign in button</div>
            </div>
        </div>
    )
}

export default Header