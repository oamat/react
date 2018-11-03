import React, { Component } from 'react';
import VarPrincipalData from './PrincipalData';

class MenosUno extends Component{
	render(){
		return(
			<div>
				Boton Creado por componente MenosUno: <br/>
				<button onClick={function(){VarPrincipalData.disminuirNumero()}} >Disminuir</button>
				<br/>
			</div>
			)
	}
}

export default MenosUno;