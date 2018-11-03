import React, { Component } from 'react'
import '../styles/TodoBox.css'
import PropTypes from 'prop-types'

class TodoBox extends Component {
  constructor(props){
    super(props);
    this.state = {
      todoText: ''
    }

    this.onSubmitHijo = this.onSubmitHijo.bind(this);
  }
  onSubmitHijo(e){
    console.log("Pasamos por Hijo TodoBox función onSubmitHijo, Vamos a ejecutar onSubmitPadre del Padre App");
    e.preventDefault();
    this.props.onSubmitPadre(e);
    console.log("Pasamos por Hijo TodoBox función onSubmitHijo, Realizamos SetState, dejamos en blanco");
    this.setState({ todoText: '' })
  }
  getInputValue(){
    console.log("Pasamos por Hijo TodoBox función getInputValue, Devolvemos el todoTexto");
    return this.state.todoText;
  }
  render() {
    console.log("render Hijo TodoBox");
    return (
      <div className="TodoBox">
        <form onSubmit={ this.onSubmitHijo }>
          <input
              type="text"
              className="TodoBox-input"
              value={ this.state.todoText }
              onChange={(e) => { this.setState({ todoText: e.target.value}); console.log("Realizamos SetState TodoBox"); }}/>
          <input
              type="submit"
              className="TodoBox-button"
              value="Agregar"/>
        </form>
      </div>
    );
  }
}

TodoBox.propTypes = {
  onSubmitPadre: PropTypes.func.isRequired
}

export default TodoBox;
