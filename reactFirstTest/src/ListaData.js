import { extendObservable } from 'mobx';

class ListaData {
	constructor(){
		extendObservable(this,
			{tareas: ['A1', 'A2']});
	}

	agregarTarea(tarea){
		this.tareas.push(tarea);
	}
	
	EliminarTarea(index){
		this.tareas.splice(index,1);
	}
}

var VarListaData = new ListaData();

export default VarListaData;
