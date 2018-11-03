import { extendObservable } from 'mobx';
import datos from './fireBaseController';

class TiendaController {
	constructor(){

		var self = this;

		datos.platillos.once('value').then(function(snapshot){
			//console.log(snapshot);
			snapshot.forEach(function(childSnapshot){
				const key = childSnapshot.key;
				const valor = childSnapshot.val();
				self.platillos.push(valor); //envía valor al variable alimentos
			})
		});

		datos.bebidas.once('value').then(function(snapshot){
			//console.log(snapshot);
			snapshot.forEach(function(childSnapshot){
				const key = childSnapshot.key;
				const valor = childSnapshot.val();
				self.bebidas.push(valor); //envía valor al variable bebidas
			})
		});

		extendObservable(this,
			{
				platillos: [
],
				bebidas: [
]

			});
	}

	ponerEnLaOrden(indicePlatillo, cantidadPlatillo){
		this.platillos.forEach((value, index)=>{
				if(indicePlatillo === index){
					this.platillos[index].cantidad = cantidadPlatillo;
				}
			}
		)
	}


	bebidasEnLaOrden(indicePlatillo, cantidadPlatillo){
		this.bebidas.forEach((value, index)=>{
				if(indicePlatillo === index){
					this.bebidas[index].cantidad = cantidadPlatillo;
				}
			}
		)
	}
}

var VarTiendaController = new TiendaController;

export default VarTiendaController;