import React, { Component } from 'react'
import './Card.css'

export default class Card extends Component {
    render() {
        const { img, id, task, data, completed } = this.props.item
        const cardStyle = {
            backgroundColor: completed ? 'green' : 'white',
        }
        return (
            <div className="contents">
                <div style={cardStyle} className="Card__content">
                    <img className="Card__img" src={img} alt="" />
                    <label htmlFor={id}>
                        <p className="Card__paragraph">
                            Completed
                            <input
                                type="checkbox"
                                id={id}
                                defaultChecked={completed}
                                onChange={() => this.props.completedTodo(id)}
                            />
                        </p>
                    </label>
                    <h2 className="Card__h2">{task}</h2>
                    <span className="Card__span">{data}</span>
                    <div className="Card__btn">
                        <button
                            className="Card__edit"
                            onClick={() => this.props.toggleModal(id)}
                        >
                            Edit 🖊️
                        </button>
                        <button
                            className="Card__delete"
                            onClick={() => this.props.deleteTodo(id)}
                        >
                            Delete 🗑️
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}
