// ./src/redux/index.js
import { legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import { counterReducer } from './reducers/counterReducer';

// const action = { 
//   type: 'INCREMENT_COUNTER',
//   payload: 10
// } 

const store = createStore(counterReducer, composeWithDevTools());

export default store;

