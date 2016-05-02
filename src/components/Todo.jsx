import React from 'react';
import TodoType from '../types/TodoType';

const { func, shape } = React.PropTypes;

class Todo extends React.Component {
  static propTypes = {
    handleUpdate: func.isRequired,
    todo: shape(TodoType).isRequired,
  };

  handleClick = () => {
    const newObj = {
      ...this.props.todo,
      isCompleted: !this.props.todo.isCompleted
    };

    this.props.handleUpdate(null, newObj);
  }

  render() {
    const { todo } = this.props;

    return (
      <div className={`todo ${todo.isCompleted ? 'todo--completed' : ''}`}>
        <input
          className="todo__toggle"
          type="checkbox"
          onClick={this.handleClick}
          checked={todo.isCompleted}
        />

        <span className="todo__text">
          {todo.title}
        </span>
      </div>
    );
  }
}

export default Todo;
