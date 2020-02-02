import React, {Component} from 'react';
import TodoList from './Todo/TodoList'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="TodoHeader">
          <h1> Welcome to the TODO App!</h1>
        </div>
        <TodoList />
      </div>
    );
  }
}

export default App;
