import React from 'react';
import { Provider } from 'react-redux';

import AddPost from './AddPost.jsx';
import PostsList from './PostsList.jsx';
import FilterBlock from './FilterBlock.jsx';
import store from '../store';


const TodoApp = () => (
  <div>
    <FilterBlock />
    <AddPost />
    <PostsList />
  </div>
);

export default (
  <Provider store={store}>
    <TodoApp />
  </Provider>
)
