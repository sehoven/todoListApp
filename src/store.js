import { createStore } from 'redux';
import rootReducer from './reducers/RootReducer';
export default function configureStore() {
  return createStore(
    rootReducer
  );
}
