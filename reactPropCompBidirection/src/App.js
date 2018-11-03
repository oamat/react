import React, { Component } from 'react'
import './styles/App.css'

import TodoBox from './components/TodoBox'
import TodoList from './components/TodoList'

class App extends Component {
  constructor(){
    super();
    this.state = {
      todoItems: []
    };
    this.onSubmitPadre = this.onSubmitPadre.bind(this);
  }
  onSubmitPadre(e){
    console.log("Pasamos por Padre App función onSubmitPadre, Vamos a rellenar la lista accediendo a Hijo TodoBox");
    let todoListValue = this.refs.todobox.getInputValue();
    let newTodoItemsValue = this.state.todoItems.concat(todoListValue);
    console.log("Pasamos por Padre App función onSubmitPadre, Hacemos setState");
    this.setState({ todoItems: newTodoItemsValue})
  }
  render() {
    console.log("render Padre App");
    return (
      <div className="App">
        <h1 className="App-title">Mi Primer Todo List</h1>
        <TodoBox ref="todobox" onSubmitPadre={ this.onSubmitPadre }/>
        <TodoList ref="todolist" items={ this.state.todoItems }/>
      </div>
    );
  }
}

export default App;
