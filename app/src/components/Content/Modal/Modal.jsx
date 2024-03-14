import React, { Component } from 'react'
import './Modal.css'
export default class Modal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            img: '',
            task: '',
            data: '',
        }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleInputEdit = this.handleInputEdit.bind(this)
    }
    //* get value from input
    handleInputChange(event) {
        const fieldName = event.target.name
        return this.setState({ [fieldName]: event.target.value })
    }

    //* edit todo
    handleInputEdit(event) {
        event.preventDefault()
        this.props.editTodo(this.props.todoId, this.state)
    }
    render() {
        const editFormStyle = {
            display: this.props.isOpen ? 'Flex' : 'none',
        }

        return (
            <form
                className="modalForm"
                style={editFormStyle}
                onSubmit={this.handleInputEdit}
            >
                <input
                    onChange={this.handleInputChange}
                    // required
                    name="img"
                    className="Input__text-modal"
                    type="images"
                    placeholder="Images"
                />
                <input
                    onChange={this.handleInputChange}
                    // required
                    name="task"
                    className="Input__text-modal"
                    type="text"
                    placeholder="Todo Name"
                />
                <input
                    onChange={this.handleInputChange}
                    name="data"
                    className="Input__text-modal"
                    type="date"
                    // required
                />

                <button className="Todo__Btn">Edit Todo</button>
            </form>
        )
    }
}
