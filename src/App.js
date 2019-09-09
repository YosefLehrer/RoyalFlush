import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
import Bathrooms from './containers/Bathrooms';
// import { stat } from 'fs';
const defaultUserForm = {username: "", password: ""}

class App extends React.Component{
  state = {
    userForm: defaultUserForm,
    currentUser: ""
  }

  componentDidMount(){
    this.autoLogin()
  }

  autoLogin = () => {
    const token = localStorage.getItem('token')
    if (token){
      fetch(`http://localhost:3001/autologin`, {
        headers: {
          'accept': 'application/json', 
          Authorization: token
        }
      })
        .then(response => response.json())
        .then(data => {
          if (data.errors){
            console.log("sup Ben this is an error message:", data.errors)
          } else {
            this.setState({currentUser: data})
          }
        })        
    } else {
      this.setState({
        currentUser: ""
      })
    }
  }
  userHandleChange = (event) => {
    const {name, value} = event.target
    this.setState({
        userForm: {
            ...this.state.userForm, [name]: value
        }
    })
  }

  handleSubmit = (event, route) => {
    event.preventDefault()
    fetch(`http://localhost:3001/login`,
    {
        method: "POST",
        headers: {
            "accept": 'application/json',
            "content-type": 'application/json'
        },
        body: JSON.stringify(route === "signup" ? this.state.userForm : this.state.providerForm)
    })
    .then(resp => resp.json())
    .then(json => {
      localStorage.setItem('token', json.token)
      this.autoLogin()
    })
  }

  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} userHandleChange={this.userHandleChange} handleSubmit={this.handleSubmit} userForm={this.state.userForm} autoLogin={this.autoLogin}/>
        <LandingPage />
        { this.state.currentUser ? <Bathrooms /> : <p> Please sign in to poop</p>}
        <Footer />
    </div>
  );
  }
}

export default App;
