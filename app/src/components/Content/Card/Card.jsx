import React, { Component } from 'react'
import  './Card.css'

export default class Card extends Component {
  render() {
    const {img, id,task, data,completed} = this.props.item
    const cardStyle={
        backgroundColor: completed ? 'green' : 'yellow',
        Display: 'flex',
        flexDirection: 'column',
    }
    return (
     
      <div className="contents">
        <div className='Card__content'>
            <img className='Card__img' src={img} alt="" />
            <label className={cardStyle} htmlFor={id}>
            <p className='Card__paragraph'>Completed <input type="checkbox" id={id}  defaultChecked={completed} onChange={() =>this.props.completedTodo(id)}/>
            </p>
        
            </label>
          <h2 className='Card__h2'>{task}</h2>
          <span className='Card__span'>{data}</span>
          <div className='Card__btn'>
          <button className='Card__edit'>Edit 🖊️</button>
          <button className='Card__delete'>Delete 🗑️</button>
          </div>
        </div>
      </div>
    )
  }
}
