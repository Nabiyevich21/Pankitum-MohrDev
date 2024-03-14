import React, { Component } from 'react'
import Card from '../Card/Card'
import Modal from '../Modal/Modal'

export default class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todoId: null,
            isOpen: false,
        }
        this.toggleModal = this.toggleModal.bind(this)
    }

    toggleModal(todoId) {
        this.setState({ todoId, isOpen: !this.state.isOpen })
    }
    render() {
        const cards = this.props.todos.map((todo) => {
            return (
                <Card
                    key={todo.id}
                    item={todo}
                    completedTodo={this.props.completedTodo}
                    deleteTodo={this.props.deleteTodo}
                    toggleModal={this.toggleModal}
                />
            )
        })

        return (
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {cards}
                <Modal
                    isOpen={this.state.isOpen}
                    todoId={this.state.todoId}
                    editTodo={this.props.editTodo}
                />
            </div>
        )
    }
}
