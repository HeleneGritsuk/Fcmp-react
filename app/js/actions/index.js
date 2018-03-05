const ADD_POST = 'ADD_POST'
const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

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
