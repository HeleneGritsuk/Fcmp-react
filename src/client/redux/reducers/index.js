import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import posts from './posts';
import visibilityFilter from './visibilityFilter';
import user from './user';
const blogApp = combineReducers({
  posts,
  visibilityFilter,
  user,
  routing: routerReducer
});

export default blogApp;
