import React from 'react';

import RegisterForm from './RegisterForm';

class Registro extends React.Component {
    render() {
        return (
            <div className='Registro'>
                <section className="portada-interna portada-inicio">
                    <div className="texto-encabezado text-xs-center">
                        <div className="container">
                            <h1 className="display-4 wow bounceIn">Registrate en Gestionus</h1>
                            <p className="wow bounceIn" data-wow-delay=".3s">Abraza la libertad</p>
                        </div>
                    </div>

                </section>



                <section className="company-information py-1" id="company-information">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <h2 className="m-b-2">Formulario de registro</h2><br />
                                <RegisterForm />
                            </div>
                            <div className="col-md-4">
                                <h2 className="m-b-2">¿Te surgen dudas? </h2><br />
                                <p><strong>Seguridad garantizada </strong> mediante protocolo seguro SSL con certificado oficial.</p>
                                <p>Recibirás un email de confirmación, para validar tu identidad.</p>
                                <p>El nombre de usuario y password debe ser una sola palabra, puedes usar - para unir palabras.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}
export default Registro;