import React, {Component} from 'react';

class TodoItem extends Component {

    render() {
        return (
            <div>
                <input 
                 type="checkbox"
                 checked={this.props.item.isDone}
                 onChange={() => {this.props.onTodoDone(this.props.item.key)}}/>
                <p>{this.props.item.text}</p>
            </div>
        );
    }
}

export default TodoItem;