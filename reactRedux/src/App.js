import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { connect } from 'react-redux';

class App extends Component {
  render() {
    const elementosTareas = this.props.tareas.map( (tarea) => {
      return <h4 key={tarea.id}> {tarea.tarea}  </h4>; 
    });
    
    return ( 
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="App-intro">
          {this.props.informacion}<br />
          <button onClick={this.props.aumentar}>aumentar</button>
          <button onClick={this.props.disminuir}>disminuir</button>
          <input onKeyPress={this.agregarTarea.bind(this)} /><br />
          {elementosTareas}<br/>
          To get started, edit <code>src/App.js</code> and save to reload.
        </div>
      </div>
    );
  }

  agregarTarea = (event) => {
    console.log(event.target.value);
    if (event.which === 13) {
      this.props.agregar(event.target.value, this.props.id);
      event.target.value="";
    }
  }
}
///// REDUX GAME
const mapStateToProps   //internamente se subscribe al getState, constantemente está actualizado
  = (state) => {
    return {
      informacion: state.numero,
      tareas: state.tareas,
      id: state.id
    }; //devuelve state
  }

//**COMO OBJETO
//const mapDispatchToProps = {
//  aumentar: () => { return { type: "AUM" } },  // ejecuta el dispatch con action AUM
//  disminuir: () => { return { type: "DIS" } }  // ejecuta el dispatch con action DIS
//}

//**COMO FUNCIÓN, más dinámico
const mapDispatchToProps = (dispatch) => {
  return {
    aumentar: () => { dispatch({ type: "AUM" }); },// ejecuta el dispatch con action AUM
    disminuir: () => { 
      setTimeout(() => { 
        return dispatch({ type: "DIS" });  // ejecuta el dispatch con action DIS 
      }, 2000); // 3s de retraso
    },
    agregar: (tarea, id) => { dispatch({ type: "ADD", tarea, id }); } // ejecuta el dispatch con action DIS
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
