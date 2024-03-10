import React, { Component } from 'react'
import  './Card.css'

export default class Card extends Component {
  render() {
    const cardStyle={
        Display: 'flex',
        flexDirection: 'column',
    }
    return (
     
      <div className="contents">
        <div className='Card__content'>
            <img className='Card__img' src={this.props.img} alt="" />
            <label className={cardStyle} htmlFor={this.props.id}>
            <p className='Card__paragraph'>Completed <input type="checkbox" id={this.props.id} />
            </p>
        
            </label>
          <h2 className='Card__h2'>{this.props.task}</h2>
          <span className='Card__span'>{this.props.data}</span>
          <div className='Card__btn'>
          <button className='Card__edit'>Edit 🖊️</button>
          <button className='Card__delete'>Delete 🗑️</button>
          </div>
        </div>
      </div>
    )
  }
}
