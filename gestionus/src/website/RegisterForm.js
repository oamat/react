import React from 'react';
import ReactDOM from 'react-dom';


class Registerform extends React.Component {

    constructor(props) {
        super(props);
        this.state = { warning: '', error: '' };

    }


    
    reset = () => {  
        document.getElementById("register-form").reset();
        document.getElementById('warn-register').style.display = 'none';
        this.setState({ warning: '', error: '' });
    }

    submit = (e) => {     
       
        //console.log("Entreamos a submit()" );  // print the form values to the console
        
        var div_oculto = document.getElementById('warn-register');
        div_oculto.style.display = 'none';

        var email = document.getElementById('register-email').value;
        var password = document.getElementById('register-password').value;
        var password_confirm = document.getElementById('register-password_confirm').value;
      
        e.preventDefault();
        if (!email) {
            this.setState({ warning: 'A revisar :', error: 'El mail es requerido para registrarse.' });
            div_oculto.style.display = 'block';
            return;
        } else if (email.length > 50) {
            this.setState({ warning: 'A revisar :', error: 'El mail debe ser menor que 50 carácteres.' });
            div_oculto.style.display = 'block';
            return;
        } else if (email.indexOf("'") != -1 || email.indexOf(" ") != -1 ) {
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

        if (!password_confirm) {
            this.setState({ warning: 'A revisar :', error: 'Repetir el password es imprescindible para registrarse.' });
            div_oculto.style.display = 'block';
            return;            
        } else if (password_confirm !== password) {
            this.setState({ warning: 'A revisar :', error: 'Los passwords introducidos no coinciden.' });
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
            <div className='Registerform'>
                <form onSubmit={this.submit} id="register-form">

                    <div className="form-group row">
                        <label className="col-md-4 col-form-label">Email : </label>
                        <div className="col-md-6">
                            <input type="email" className="myinput form-control" id="register-email" name="register-email" placeholder="Ingrese su email..." required />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-md-4 col-form-label"  >Nuevo Password : </label>
                        <div className="col-md-6">
                            <input  type="password" className="myinput form-control"  id="register-password" name="register-password" placeholder="Ingrese su password..." required />
                        </div>
                        <br />
                        <label className="col-md-4 col-form-label">Repita Password : </label>
                        <div className="col-md-4">
                            <input type="password" className="myinput form-control"  id="register-password_confirm" name="register-password_confirm" placeholder="Repita password..." required />
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-md-8 offset-md-4">
                            <button type="submit" className="btn btn-primary">Siguiente</button>
                            <button type="reset" className="btn btn-primary" onClick={this.reset}>Limpiar</button>                                                       
                        </div>
                    </div>
                    <div className="espacio-r">
                        <div className="myalert col-md-10" role="alert" id='warn-register' style={{display: 'none'}} >
                            <strong> {this.state.warning} </strong> {this.state.error} 
                        </div>
                    </div>                  

                  
                </form>
            </div>
        );
    }
}
export default Registerform;