import React, {Component} from 'react'
import TodoItem from './TodoItem'
import TodoCreator from './TodoCreator'

const EMPTY_LIST_MESSAGE = 'Look\'s like there is no TODO yet. Try to create one'

class TodoList extends Component {
    
    constructor() {
        super()
        this.state = {
            todos: []
        }
        this.handleTodoDone = this.handleTodoDone.bind(this)
        this.handleTodoCreate = this.handleTodoCreate.bind(this)
    }

    handleTodoDone(key) {
        this.setState(prevState => {
            const updatedTodos = prevState.todos.map(item => {
                if (item.key === key) {
                    item.isDone = !item.isDone
                }
                return item;
            })
            return { todos: updatedTodos }
        })
    }
    
    handleTodoCreate({text}) {
        const newTodo = {
            key: this.state.todos.length,
            isDone: false,
            text
        }
        this.setState(prevState => ({ todos: [...prevState.todos, newTodo]}))
    }

    render() {
        const items = this.state.todos.map(item => {
            return (<TodoItem key={item.key} item={item} onTodoDone={this.handleTodoDone}/>)
        });
        return (
        <>
            <TodoCreator onCreate={this.handleTodoCreate}/>
            <ul className="TodoList">
                {items.length ? items : <p>{EMPTY_LIST_MESSAGE}</p>}
            </ul>
        </>
        );
    }
}

export default TodoList;