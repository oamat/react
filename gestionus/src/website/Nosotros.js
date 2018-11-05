import React from 'react';

class Nosotros extends React.Component {
    render() {
        return (
            <div className='Nosotros'>
                <section className="portada-interna portada-inicio">
                    <div className="texto-encabezado text-xs-center">
                        <div className="container">
                            <h1 className="display-4 wow bounceIn">Nosotros</h1>
                            <p className="wow bounceIn" data-wow-delay=".3s">¿Quienes somos? y ¿Que hacemos?</p>
                        </div>
                    </div>
                </section>

                <section className="company-information py-1" id="company-information">
                    <div className="container">
                        <div className="row">

                            <div className="col-md-8 col-xl-9 wow bounceIn" data-wow-delay=".3s">
                                <br/><br/>
                                <h2 className="h3 text-xs-center text-md-left font-weight-bold">Trabajamos para tu éxito</h2>
                                <p>
                                    Gestionus apuesta por la simplicidad, la actualidad y la originalidad. Creemos que la innovación creativa es la única vía
                        para promover y fomentar servicios de calidad que fortalezcan la confianza de los usuarios en las
                        posibilidades y nuevos usos de los productos digitales.
                    </p>
                                <p>
                                    Somos un grupo de ingenieros de software cuyo objetivo es conseguir que clientes y usuarios se sientan conectados en el nuevo
                        mundo de la información con servicios y contenidos que no dificulten su relación, sino que la simplifiquen
                        y la conviertan en un hecho cotidiano, agradable y satisfactorio.
                    </p>

                            </div>
                            <aside className="col-md-4 col-xl-3 wow bounceIn" data-wow-delay=".6s">
                                <br/><br/><img src="images/target.svg" alt="" />
                            </aside>
                        </div>
                        <div className="espacio-n"></div>
                    </div>
                   
                </section>
            </div>
        );
    }
}
export default Nosotros;