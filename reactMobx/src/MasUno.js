import React, { Component } from 'react';
import VarPrincipalData from './PrincipalData';

class MasUno extends Component{
	otraFuncion(){
		console.log(VarPrincipalData);
	}
	render(){
		return(
			<div>
				Boton Creado por componente MasUno: <br/>
				<button onClick={function(){VarPrincipalData.aumentarNumero()}} >Aumentar</button>
				<br/>
			</div>
			)
	}
}

export default MasUno;