import { applyMiddleware, createStore, combineReducers } from 'redux';
import logger from 'redux-logger';

const post = (state, action) => {
  switch (action.type) {
    case 'ADD_POST':
      return {
        id: action.id,
        author: action.author,
        text: action.text,
        title: action.title
      };

    default:
      return state;
  }
};

const posts = (state = [], action) => {
  switch (action.type) {
    case 'ADD_POST':
      return [
        ...state,
        post(undefined, action)
      ];
    default:
      return state;
  }
};

const visibilityFilter = (
  state = '',
  action
) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.text;
    default:
      return state;
  }
};

const blogApp = combineReducers({
  posts,
  visibilityFilter
});

export default createStore(blogApp, applyMiddleware (logger))
