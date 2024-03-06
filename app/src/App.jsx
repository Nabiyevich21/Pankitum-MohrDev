import React, { Component } from 'react'
import Card from './components/card/Card'
import  './components/card/Card.css'
export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      img: '',
      name:'Muhammadqodir',
      description:'Muhammadqodir is Student of the PDP Academy',
    };

   this.changeName=this.changeName.bind(this)
  }
  changeName(nawName){
    this.setState({name: nawName})
   }
  
  render() {
    const { name, description } = this.state
    return (
      <div>
       
        <Card name={name} description={description} changeName={this.changeName}  />
      </div>
    )
  }
}
