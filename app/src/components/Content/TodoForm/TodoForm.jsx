import React, { Component } from 'react'
import './TodoForm.css'
export default class TodoForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            img: '',
            task: '',
            data: '',
        }
        this.handleInputValue =
            this.handleInputValue.bind(this)
        this.handleSubmitValue =
            this.handleSubmitValue.bind(this)
    }

    handleInputValue(e) {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    handleSubmitValue(e) {
        e.preventDefault()
        this.props.AddTodo(this.state)
    }

    render() {
        return (
            <form
                onSubmit={this.handleSubmitValue}
            >
                <input
                    onChange={
                        this.handleInputValue
                    }
                    required
                    name="img"
                    className="Input__text"
                    type="images"
                    placeholder="Images"
                />
                <input
                    onChange={
                        this.handleInputValue
                    }
                    required
                    name="task"
                    className="Input__text"
                    type="text"
                    placeholder="Todo Name"
                />
                <input
                    onChange={
                        this.handleInputValue
                    }
                    name="data"
                    className="Input__data"
                    type="date"
                />
                <button className="Todo__Btn">
                    Add Todo
                </button>
            </form>
        )
    }
}
