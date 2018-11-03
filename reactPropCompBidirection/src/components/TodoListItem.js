import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TodoListItem extends Component {
  constructor(props){
    super(props);
  }
  render(){
    console.log("render Nieto TodoListItem");
    return(
        <li>{ this.props.name }</li>
    );
  }
}

TodoListItem.propTypes = {
  name: PropTypes.string.isRequired
}

export default TodoListItem;
