import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import configureStore from './store';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {
  simpleAction,
  addTodo,
  toggleTodo
} from './actions'

const store = configureStore()

const unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)

console.log(store.getState())
store.dispatch(simpleAction())
store.dispatch(addTodo(1))
store.dispatch(addTodo(2))
store.dispatch(addTodo(3))
store.dispatch(addTodo(4))
store.dispatch(toggleTodo(3))
store.dispatch(toggleTodo(1))
store.dispatch(toggleTodo(1))

unsubscribe()

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
