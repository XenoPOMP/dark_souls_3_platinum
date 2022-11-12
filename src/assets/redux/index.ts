import { combineReducers, createStore } from 'redux';
import { checkboxReducer } from './reducer-list';

const rootReducer = combineReducers({
  checkboxes: checkboxReducer,
});

export const store = createStore(rootReducer);
