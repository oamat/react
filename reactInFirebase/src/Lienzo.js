import React, { Component } from 'react';
import Platillos from './Platillos';
import Bebidas from './Bebidas';
import Pedidos from './Pedidos';
import { Route, Link } from 'react-router-dom';

class Lienzo extends Component {
	render() {
		console.log(this.props.location);
		console.log(this.props.match);
		console.log(this.props.history);


		return (
			<div className="container">
				<div className="jumbotron" >
					<h2>Nombre de Tienda</h2>
				</div>
				<div>
					<div>
						<ul className="nav nav-pills ListMargin">
							<li role="presentation" className="active">
								<Link to="/platillos">Comidas</Link>
							</li>
							<li role="presentation" className="active">
								<Link to="/bebidas">Bebidas</Link>
							</li>
						</ul>
					</div>
					<div>
						<Route exact path="/platillos" component={Platillos} />
						<Route exact path="/bebidas" component={Bebidas} />

					</div>
				</div>
				<Pedidos />
			</div>
		)
	}
}

export default Lienzo;