import React, {Component} from 'react'
import TodoItem from './TodoItem'
import TodoCreator from './TodoCreator'
import './TodoList.css'
import {connect} from 'react-redux';
import {createItem, toggleItem} from '../actions/modules/todos'

const EMPTY_LIST_MESSAGE = 'Look\'s like there is no TODO yet. Try to create one :)'

class TodoList extends Component {

    render() {
        const {todos = [], createItem, toggleItem} = this.props;
        const items = todos.map(item => {
            return (<TodoItem key={item.key} item={item} onTodoDone={() => toggleItem(item.key)}/>)
        });
        return (
        <>
            <div className="TodoList">
                {items.length ? items : <p>{EMPTY_LIST_MESSAGE}</p>}
            </div>
            <TodoCreator onCreate={createItem}/>
        </>
        );
    }
}

const mapStateToProps = state => ({
    todos: state.todos || []
  });
  

  const mapDispatchToProps = dispatch => ({
    toggleItem: id => dispatch(toggleItem(id)),
    createItem: text => dispatch(createItem(text))
  })

export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(TodoList);