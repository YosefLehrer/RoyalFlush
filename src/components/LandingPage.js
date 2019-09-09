import React from 'react'
// import ProviderSignupForm from './ProviderSignUpForm'
// import { stat } from 'fs'
import UserSignupForm from './UserSignupForm'
const defaultUserForm = {username: "", password: ""}
const defaultProviderForm = {name: "", address: "", capacity: 1, price: 0, image: ""}
class LandingPage extends React.Component{
    state = {
        userForm: defaultUserForm,
        providerForm: defaultProviderForm
    }

    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({
            providerForm:{
                ...this.state.providerForm, [name]: value
            }
        })
    }
    userHandleChange = (event) => {
        const {name, value} = event.target
        this.setState({
            userForm: {
                ...this.state.userForm, [name]: value
            }
        })
    }

    // handleSubmit = (event, route) => {
    //     event.preventDefault()
    //     fetch(`http://localhost:3001/${route}`,
    //     {
    //         method: "POST",
    //         headers: {
    //             "accept": 'application/json',
    //             "content-type": 'application/json'
    //         },
    //         body: JSON.stringify(route === "signup" ? this.state.userForm : this.state.providerForm)
    //     })
    //     .then(resp => resp)
    //     .then(json => console.log(json))
    // }

    render(){
        return (
        <div className="landing-page">
            <div className="about-us">
                <h2>just some bs</h2>
                <p>have you ever had an emergency that ruined a family trip, missed a super important lunch meeting..... We are here for you.</p>
            </div>
            {/* <ProviderSignupForm handleChange={this.handleChange} providerForm={this.state.providerForm} handleSubmit={this.handleSubmit}/> */}
            <UserSignupForm handleChange={this.userHandleChange} userForm={this.state.userForm} handleSubmit={this.handleSubmit}/>
        </div>
        )
    }
}

export default LandingPage