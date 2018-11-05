import React from 'react';

class Footer extends React.Component {

    getDataScroll() {
        return (<a data-scroll className="ir-arriba" href="#encabezado"><i className="fa  fa-arrow-circle-up" aria-hidden="true"> </i> </a>);
    }
    render() {
        console.log("render Footer");
        return (
            <div className='Footer'>
                <footer className="piedepagina py-1" role="contentinfo">
                    <div className="container">
                        <p><a data-scroll className="ir-arriba" href="#encabezado"><i className="fa  fa-arrow-circle-up" aria-hidden="true"></i></a>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2017 © Gestionus Todos los derechos reservados&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <a data-scroll className="ir-arriba" href="#encabezado"><i className="fa  fa-arrow-circle-up" aria-hidden="true"></i></a>
                        </p>
                        <ul className="redes-sociales">
                            <li><a title="facebook"><i className="fa fa-facebook" aria-hidden="true"> </i>  </a></li>
                            <li><a title="google+"><i className="fa fa-google-plus" aria-hidden="true"></i> </a></li>
                            <li><a title="twiter"><i className="fa fa-twitter" aria-hidden="true"></i> </a></li>
                            <li><a title="linkedin"><i className="fa fa-linkedin-square" aria-hidden="true"></i> </a></li>
                            <li><a title="youtube"><i className="fa fa-youtube" aria-hidden="true"></i> </a></li>
                            <li><a title="chrome optimized"><i className="fa fa-chrome" aria-hidden="true"></i> </a></li>
                            <li><a title="html5 compliant"><i className="fa fa-html5" aria-hidden="true"></i> </a></li>
                            <li><a title="css3 compliant"><i className="fa fa-css3" aria-hidden="true"></i> </a></li>
                            <li><a title="github"><i className="fa fa-github" aria-hidden="true"></i> </a></li>
                            <li><a title="git versions"><i className="fa fa-git" aria-hidden="true"></i> </a></li>
                        </ul>
                    </div>                    
                    <div className="mini-bottom">Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons" target="_blank" rel="noopener noreferrer">Smashicons</a> from <a href="https://www.flaticon.com/" title="Flaticon" target="_blank" rel="noopener noreferrer">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank" rel="noopener noreferrer">CC 3.0 BY</a></div>
                </footer>

            </div>
        );
    }
}

export default Footer;