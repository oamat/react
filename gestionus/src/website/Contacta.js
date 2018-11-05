import React from 'react';

class Contacta extends React.Component {

    constructor(props) {
        super(props);
        this.state = { warning: '', error: '' };

    }



    reset = () => {
        document.getElementById("contact-form").reset();
        document.getElementById('warn-contact').style.display = 'none';
        this.setState({ warning: '', error: '' });
    }

    submit = (e) => {

        //console.log("Entreamos a submit()" );  // print the form values to the console

        var div_oculto = document.getElementById('warn-contact');
        div_oculto.style.display = 'none';

        var email = document.getElementById('contact-email').value;
        var nombre = document.getElementById('contact-nombre').value;


        e.preventDefault();

        if (!nombre) {
            this.setState({ warning: 'A revisar :', error: 'El nombre es requerido para contactar.' });
            div_oculto.style.display = 'block';
            return;
        } else if (nombre.indexOf("'") != -1) {
            this.setState({ warning: 'A revisar :', error: 'El nombre introducido no es válido. Hay carácteres extraños como comillas u otros.' });
            div_oculto.style.display = 'block';
            return;
        } else if (nombre.length > 30) {
            this.setState({ warning: 'A revisar :', error: 'El nombre debe ser menor que 30 carácteres.' });
            div_oculto.style.display = 'block';
            return;
        }

        if (!email) {
            this.setState({ warning: 'A revisar :', error: 'El mail es requerido para contactar.' });
            div_oculto.style.display = 'block';
            return;
        } else if (email.length > 50) {
            this.setState({ warning: 'A revisar :', error: 'El mail debe ser menor que 50 carácteres.' });
            div_oculto.style.display = 'block';
            return;
        } else if (email.indexOf("'") != -1 || email.indexOf(" ") != -1) {
            this.setState({ warning: 'A revisar :', error: 'El mail introducido no es válido. Hay carácteres extraños como comillas u otros.' });
            div_oculto.style.display = 'block';
            return;
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
            this.setState({ warning: 'A revisar :', error: 'El mail introducido no es válido.' });
            div_oculto.style.display = 'block';
            return;
        }



        this.setState({ warning: 'Nos encontramos en fase de pruebas :', error: 'En breve estaremos operativos. Perdone las molestias.' });
        div_oculto.style.display = 'block';
        //div_oculto.style.display = 'none';
        //this.setState({ warning: '', error: '' });

    }

    render() {
        return (
            <div className='Contacta'>
                <section className="portada-interna portada-inicio">

                    <div className="texto-encabezado text-xs-center">
                        <div className="container">
                            <h1 className="display-4 wow bounceIn">Contacto</h1>
                            <p className="wow bounceIn" data-wow-delay=".3s">Estamos listos para ayudarte</p>
                        </div>
                    </div>

                </section>



                <section className="company-information py-1" id="company-information">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <h2 className="m-b-2">Formulario de contacto</h2><br />
                                <form onSubmit={this.submit} id="contact-form">
                                    <div className="form-group row">
                                        <label className="col-md-4 col-form-label">Nombre :</label>

                                        <div className="col-md-6">
                                            <input className="myinput form-control" type="text" id="contact-nombre" name="contact-nombre" placeholder="Ingrese su nombre" data-toggle="tooltip" data-placement="top"
                                                title="Ingrese su nombre completo" required/>
                                        </div>
                                    </div>


                                    <div className="form-group row">
                                        <label className="col-md-4 col-form-label">Email :</label>

                                        <div className="col-md-6">
                                            <input className="myinput form-control" type="email" id="contact-email" name="contact-email" placeholder="Ingrese su email" data-toggle="tooltip" data-placement="top"
                                                title="Ingrese su email" required />
                                        </div>
                                    </div>


                                    <div className="form-group row">
                                        <label className="col-md-4 col-form-label">Mensaje :</label>

                                        <div className="col-md-6">
                                            <textarea className="myinput form-control" rows="3" id="contact-mensaje" name="contact-mensaje" placeholder="Ingrese su mensaje" data-toggle="tooltip"
                                                data-placement="top" title="Ingrese un mensaje" required></textarea>

                                        </div>
                                    </div>


                                    <div className="form-group row">
                                        <div className="col-md-8 offset-md-4">
                                            <button type="submit" className="btn btn-primary">Enviar</button>
                                            <button type="reset" className="btn btn-primary" onClick={this.reset}>Limpiar</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="col-md-4">
                                <h2 className="m-b-2">¿Por qué contactar?</h2><br />
                                <p>Tu sugerencia o información será analizada minuciosamente para darte la mejor respuesta en el mínimo tiempo.</p>
                                <p>Recibirás un email con nuestra respuesta en breve.</p>
                                <p><strong>Gracias por tu mensaje!</strong></p>
                            </div>
                        </div>
                    </div>
                    <div className="espacio-c">                   
                        <div className="myalert col-md-10" role="alert" id='warn-contact' style={{ display: 'none' }} >
                            <strong> {this.state.warning} </strong> {this.state.error}
                        </div>
                    </div>
                </section>

            </div>
        );
    }
}
export default Contacta;