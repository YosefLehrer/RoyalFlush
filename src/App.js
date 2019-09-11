import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom'
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
    providerForm: defaultProviderForm,
    userDuties: [],
    latitude: localStorage.getItem('latitude'),
    longitude: localStorage.getItem('longitude')
  }


  componentDidMount(){
    navigator.geolocation.getCurrentPosition((pos) => {
      const usersLocation = pos.coords
      const {latitude, longitude} = usersLocation
      this.setState({latitude: latitude, longitude: longitude})
      localStorage.setItem('latitude', latitude)
      localStorage.setItem('longitude', longitude)
    })
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
          } else {
            this.setState({currentUser: data.user, userDuties: data.user_duties})
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
    }else{
      fetch(`http://localhost:3001/locations`, {
        method: 'POST',
        headers: {
          'accept': 'application/json',
          'content-type': 'application/json'
        },
        body: JSON.stringify(this.state.providerForm)
      })
      .then(resp => resp.json())
      .then(data => {
        this.setState({ providerForm: defaultProviderForm})
        this.props.history.push('/bathrooms')
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

  handlePromptSubmission = (dutyName) => {
    if(!this.state.userDuties.includes(dutyName)){
      this.setState({
        userDuties: [dutyName, ...this.state.userDuties]
      })
    } else {
      let filteredDuties = this.state.userDuties.filter(duty => duty !== dutyName)
      this.setState({
        userDuties: [dutyName, ...filteredDuties]
      })
    }
  }

  render() {
    return (
      <div className="App">
        <Header history={this.props.history} currentUser={this.state.currentUser} userHandleChange={this.userHandleChange} handleLogin={this.handleLogin} userForm={this.state.userForm} autoLogin={this.autoLogin}/>
        <Switch>
          <Route path="/bathrooms" render={() => <Bathrooms handlePromptSubmission={this.handlePromptSubmission} userDuties={this.state.userDuties} latitude={this.state.latitude} longitude={this.state.longitude} />} />
          <Route path="/providersignup" render={() => <ProviderSignupForm providerForm={this.state.providerForm} providerHandleChange={this.providerHandleChange} providerSubmit={this.providerSubmit} />} />
          <Route path="/" render={() => <LandingPage autoLogin={this.autoLogin} />} />
        </Switch>
        <Footer latitude={this.state.latitude} longitude={this.state.longitude} />
    </div>
  );
  }
}

export default withRouter(App);
