import {createStore, combineReducers} from 'redux';
import todos from './modules/todos'

export default function configureStore() {
    const rootReducer = combineReducers({
        todos
    });
    const store = createStore(rootReducer);
  
    return store;
  }