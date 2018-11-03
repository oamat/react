import React from 'react';
import {Route, Link, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import Home from '../initial/Home';
import SignUp from '../initial/SignUp';
import Login from '../initial/Login';
import Post from '../initial/Post';


const AHeader = (props) => {
    return (
        <div className='AHeader'>
         <nav>
            USUARIO AUTENTICADO : 
            <Link to='/'> Home   </Link> 
            <Link to={`/${props.loginSession.id}/posts`}> Mis Posts</Link> 
            <Link to='/logout' onClick={props.logout}> Logout  </Link> 
         </nav>
        </div>
    );
}

const mapStateToProps = (state) => { // Para poder leer las props, hay que añadir en reducers de store la propiedad
    return {
        loginSession: state.loginSession
    }
}

const mapDispatchToProps = (dispatch) => { //Para llamar métodos del store: dispatch, nos da sincronia, nos esperaremos hasta realizar las llamadas. 
    return {
        logout: () => {
            dispatch({type:"LOGOUT"}); 
        },
        dispatch2: () => {
            //dispatch(actionCreator);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AHeader);