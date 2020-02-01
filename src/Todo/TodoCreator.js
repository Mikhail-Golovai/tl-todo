import React, {Component} from 'react';

class TodoCreator extends Component {
    constructor () {
        super()
        this.state = {
            text: ''
        }
        this.handleTextChange = this.handleTextChange.bind(this)
    }

    handleTextChange(event) {
        this.setState({text: event.target.value});
      }

    render() {
        return (
            <div>
                <input 
                 type="text"
                 value={this.state.text}
                 onChange={this.handleTextChange}/>
                 <button
                 onClick={() => this.props.onCreate({text: this.state.text})}>
                     Create new todo
                 </button>
            </div>
        );
    }
}

export default TodoCreator;