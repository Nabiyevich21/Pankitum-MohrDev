import React, { Component } from 'react'
import  './Input.css'

export default class Input extends Component {
    constructor(props){
        super(props);
        this.state={
            username: "",
        }
    }
  render() {
    return (
      <div>
        <h1>{this.state.username}</h1>
        <input  type="text" placeholder='UserName:' onChange={(e) =>this.setState({username: e.target.value})} value={this.state.username} />
      </div>
    )
  }
}
