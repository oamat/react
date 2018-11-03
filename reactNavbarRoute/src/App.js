import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';

import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Home from './views/Home'
import Bio from './views/Bio'
import Description from './views/Description'
import ContactUs from './views/ContactUs'

class App extends Component {
  
  render() {
    console.log("render App");
    return (
      <BrowserRouter>
        <div>
          <NavBar/>
          <Route exact path="/" component={Home}/>
          <Route path="/bio" component={Bio}/>
          <Route path="/description" component={Description}/>
          <Route path="/contact-us" component={ContactUs}/>
          <Footer/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
