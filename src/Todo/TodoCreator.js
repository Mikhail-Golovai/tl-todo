import React, {Component} from 'react'
import './TodoCreator.css'

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
                <div className="TodoCreator">
                    <div className="group">      
                        <input 
                            type="text" 
                            required 
                            value={this.state.text}
                            onChange={this.handleTextChange}
                        />
                        <span className="highlight"></span>
                        <span className="bar"></span>
                        <label>Name</label>
                    </div>
                    <button 
                        className="btn" 
                        type="button"
                        onClick={() => this.props.onCreate({text: this.state.text})}
                    >
                        <span>Create new todo</span>
                    </button>
                </div>
        );
    }
}

export default TodoCreator;