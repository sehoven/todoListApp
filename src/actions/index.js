import {
  ADD_TODO,
  SIMPLE_ACTION,
  TOGGLE_TODO
} from '../constants';

export function simpleAction() {
  return {
    type: SIMPLE_ACTION,
    payload: 'result_of_simple_action'
  }
}

export function addTodo(text) {
  return {
    type: ADD_TODO,
    text
  }
}

export function toggleTodo(index) {
  return {
    type: TOGGLE_TODO,
    index
  }
}
