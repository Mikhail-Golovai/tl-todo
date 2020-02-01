import React, {Component} from 'react';
import TodoList from './Todo/TodoList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Welcome to the TODO App!</h1>
        <TodoList />
      </div>
    );
  }
}

export default App;
