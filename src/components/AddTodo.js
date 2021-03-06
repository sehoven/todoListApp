import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

let input;

let AddTodo = ({ dispatch }) => {
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          if(input.value.trim()) {
            dispatch(addTodo(input.value));
            input.value = "";
          }
        }}
      >
        <input
          ref={ref => {
            input = ref;
          }}
        />
        <button type="submit">
          Add
        </button>
      </form>
    </div>
  )
}

AddTodo = connect()(AddTodo);

export default AddTodo;
