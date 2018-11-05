import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import LoginForm from './LoginForm';


class Header extends React.Component {

    getLinks() {
        console.log("Header getLinks");        
        const key = this.props.location.pathname;       
        switch (key) {
            case "/funciona":
            return (
                <ul>
                    <li><Link to='/' > Portada </Link> </li>
                    <li className="active"><Link to='/funciona' > Como funciona? </Link></li>
                    <li><Link to='/nosotros' > Nosotros</Link></li>
                    <li><Link to='/registro' >Regístrate</Link></li>
                    <li><Link to='/contacta' > Contacta </Link></li>
                </ul>);

            case "/nosotros":
                return (
                    <ul>
                        <li><Link to='/' > Portada </Link> </li>
                        <li><Link to='/funciona' > Como funciona? </Link></li>
                        <li className="active"><Link to='/nosotros' > Nosotros</Link></li>
                        <li><Link to='/registro' >Regístrate</Link></li>
                        <li><Link to='/contacta' > Contacta </Link></li>
                    </ul>);

              
            case "/registro":
                return (
                    <ul>
                        <li><Link to='/' > Portada </Link> </li>
                        <li><Link to='/funciona' > Como funciona? </Link></li>
                        <li><Link to='/nosotros' > Nosotros</Link></li>
                        <li className="active"><Link to='/registro' >Regístrate</Link></li>
                        <li><Link to='/contacta' > Contacta </Link></li>
                    </ul>);

              
            case "/contacta":
                return (
                    <ul>
                        <li><Link to='/'> Portada </Link> </li>
                        <li><Link to='/funciona' > Como funciona? </Link></li>
                        <li><Link to='/nosotros' > Nosotros</Link></li>
                        <li><Link to='/registro' >Regístrate</Link></li>
                        <li className="active"><Link to='/contacta' > Contacta </Link></li>
                    </ul>);

             
            default:
                return (
                    <ul>
                        <li className="active"><Link to='/' > Portada </Link> </li>
                        <li><Link to='/funciona' > Como funciona? </Link></li>
                        <li><Link to='/nosotros' > Nosotros</Link></li>
                        <li><Link to='/registro' >Regístrate</Link></li>
                        <li><Link to='/contacta' > Contacta </Link></li>
                    </ul>);
             
        }

    };


    render() {
        console.log("render Header");
        return (
            <div className='Header' id="Header">
                <header className="encabezado navbar-fixed-top" role="banner" id="encabezado">
                    <div className="container">
                        <a href="index.html" className="logo">
                            <img src="images/gestionus-white.svg" alt="" />
                        </a>
                        <h3 className="textColorLogo">Gestionus</h3>

                        <button type="button" className="boton-buscar" data-toggle="collapse" data-target="#bloque-buscar" aria-expanded="false">
                            <i className="fa fa-sign-in" aria-hidden="true"></i>
                        </button>
                        <button type="button" className="boton-menu hidden-md-up" data-toggle="collapse" data-target="#menu-principal" aria-expanded="false">
                            <i className="fa fa-bars" aria-hidden="true"></i></button>

                                <LoginForm/>

                        <nav id="menu-principal" className="collapse">
                            {this.getLinks()}
                        </nav>

                    </div>
                </header>
            </div>
        );
    }

    static propTypes = {       
        location: PropTypes.object.isRequired      
    }
}

export default withRouter(Header);