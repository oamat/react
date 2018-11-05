import React from 'react';

class Portada extends React.Component {
    render() {
        return (
            <div className='Portada'>
                <section className="portada-inicio" id="portada-inicio">
                    <div className="texto-encabezado text-xs-center">
                        <div className="container">
                            <h1 className="display-4 wow bounceIn">Solución ERP para Autónomos</h1>
                            <h3 className="display-5 wow bounceIn"> Feel Free!! SIN licencias, SIN cuotas</h3>
                            <p className="wow bounceIn" data-wow-delay=".3s">Podrás gestionar tus clientes, productos y facturas de forma fácil.</p>
                            <a href="registro.html" className="btn btn-primary btn-lg">Regístrate en Gestionus</a>
                        </div>
                    </div>

                    <div className="flecha-bajar text-xs-center" >
                        <a data-scroll href="#company-portada"><i className="fa fa-angle-down" aria-hidden="true"></i></a>
                    </div>

                </section>


                <section className="company-portada py-1" id="company-portada" >
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 col-xl-9 wow bounceIn" data-wow-delay=".3s">
                                <br/>
                                <h2 className="h3 text-xs-center text-md-left font-weight-bold">¿Que es Gestionus?</h2>
                                <p><br/>Gestionus te permite realizar la gestión comercial des de cualquier lugar y dispositivo. Podrás gestionar
                        los recursos de tu negocio tales como clientes, productos, facturación, stocks, ...</p>
                                <p>Ponemos a tu alcance un servicio adaptado a las necesidades de tu negocio con
                        una metodología ágil y usable avaladas por nuestros años de experiencia.<br/></p>

                            </div>
                            <div className="hidden-md-down col-md-4 col-xl-3 wow bounceInRight" data-wow-delay=".6s">
                                <br/><img src="images/gestionus-white.svg" alt="" />
                            </div>
                        </div>
                    </div>

                </section>


                <section className="tu-mejor-eleccion py-1">
                    <div className="container">
                        <br/><br/>
                        <h2 className="h3 text-xs-center font-weight-bold">¿Porque somos <span>tu mejor elección?</span></h2>
                        <p className="text-xs-center">
                            Solución ERP gratuita para autónomos y pymes.
            </p>

                        <div className="row">
                            <ul className="col-xs-6 col-lg-4 text-xs-center text-lg-left">
                                <li className="wow zoomIn" data-wow-duration=".3s" data-wow-delay=".3s">

                                    <i className="fa  fa-check-square-o" aria-hidden="true"></i>

                                    <div className="contenedor-eleccion">
                                        <h4>Feel Free!!</h4>
                                        <p className="hidden-md-down"> SIN licencias, SIN cuotas, por que sabemos lo duro que es.</p>
                                    </div>
                                </li>

                                <li className="wow zoomIn" data-wow-duration=".3s" data-wow-delay=".7s">
                                    <i className="fa fa-tablet" aria-hidden="true"></i>

                                    <div className="contenedor-eleccion">
                                        <h4>AnyTime, AnyWhere, AnyHow</h4>
                                        <p className="hidden-md-down">En cualquier momento, des de cualquier sitio, y con el dispositivo que prefieras.</p>
                                    </div>
                                </li>
                                <li className="wow zoomIn" data-wow-duration=".3s" data-wow-delay="1.1s">
                                    <i className="fa fa-refresh" aria-hidden="true"></i>
                                    <div className="contenedor-eleccion">
                                        <h4>Mejora continua</h4>
                                        <p className="hidden-md-down">Servicios de mejora correctiva y evolutiva constante.</p>
                                    </div>
                                </li>

                            </ul>

                            <div className="hidden-md-down col-lg-4">
                                <img src="images/mundo.svg" alt="" />
                            </div>

                            <ul className="col-xs-6 col-lg-4 text-xs-center text-lg-right">
                                <li className="wow zoomIn" data-wow-duration=".3s" data-wow-delay=".5s">
                                    <i className="fa  fa-cloud" aria-hidden="true"></i>
                                    <div className="contenedor-eleccion">
                                        <h4>Estamos en la nube</h4>
                                        <p className="hidden-md-down">Para un acceso sin restricciones, ni límites horarios (24x7).</p>
                                    </div>
                                </li>
                                <li className="wow zoomIn" data-wow-duration=".3s" data-wow-delay=".9s">
                                    <i className="fa  fa-user-plus" aria-hidden="true"></i>
                                    <div className="contenedor-eleccion">
                                        <h4>Diseño pensado para ti</h4>
                                        <p className="hidden-md-down">Sencillez, usabilidad y facilidad ante todo.</p>
                                    </div>
                                </li>
                                <li className="wow zoomIn" data-wow-duration=".3s" data-wow-delay="1.3s">
                                    <i className="fa  fa-cogs" aria-hidden="true"></i>
                                    <div className="contenedor-eleccion">
                                        <h4>Funcionalidades a medida</h4>
                                        <p className="hidden-md-down">Posibilidad de sugerencias y posterior programación de funciones a medida.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="flecha-bajar2 text-xs-center">
                        <a data-scroll href="#servicios"> <i className="fa fa-angle-down" aria-hidden="true"></i></a>
                    </div>

                </section>

                <main className="servicios py-1" id="servicios">
                    <div className="container">
                        <br/><br/><br/><br/>
                        <h2 className="text-xs-center font-weight-bold"><span className="logo"><img src="images/gestionus-white.svg" alt="" /></span>Gestionus se identifica con :</h2>


                        <br/><br/><br/>

                        <div className="row">
                            <article className="col-md-4 wow bounceInLeft" data-wow-delay=".3s">
                                <img src="images/user.svg" alt="" />
                                <h3><a href=""> Autónomos</a></h3>
                                <p className="hidden-sm-down">Nuestro principal objetivo es dar servicio a este colectivo tan desfavorecido.</p>
                                <a href="" className="btn btn-secondary hidden-sm-down">Más información</a>
                            </article>

                            <article className="col-md-4 wow bounceInUp" data-wow-delay=".6s">
                                <img src="images/list.svg" alt="" />
                                <h3><a href="">Simplicidad y sencillez de uso</a></h3>
                                <p className="hidden-sm-down">Cuanto más sencillo y simple mejor. Ahorrémonos tiempo!</p>
                                <a href="" className="btn btn-secondary hidden-sm-down">Más información</a>
                            </article>

                            <article className="col-md-4 wow bounceInRight" data-wow-delay="1s">
                                <img src="images/smartphone.svg" alt="" />
                                <h3><a href=""> MultiDispositivo </a></h3>
                                <p className="hidden-sm-down">Compatible con cualquier dispositivo móvil, responsive y mobile first. </p>
                                <a href="" className="btn btn-secondary hidden-sm-down">Más información</a>
                            </article>

                        </div>
                    </div>
                    <br/><br/><br/>
                </main>

            </div>
        );
    }
}
export default Portada;