import React, { Component } from 'react'
import Card from '../Card/Card'


export default class TodoList extends Component {

  render() {
   
   const cards =  this.props.todos.map((todo) =>{
    return <Card  key={todo.id} item={todo}  completedTodo={this.props.completedTodo}/>
    });

    return (
      <div style={{display: 'flex', flexWrap: 'wrap'}}>
        { cards }
      </div>
    )
  }
}
