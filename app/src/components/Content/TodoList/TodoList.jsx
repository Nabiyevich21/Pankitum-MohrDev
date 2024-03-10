import React, { Component } from 'react'
import Card from '../Card/Card'


export default class TodoList extends Component {
  render() {
    // console.log(<Card/>);
   const cards =  this.props.todos?.map((todo) =>{
    return <Card  key={todo.id} id={todo.id} img={todo.img} task={todo.task} data={todo?.data}/>
    });

    return (
      <div style={{display: 'flex', flexWrap: 'wrap'}}>
        { cards }
      </div>
    )
  }
}
