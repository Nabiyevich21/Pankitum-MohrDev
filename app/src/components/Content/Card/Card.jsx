import React, { Component } from 'react'

export default class Card extends Component {
  render() {
    const cardStyle={
        Display: 'flex',
        flexDirection: 'column',
    }
    return (
      <label className={cardStyle} htmlFor={this.props.id}>
        <input type="checkbox" id={this.props.id} />
        <h2>{this.props.task}</h2>
        <span>{this.props.data}</span>
      </label>
    )
  }
}
