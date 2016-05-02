import React from 'react';

const { func } = React.PropTypes;

class TodoForm extends React.Component {
  static propTypes = {
    handleCreate: func.isRequired,
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.handleCreate({
      title: this.refs.title.value,
      isCompleted: false,
    });

    this.refs.title.value = '';
  }

  render() {
    return (
      <form className="todo-form" onSubmit={this.handleSubmit}>
        <input
          className="todo-form__field"
          type="text"
          ref="title"
          placeholder="Walk the dog…"
        />
      </form>
    )
  }
}

export default TodoForm;
