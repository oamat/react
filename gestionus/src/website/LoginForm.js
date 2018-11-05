import React from 'react';
import { connect } from 'react-redux';
import * as firebase from 'firebase';
import firebaseInit from '../data/firebaseInit';




class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { warning: '', error: '' };

    }


    submit = (e) => {
        console.log("Entreamos a submit()");  // print the form values to the console
        
        var div_oculto = document.getElementById('warn-login');
        div_oculto.style.display = 'none';

        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;
      

        e.preventDefault();

        if (!email) {
            this.setState({ warning: 'A revisar :', error: 'El mail es requerido para registrarse.' });
            div_oculto.style.display = 'block';
            return;
        } else if (email.length > 50) {
            this.setState({ warning: 'A revisar :', error: 'El mail debe ser menor que 50 carácteres.' });
            div_oculto.style.display = 'block';
            return;
        } else if (  email.indexOf("'") != -1 || email.indexOf(" ") != -1 ) {
            this.setState({ warning: 'A revisar :', error: 'El mail introducido no es válido. Hay carácteres extraños como comillas u otros.' });
            div_oculto.style.display = 'block';
            return;
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
            this.setState({ warning: 'A revisar :', error: 'El mail introducido no es válido.' });
            div_oculto.style.display = 'block';
            return;
        }

        if (!password) {
            this.setState({ warning: 'A revisar :', error: 'El password es requerido para registrarse.' });
            div_oculto.style.display = 'block';
            return;
        } else if (password.indexOf("'") != -1 || password.indexOf(" ") != -1 ) {
            this.setState({ warning: 'A revisar :', error: 'El password introducido no es válido. Hay carácteres extraños como comillas u otros.' });
            div_oculto.style.display = 'block';
            return;
        } else if (password.length > 20) {
            this.setState({ warning: 'A revisar :', error: 'El password debe ser menor que 20 carácteres.' });
            div_oculto.style.display = 'block';
            return;
        }


        let self = this;
      
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(function (response) {
                console.log("Login Accepted! OK");
                var user = firebase.auth().currentUser;
                console.log(user)
                console.log("displayName: " + user.displayName);
                console.log("email: " + user.email);
                console.log("uid: " + user.uid);
                console.log("Token: " + user.getIdToken());
                if (user != null) {
                    user.providerData.forEach(function (profile) {
                        console.log("Sign-in provider: " + profile.providerId);
                        console.log("  Provider-specific UID: " + profile.uid);
                        console.log("  Name: " + profile.displayName);
                        console.log("  Email: " + profile.email);
                        console.log("  Photo URL: " + profile.photoURL);
                    });
                }
            })
            .catch(function (error) {        
                self.setState({ warning: 'Error :', error: error.message });
                div_oculto.style.display = 'block';
            });

            

    }


    render() {
        console.log("render LoginForm");
        return (
            <div className='LoginForm' id="login-form">
                <form id="bloque-buscar" className="collapse" onSubmit={this.submit} >
                    <div className="contenedor-bloque-buscar">
                        <input type="email" name="email" placeholder="email..." id="email" required />
                    </div>
                    <div className="contenedor-bloque-buscar">
                        <input type="password" name="password" placeholder="password..." id="password" required />
                        <input type="submit" value="Entrar" />                      
                    </div>
                    <div className="myalert-pass col-md-10" role="alert" id='warn-login' style={{display: 'none'}} >
                            <strong> {this.state.warning} </strong> {this.state.error} 
                    </div>
                </form>
            </div>
        );
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
            dispatch({ type: 'USER_ERROR' });  // este es un dispatch cuando hay error 
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);