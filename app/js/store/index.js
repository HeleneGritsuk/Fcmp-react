import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import reducer from '../reducers.js';

export default createStore(reducer, applyMiddleware (logger))
