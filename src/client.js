import React from 'react';
import ReactDOM from 'react-dom';

import { browserHistory, Router } from 'react-router';
import { Provider } from 'react-redux';
import reduxStore from './redux/configureStore';
import routes from './routes';

const store = reduxStore;

const component = (
  <Provider store={store}>
    <Router history={browserHistory}>
      {routes}
    </Router>
  </Provider>
);

ReactDOM.render(component, document.getElementById('react-view'));
