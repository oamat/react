import React, { Component } from 'react'
import TodoListItem from './TodoListItem'
import '../styles/TodoList.css'
import PropTypes from 'prop-types'

class TodoList extends Component {
  constructor(props){
    super(props);
    this.state = {
      items: this.props.items
    }
  }
  componentWillReceiveProps(nextProps){
    console.log("Pasamos por Hijo TodoList función reservada componentWillReceiveProps, Realizamos setState");
     this.setState({ items: nextProps.items})
    
  }
  render() {
    console.log("render Hijo TodoList");

    let items = this.state.items.map((currentValue, index, array) =>{
      return(
        <TodoListItem name={ currentValue } key={ index }/>
      );
    });

    return (
      <div className="TodoList">
        <ul>
         { items }
        </ul>
      </div>
    );
  }
}

TodoList.propTypes = {
  items: PropTypes.array.isRequired
}

export default TodoList;
