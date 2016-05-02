import { PropTypes } from 'react';

const { bool, string } = PropTypes;

const TodoType = {
  title: string.isRequired,
  isCompleted: bool.isRequired,
};

export default TodoType;
