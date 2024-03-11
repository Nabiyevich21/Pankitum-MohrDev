import React, { Component } from 'react'
import TodoForm from '../TodoForm/TodoForm'
import TodoList from '../TodoList/TodoList'

export default class Todo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todos: [
                {
                    id: 0,
                    img: 'data:image/webp;base64,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',
                    task: 'Task 1',
                    data: '2024-03-03',
                    completed: false,
                },
            ],
        }
        this.addTodo = this.addTodo.bind(this)
        this.completedTodo = this.completedTodo.bind(this)
    }

    addTodo(todo) {
        const newTodo = {
            id: this.state.todos.length,
            ...todo,
            Completed: false,
        }
        this.setState({ todos: [...this.state.todos, newTodo] })
    }

    completedTodo(id) {
        const TodoEl = this.state.todos.map((todo) => {
            if (todo.id === id) {
                todo.completed = !todo.completed
                return todo
            } else {
                return todo
            }
        })
        this.setState({ todos: TodoEl })
    }
    render() {
        return (
            <div>
                <TodoForm AddTodo={this.addTodo} />
                <TodoList
                    todos={this.state.todos}
                    completedTodo={this.completedTodo}
                />
            </div>
        )
    }
}
