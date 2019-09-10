import React from 'react';
import { Route, Switch, Link, withRouter } from 'react-router-dom'
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
import Bathrooms from './containers/Bathrooms';
import ProviderSignupForm from './components/ProviderSignUpForm';
const defaultProviderForm = {name: "", address: "", capacity: 1, price: 0, image: ""}
const defaultUserForm = {username: "", password: ""}

class App extends React.Component{
  state = {
    userForm: defaultUserForm,
    currentUser: "",
    providerForm: defaultProviderForm
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
            this.props.history.push('/bathrooms')
          }
        })        
    } else {
      this.setState({
        currentUser: ""
      })
      this.props.history.push('/')
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

  providerHandleChange = (event) => {
    const {name, value} = event.target
    this.setState({
        providerForm:{
            ...this.state.providerForm, [name]: value
        }
    })
  }

  providerSubmit = (event) => {
    event.preventDefault()
    if(!this.state.providerForm.name || !this.state.providerForm.address || !this.state.providerForm.capacity || !this.state.providerForm.price || !this.state.providerForm.image){
      console.log("you dumb shit")
    }else{
      fetch(`http://localhost:3001/locations`, {
        method: 'POST',
        headers: {
          'accept': 'application/json',
          'content-type': 'application/json'
        },
        body: JSON.stringify(this.state.providerForm)
      })
    }
  }

  handleLogin = (event, route) => {
    event.preventDefault()
    fetch(`http://localhost:3001/login`,
    {
        method: "POST",
        headers: {
            "accept": 'application/json',
            "content-type": 'application/json'
        },
        body: JSON.stringify(route === "login" ? this.state.userForm : this.state.providerForm)
    })
    .then(resp => resp.json())
    .then(json => {
      localStorage.setItem('token', json.token)
      this.autoLogin()
      this.setState({userForm: defaultUserForm})
    })
  }

  render() {
    return (
      <div className="App">
        <Header history={this.props.history} currentUser={this.state.currentUser} userHandleChange={this.userHandleChange} handleLogin={this.handleLogin} userForm={this.state.userForm} autoLogin={this.autoLogin}/>
        <Switch>
          <Route path="/bathrooms" component={Bathrooms} />
          <Route path="/providersignup" render={() => <ProviderSignupForm providerForm={this.state.providerForm} providerHandleChange={this.providerHandleChange} providerSubmit={this.providerSubmit} />} />
          <Route path="/" render={() => <LandingPage autoLogin={this.autoLogin} />} />
        </Switch>
        {/* { this.state.currentUser ? <Bathrooms /> : <p> Please sign in to poop</p>} */}
        <Footer />
    </div>
  );
  }
}

export default withRouter(App);
