// src/store.js
import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk'; // изменено здесь

import todoReducer from './reducer';

const store = createStore(todoReducer, applyMiddleware(thunk));

export default store;
