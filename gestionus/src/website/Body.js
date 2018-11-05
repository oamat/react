import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import Portada from './Portada.js';
import Funciona from './Funciona.js';
import Nosotros from './Nosotros.js';
import Registro from './Registro.js';
import Contacta from './Contacta.js';


class Body extends React.Component {


    getBody() {
        console.log("Body getBody");        
        const key = this.props.location.pathname;

        switch (key) {
            case "/funciona":
            return (
                <Funciona />
            );

            case "/nosotros":
                return (
                    <Nosotros />
                );

              
            case "/registro":
                return (
                    <Registro />
                );

              
            case "/contacta":
                return (
                    <Contacta />
                );

             
            default:
                return (
                    <Portada />
                );
             
        }

    };

    render() {
        console.log("render Body");
        return (
            <div className='Body'>
                {this.getBody()}
            </div>
        );
    }

    static propTypes = {       
        location: PropTypes.object.isRequired      
    }
}
export default withRouter(Body);