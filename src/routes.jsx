import React from 'react';
import { IndexRoute, Route }  from 'react-router';
import App from 'components/App';
import MainPage from 'components/MainPage';
import PostsPage from 'components/Posts';

export default (

  <Route component={App} path='/'>
    <IndexRoute component={MainPage} />
    <Route component={PostsPage} path='posts' />
  </Route>


);
