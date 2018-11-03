import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Form.css'

class FormRow extends Component {
  constructor(props){
    super(props);
    this.state = {
      inputValue: ''
    }
    this.onChange = this.onChange.bind(this);
    this.getValue = this.getValue.bind(this);
  }

  onChange(e){
    console.log("Passa por Hijo FormRow función onChange");
    this.setState({ inputValue: e.target.value });
  }

  getValue(){ // este método será llamado por el objeto padre. 
    console.log("Passa por Hijo FormRow función getValue");
    return this.state.inputValue;
  }

  render(){
    console.log("render Hijo FormRow : " + this.props.labelText);
    return(
      <div className="FormRow">
        <label className="FormRow-label">{ this.props.labelText }</label>
        <input
          type={ this.props.inputType }
          className="FormRow-input"
          value={ this.state.inputValue }
          onChange= { this.onChange }  // o bien { (e) => { this.setState({ inputValue: e.target.value }) } }. Se llama al método para que this.state.inputValue sea el valor introducido
          required= { this.props.isRequired }/>
      </div>
    );
  }
}

FormRow.propTypes = {
  inputType: PropTypes.string,  
  labelText: PropTypes.string,
  isRequired: PropTypes.bool
}

export default FormRow;
