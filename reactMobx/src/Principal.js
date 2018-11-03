import React, { Component } from 'react';
import VarPrincipalData from './PrincipalData';
import { observer } from 'mobx-react';
import MasUno from './MasUno';
import MenosUno from './MenosUno';

class Principal extends Component{
	render(){
		return(
			<div>
				Componente Principal: {VarPrincipalData.numero}<br/><br/>
				<MasUno/>
				<MenosUno/>
			</div>
			);
	}
}

export default observer(Principal);