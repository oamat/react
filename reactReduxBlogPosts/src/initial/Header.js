import React from 'react';
import {Route, Link, Switch } from 'react-router-dom';
import Home from './Home';
import SignUp from './SignUp';
import Login from './Login';
import Post from './Post';


const Header = () => {
    return (
        <div className='Header'>
         <nav>
            <Link to='/'> Home   </Link> 
            <Link to='/signup'> Sign Up </Link> 
            <Link to='/login'> Login   </Link>     
         </nav>
        </div>
    );
}

export default Header;