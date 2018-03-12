import axios from 'axios';
import { browserHistory } from 'react-router';
import * as types from '../../../constants';

const ADD_POST = 'ADD_POST';
const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';


let nextTodoId = 0;

export const addPost = (author, text, title) => {
  return {
    type: ADD_POST,
    payload: {
      id: nextTodoId++,
      author,
      text,
      title
    }
  };
};


export const setSearchTerm = (text) => {
  return {
    type: SET_VISIBILITY_FILTER,
    payload: { text }
  };
};


function beginLogin() {
  return { type: types.MANUAL_LOGIN_USER };
}

function loginSuccess(data) {
  return {
    type: types.LOGIN_SUCCESS_USER,
    data
  };
}

function loginError() {
  return { type: types.LOGIN_ERROR_USER };
}

// "Log Out" action creators
function beginLogout() {
  return { type: types.LOGOUT_USER };
}

function logoutSuccess() {
  return { type: types.LOGOUT_SUCCESS_USER };
}

function logoutError() {
  return { type: types.LOGOUT_ERROR_USER };
}

// "Register" action creators
function beginRegister() {
  return { type: types.REGISTER_USER };
}

function registerSuccess() {
  return { type: types.REGISTER_SUCCESS_USER };
}

function registerError() {
  return { type: types.REGISTER_ERROR_USER };
}

function makeUserRequest(method, data, api = '/login') {
	// returns a Promise
  return axios({
    method,
    url: api,
    data
  });
}

// Example of an Async Action Creator
// http://redux.js.org/docs/advanced/AsyncActions.html
export function manualLogin(
		data,
		successPath // path to redirect to upon successful log in
	) {
  return dispatch => {
    dispatch(beginLogin());

    return makeUserRequest('post', data, '/login')
			.then(response => {
  if (response.data.success) {
    dispatch(loginSuccess(data));
					// use browserHistory singleton to control navigation. Will generate a
					// state change for time-traveling as we are using the react-router-redux package
    browserHistory.push(successPath);
  } else {
    dispatch(loginError());
    const loginMessage = response.data.message;

    return loginMessage;
  }
})
			.catch((response) => {
			    if (response instanceof Error) {
			      // Something happened in setting up the request that triggered an Error
			      console.log('Error', response.message);
			    }
		    });
  };
}

// Example of an Async Action Creator
// http://redux.js.org/docs/advanced/AsyncActions.html
export function manualLogout() {
  return dispatch => {
    dispatch(beginLogout());

    return axios.get('/logout')
			.then(response => {
  if (response.data.success) {
    dispatch(logoutSuccess());
					// use browserHistory singleton to control navigation. Will generate a
					// state change for time-traveling as we are using the react-router-redux package
    browserHistory.push('/'); // logout to home page
  } else {
    dispatch(logoutError());
  }
})
			.catch(response => {
			    if (response instanceof Error) {
			      // Something happened during logout that triggered an Error
			      console.log('Error', response.message);
			    }
});
  };
}

export function manualRegister(data) {
  return dispatch => {
    dispatch(beginRegister());

    return makeUserRequest('post', data, '/register')
			.then(response => {
  if (response.data.success) {
    dispatch(registerSuccess());
    dispatch(manualLogin(data, '/'));
  } else {
    dispatch(registerError());
    const registerMessage = response.data.message;

    return registerMessage;
  }
})
			.catch(response => {
			    if (response instanceof Error) {
			      // Something happened in setting up the request that triggered an Error
			      console.log('Error', response.message);
			    }
		    });
  };
}