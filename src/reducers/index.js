import {
  ADD_TODO,
  SIMPLE_ACTION,
  TOGGLE_TODO
} from '../constants';

export const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ]
    case TOGGLE_TODO:
    return state.map((todo, index) => {
      if(action.index === index) {
        // console.log("YAY")
        return Object.assign({}, todo, {
          completed: !todo.completed
        });
      }
      return todo;
    });
    default:
      return state;
  }
}

export const simpleReducer = (state = {}, action) => {
  switch(action.type) {
    case SIMPLE_ACTION:
      return {
        result: action.payload
      }
    default:
      return state;
  }
}
