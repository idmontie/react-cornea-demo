import React from 'react';
import Todo from './Todo';
import TodoType from '../types/TodoType';

const { arrayOf, func, shape } = React.PropTypes;

class Todos extends React.Component {
  static propTypes = {
    handleUpdate: func.isRequired,
    todos: arrayOf(shape(TodoType)).isRequired,
  }

  render() {
    const { handleUpdate, todos } = this.props;

    return (
      <ul className="todos">
        {todos.map((todo, index) => {
          return (
            <li key={index} className="todos__item">
              <Todo
                handleUpdate={handleUpdate.bind(this, index)}
                todo={todo}
              />
            </li>
          )
        })}
      </ul>
    );
  }
}

export default Todos;
