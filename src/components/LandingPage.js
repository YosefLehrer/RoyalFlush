import React from 'react'
import ProviderSignupForm from './ProviderSignUpForm'
import { stat } from 'fs'
const defaultUserForm = {username: ""}
const defaultProviderForm = {name: "", address: "", capacity: 1, price: 0, image: null}
class LandingPage extends React.Component{
    state = {
        userForm: defaultUserForm,
        providerForm: defaultProviderForm
    }

    handleChange = (event) => {
        // console.log(event.target.value)
        const {name, value} = event.target
        this.setState({
            providerForm:{
                ...this.state.providerForm, [name]: value
            }
        })
    }
    handleSubmit = (event) => {
        event.preventDefault()
        console.log(this.state)
    }
    render(){
        return (
            <div className="landing-page">
            <div className="about-us">
                <h2>just some bs</h2>
                <p>have you ever had an emergency that ruined a family trip, missed a super important lunch meeting..... We are here for you.</p>
            </div>
            <ProviderSignupForm handleChange={this.handleChange} providerForm={this.state.providerForm} handleSubmit={this.handleSubmit}/>
            {/* <form className="signup-form">
                <input onChange={console.log} name="username" type="text" placeholder="Fullname" value={this.props.SOMETHING} />
                <br/>
                <label>Upload a profile picture</label>
                <input onChange={console.log} name="image" type="file" value={this.props.SOMETHING} />
            </form> */}
        </div>
        )
    }
}

export default LandingPage