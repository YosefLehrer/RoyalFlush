import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
import Bathrooms from './containers/Bathrooms';

class App extends React.Component{

  render() {
    return (
      <div className="App">
        <Header />
        <LandingPage />
        <Bathrooms /> 
        <Footer />
    </div>
  );
  }
}

export default App;
