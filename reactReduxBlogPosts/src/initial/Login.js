import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';


import LoginForm from './LoginForm.js';

class Login extends React.Component {

    funcProps = () => {
        console.log("ownProps: ");
        console.log(this.props.ownProps);
    }

    submit = (values) => {
        console.log(values);  // print the form values to the console
        var self = this;
        axios.post('https://blog-api-u.herokuapp.com/v1/login', {
            login: {
                email: values.email,
                password: values.password
            }
        })
            .then(function (response) {
                console.log(response);
                self.props.login(response.data);
                console.log("Login Accepted! OK");
                //self.props.history.push('/index.login.html'); 
            })
            .catch(function (error) {
                console.log(error);
                self.props.errorLogin();

            })
    }

    render() {
        return (
            <div className='Login'>
                <h2>Login</h2>
                <LoginForm onSubmit={this.submit} />
                {this.props.userStatus.mensaje}
                {console.log(this.props)}
                { /*window.location = "index.html" //podemos redireccionar pero hay maneras mejores */}
                {this.funcProps()}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => { // hay que añadir en reducers de store la propiedad
    return {
        userStatus: state.userStatus, // este reducer ya se añadió en signup, lo reaprovechamos
        ownProps: ownProps
    }
}

const mapDispatchToProps = (dispatch) => { //hacer las llamadas aquí nos da sincronia, nos esperaremos hasta realizar las llamadas. 
    return {
        login: (values) => {
            dispatch({ type: 'LOGIN', data: values });
        },
        errorLogin: () => {
            dispatch({ type: 'USER_ERROR' });  // este es un dispatch que diseñamos para signup pero nos sirve para Login, lo podemos reaprovechar 
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
//export default Login;




// I Wanted to update this thread because I spent a good amount of time digging around on this. In React Router 2.0.x, replaceState is deprecated in favor of replace. See here for details: 
//https://github.com/ReactTraining/react-router/blob/v2.0.0/upgrade-guides/v2.0.0.md#link-to-onenter-and-isactive-use-location-descriptors

// The correct way to do this would be something like this:

// function requireAuth(nextState, replace) {
//   if (!userExists()) {
//     replace({
//       pathname: '/signin',
//       state: { nextPathname: nextState.location.pathname }
//     })
//   }
// }

// export const renderRoutes = () => (
//   <Router history={browserHistory}>
//       <Route path="protectedRoute" component={Protected} onEnter={requireAuth} />
//       <Route path="signin" component={SignIn} />
//     </Route>
//   </Router>
// );
// Then, in the SignIn component, you can redirect after a successful sign in like this:

// signInFunction({params}, (err, res) => {
//   // Now in the sign in callback
//   if (err)
//     alert("Please try again")
//   else {
//     const location = this.props.location
//     if (location.state && location.state.nextPathname) {
//       browserHistory.push(location.state.nextPathname)
//     } else {
//       browserHistory.push('/')
//     }
//   }
// })