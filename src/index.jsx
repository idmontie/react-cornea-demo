import React from 'react';
import ReactDOM from 'react-dom';
import TodoForm from './components/TodoForm';
import Todos from './components/Todos';

class App extends React.Component {
  state = {
    todos: []
  }

  handleCreate = (obj) => {
    this.setState({
      todos: [...this.state.todos, obj]
    });
  }

  handleUpdate = (index, newObj) => {
    this.setState({
      todos: this.state.todos.map((todo, i) => {
        if (index === i) {
          return newObj;
        }
        return todo;
      })
    });
  }

  render() {
    <div className="app">
      <TodoForm
        handleCreate={this.handleCreate}
      />
      <Todos
        todos={this.state.todos}
        handleUpdate={this.handleUpdate}
      />
    </div>
  }
}

ReactDOM.render(document.getElementById('render'), <App />);
