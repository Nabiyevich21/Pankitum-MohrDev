import "./App.css";
import React, { Component } from 'react'

export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      count:0
    }
  }
// ! Add Count
  addCount =()=>{
    this.setState({count:this.state.count+1})
  }

  // ! remove Count
  removeCount=()=>{
    if(this.state.count>0){
      this.setState({count: this.state.count-1})
    }else{
      this.setState({count:0})
    }
   
  }
// ! reset count
resetCount=()=>{
  if(this.state.count>0){
    this.setState({count:0})
  }else{
    alert("Look at number none")
  }
}

  render() {
    return (
      <div>
        <h1 className="innerH1">Hello World✌️</h1>
        <div className="contents">

          <button onClick={this.addCount} className="btn">Click Add </button>

          <h3 className="countNum">{this.state.count}</h3>

          <button className="btn" onClick={this.removeCount}>Click Remove</button>

        </div>
        <button id="btn-reset" onClick={this.resetCount}>Reset Count</button>
      </div>
    )
  }
}
