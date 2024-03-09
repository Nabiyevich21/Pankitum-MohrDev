import React, { Component } from 'react'
import TodoForm from '../TodoForm/TodoForm'
import TodoList from '../TodoList/TodoList';

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [{
        id: 0,
        task: 'Task 1',
        data:'2024-03-03',
        completed: false,
      }],
    }
    this.addTodo=this.addTodo.bind(this)
  }

  addTodo(todo){
  const newTodo = {
   id: this.state.todos.length,
   ...todo,
   Completed: false,
}
    this.setState({todos: [...this.state.todos ,newTodo, ]})
  }
  render() {
    return (
      <div>
        <TodoForm AddTodo={this.addTodo}/>
        <TodoList todos={this.state.todos}  />
      </div>
    )
  }
}
