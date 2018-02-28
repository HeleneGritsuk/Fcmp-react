import { ADD_POST, SET_VISIBILITY_FILTER } from './actions';

let nextTodoId = 0;

export const addPost = (author, text, title) => {
  return {
    type: ADD_POST,
    id: nextTodoId++,
    author,
    text,
    title
  };
};


export const setSearchTerm = (text) => {
  return {
    type: SET_VISIBILITY_FILTER,
    text
  };
};
