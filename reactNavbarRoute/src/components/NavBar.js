import React, { Component } from 'react';
import {BrowserRouter, Route, Link,  withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../styles/NavBar.css';


class NavBar extends Component {
 
// ir(){ 
 // this.props.history.push("otroindex.html");
//}
 
  render(){
    console.log("render NavBar");
    const { match, location, history } = this.props;
    console.log(match);
    console.log(location);
    console.log(history);
    console.log(location.pathname);

    return(
      <div className="container-fluid">
       <div className="row">
         <nav className="navbar navbar-default navbar-fixed-side-left">
           <div className="navbar-header">
            <button type="button" className="pull-left navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
              <span className="sr-only">Desplegar navegacion</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <div className="navbar-logobox">
              <a href="/">
                <img className="navbar-logo" src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" alt="Logo"/>
              </a>
            </div>
           </div>
           <div className="navbar-collapse collapse">
            <ul className="nav navbar-nav">
              <li className="navbar-listitem"><Link to="/">Home</Link></li>
              <li className="navbar-listitem"><Link to="/bio">Bio</Link></li>
              <li className="navbar-listitem"><Link to="/description">Description</Link></li>
              <li className="navbar-listitem"><Link to="/otroindex.html">Otra página indice</Link></li>

            </ul>
           </div>
         </nav>
       </div>  
      </div>
    );
  }


 static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }

}




export default withRouter(NavBar);
