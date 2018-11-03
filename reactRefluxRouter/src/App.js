import React, { Component } from 'react';
import './App.css';

import {  Route, BrowserRouter} from 'react-router-dom'

import Home from './views/Home'
import Login from './views/Login'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Login}/>
          <Route path="/home" component={Home}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
