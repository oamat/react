import React from 'react';

class Funciona extends React.Component {
    render() {
        return (
            <div className='Funciona'>
                <section className="portada-interna portada-inicio">
                    <div className="texto-encabezado text-xs-center">
                        <div className="container">
                            <h1 className="display-4 wow bounceIn">Así de fácil!</h1>
                            <p className="wow bounceIn" data-wow-delay=".3s">Sencillo y perfecto para ti</p>

                        </div>
                    </div>

                </section>


                <section className="company-funciona py-1" id="company-information">
                    <div className="container">
                        <br/><br/>
                        <div className="row">
                            <div className="col-md-4 wow bounceIn" data-wow-delay=".3s">
                                <img src="images/signup.svg" alt="" />
                                <br/><h2 className="texto-funciona">1.Regístrate.</h2>
                               
                            </div>
                            <div className="col-md-4 wow bounceIn" data-wow-delay=".9s">
                                <img src="images/client.svg" alt="" />
                                <br/><h2 className="texto-funciona">2.Crea clientes y productos.</h2>
                                
                            </div>
                            <div className="col-md-4 wow bounceIn" data-wow-delay="1s">
                                <img src="images/ticket.svg" alt="" />
                                <br/><h2 className="texto-funciona">3.Genera tickets, facturas y listados.</h2>
                                <div className="espacio-f"></div>
                            </div>
                        </div>
                       
                    </div>
                </section>


            </div>
        );
    }
}
export default Funciona;