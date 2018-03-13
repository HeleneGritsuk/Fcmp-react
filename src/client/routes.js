import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import App from './components/App';
import MainPage from './components/MainPage';
import PostsPage from './components/Posts';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';

export default (store, history) => {
  const requireAuth = (nextState, replace, callback) => {
    const { user: { authenticated } } = store.getState();

    if (!authenticated) {
			// Takes a Location object
			// https://github.com/mjackson/history/blob/master/docs/Location.md
      replace({
        pathname: '/login',
        state: { nextPathname: nextState.location.pathname }
      });
    }
    callback();
  };

  return (
    <Router history={history}>
      <Route path='/' component={App}>
        <IndexRoute component={MainPage} />
        <Route path='login' component={LoginPage} />
        <Route path='register' component={RegisterPage} />
        <Route path='posts' component={PostsPage} onEnter= {requireAuth}/>
      </Route>
    </Router>
  );
};
