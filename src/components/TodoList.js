import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';

const TodoList = ({onClick, todos}) => {
  return (
    <ul>
      {
        todos.map((todo, index) => {
          return <Todo {...todo} onClick={() => onClick(index)} key={index} />
        })
      }
    </ul>
  )
}

TodoList.propTypes = {
  onClick: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
}

export default TodoList;
