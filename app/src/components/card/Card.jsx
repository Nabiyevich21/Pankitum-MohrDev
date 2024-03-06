import React, { Component } from 'react'
import Boys from '../card/Boys.jpg'
import  '../card/Card.css'
export default class Card extends Component {
    constructor(props) {
        super(props);
        this.showName=this.showName.bind(this)
    }

    showName(data){
     const newName =   prompt("Enter your name")
        this.props.changeName(newName)
      }

      showImg(){
        const Images = prompt("Enter your image")
        this.props.changeImg(Images)
      }
  render() {
    return (
      <div className='Card__content'>
        <img className='Card__img' src={Boys} alt="" />
        <h1 className='Card__title'>{this.props.name}</h1>
        <p className='Card__paragraph'>{this.props.description}</p>
        <button onClick={() =>this.showName("Student")} className='card__btn'>Card</button>
       
      </div>
    )
  }
}
