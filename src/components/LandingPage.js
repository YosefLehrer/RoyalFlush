import React from 'react'
// import ProviderSignupForm from './ProviderSignUpForm'
// import { stat } from 'fs'
import UserSignupForm from './UserSignupForm'
const defaultUserForm = {username: "", password: ""}
class LandingPage extends React.Component{
    state = {
        userForm: defaultUserForm,
    }

    
    userHandleChange = (event) => {
        const {name, value} = event.target
        this.setState({
            userForm: {
                ...this.state.userForm, [name]: value
            }
        })
    }

    handleSignup = (event) => {
        event.preventDefault()
        fetch(`http://localhost:3001/signup`,
        {
            method: "POST",
            headers: {
                "accept": 'application/json',
                "content-type": 'application/json'
            },
            body: JSON.stringify(this.state.userForm)
        })
        .then(resp => resp.json())
        .then(json => {
            localStorage.setItem('token', json.token)
            this.props.autoLogin()
            this.setState({
                userForm: defaultUserForm
            })
        })
    }

    render(){
        return (
        <div className="landing-page">
            <div className="about-us">
                <h2>just some bs</h2>
                <p>have you ever had an emergency that ruined a family trip, missed a super important lunch meeting..... We are here for you.</p>
            </div>
            <UserSignupForm handleChange={this.userHandleChange} userForm={this.state.userForm} handleSignup={this.handleSignup}/>
        </div>
        )
    }
}

export default LandingPage