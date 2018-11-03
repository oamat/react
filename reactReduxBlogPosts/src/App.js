import './App.css';
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from './initial/Header';
import Home from './initial/Home';
import SignUp from './initial/SignUp';
import Login from './initial/Login';
import Post from './initial/Post';

import AHeader from './Auth/AHeader';
import MyPosts from './Auth/MyPosts';



const App = (props) => {
  console.log("props.loginSession:" + props.loginSession);
  if (props.loginSession != null) {
    return (
      <BrowserRouter>
        <div className='App'>

          <AHeader />
          <Route exact path="/" component={Home} />
          <Route exact path="/post/:id" component={Post} />
          <Route exact path="/:user/posts" component={MyPosts} />
          <h2>LogIn</h2>

        </div>
      </BrowserRouter>
    );
  } else {
    return (
      <BrowserRouter>
        <div className='App'>
          <Header />
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/post/:id" component={Post} />
          <h2>App</h2>
          {}
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => { // Para poder leer las props, hay que añadir en reducers de store la propiedad
  return {
    loginSession: state.loginSession
  }
}

const mapDispatchToProps = (dispatch) => { //Para llamar métodos del store: dispatch, nos da sincronia, nos esperaremos hasta realizar las llamadas. 
  return {
    dispatch1: () => {
      //dispatch(actionCreator); 
    },
    dispatch2: () => {
      //dispatch(actionCreator);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
