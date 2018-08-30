import { combineReducers } from 'redux';
import { todos, simpleReducer } from './';
export default combineReducers({
  todos,
  simpleReducer
});
