import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import SignUpFormSimple from './SignUpFormSimple';
import SignUpFormValidation from './SignUpFormValidation';
import SignUpFormValidationFinal from './SignUpFormValidationFinal';



class SignUp extends React.Component {

    submitFinal = (values) => {
        console.log(values)  // print the form values to the console
        var self = this;
        axios.post('https://blog-api-u.herokuapp.com/users/', {
            user: {
                name: values.username,
                email: values.email,
                password: values.password,
                password_confirmation: values.password_confirm
            }
        })
            .then(function (response) {
                console.log(response);
                self.props.success();
            })
            .catch(function (error) {
                console.log(error);
                self.props.error();
            })
    }



    submitValidation = (values) => {
        console.log(values)  // print the form values to the console
    }

    submitSimple = (values) => {
        console.log(values)  // print the form values to the console
    }

    render() {
        return (
            <div className='SignUp'>
                <h2>SignUp simple</h2>
                <SignUpFormSimple onSubmit={this.submitSimple} />
                <br /><br />
                <h2>SignUp Validation</h2>
                <SignUpFormValidation onSubmit={this.submitValidation} />
                <br /><br />
                <h2>SignUp Validation Final</h2>
                <SignUpFormValidationFinal onSubmit={this.submitFinal} />
                {this.props.userStatus.mensaje}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userStatus: state.userStatus // hay que añadir en reducers de store la propiedad
    }
}

const mapDispatchToProps = (dispatch) => { //hacer las llamadas aquí nos da sincronia, nos esperaremos hasta realizar las llamadas. 
    return {
        success: () => {
            dispatch({ type: 'USER_CREATED' });
            //dispatch( reset('SignUpFormValidationFinal') );
        },
        error: () => {
            dispatch({ type: 'USER_ERROR' });
        }
    }
}

//export default SignUp;
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);


