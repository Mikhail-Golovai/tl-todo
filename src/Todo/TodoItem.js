import React, {Component} from 'react'
import './TodoItem.css'

class TodoItem extends Component {

    render() {
        return (
            <div className="TodoItem">
                <input 
                 type="checkbox"
                 id={`todo-${this.props.item.key}`}
                 className="css-checkbox"
                 checked={this.props.item.isDone}
                 onChange={() => {this.props.onTodoDone(this.props.item.key)}}/>
                 <label for={`todo-${this.props.item.key}`} class="css-label">{this.props.item.text}</label>
            </div>
        );
    }
}

export default TodoItem;