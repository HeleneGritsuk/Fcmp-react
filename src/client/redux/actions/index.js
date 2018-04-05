import axios from 'axios';
import {
  browserHistory
} from 'react-router';
import * as types from '../../../constants';


export const setSearchTerm = (text) => {
  return {
    type: types.SET_VISIBILITY_FILTER,
    payload: {
      text
    }
  };
};

export const beginLogin = () => {
  return {
    type: types.MANUAL_LOGIN_USER
  };
}

export const beginSendBlog = () => {
  return {
    type: types.MANUAL_SEND_BLOG
  };
}

export const sendBlogSuccess = (data) => {
  return {
    type: types.SEND_BLOG_SUCCESS,
    payload: data
  };
}

export const sendBlogError = () => {
  return {
    type: types.SEND_BLOG_ERROR
  };
}

export const loginSuccess = (data) => {
  return {
    type: types.LOGIN_SUCCESS_USER,
    data
  };
}

export const loginError = () => {
  return {
    type: types.LOGIN_ERROR_USER
  };
}

// "Log Out" action creators
export const beginLogout = () => {
  return {
    type: types.LOGOUT_USER
  };
}

export const logoutSuccess = () => {
  return {
    type: types.LOGOUT_SUCCESS_USER
  };
}

export const logoutError = () => {
  return {
    type: types.LOGOUT_ERROR_USER
  };
}

// "Register" action creators
export const beginRegister = () => {
  return {
    type: types.REGISTER_USER
  };
}

export const registerSuccess = () => {
  return {
    type: types.REGISTER_SUCCESS_USER
  };
}

export const registerError = () => {
  return {
    type: types.REGISTER_ERROR_USER
  };
}

const makeUserRequest = (method, data, api = '/login') => {
  // returns a Promise
  return axios({
    method,
    url: api,
    data
  });
}

// Example of an Async Action Creator
// http://redux.js.org/docs/advanced/AsyncActions.html
export const manualLogin = (
  data,
  successPath // path to redirect to upon successful log in
) => {
  return dispatch => {
    dispatch(beginLogin());

    return makeUserRequest('post', data, '/login')
      .then(response => {
        if (response.data.success) {
          dispatch(loginSuccess(data));
          debugger;
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
export const manualLogout = () => {
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

export const manualRegister = (data) => {
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


export const manualBlogSend = (data) => {
  return dispatch => {
    dispatch(beginSendBlog());

    return makeUserRequest('post', data, '/posts')
      .then(response => {
        if (response.data.success) {
          dispatch(sendBlogSuccess(response.data));
          // use browserHistory singleton to control navigation. Will generate a
          // state change for time-traveling as we are using the react-router-redux package
        } else {
          dispatch(sendBlogError());
          const sendBlogMessage = response.data.message;

          return sendBlogMessage;
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


const beginGetPosts = () => {
  return {
    type: types.BEGIN_GET_POSTS
  };
}

const getAllPostsSuccess = (data) => {
  return {
    type: types.GET_POSTS_SUCCESS,
    payload: data
  };
}

const getAllPostsError = (data) => {
  return {
    type: types.GET_POSTS_ERROR
  };
}

export const getAllPosts = () => {
  return dispatch => {
    dispatch(beginGetPosts());

    return makeUserRequest('get', '', '/posts')
      .then(response => {
        if (response.data.success) {
          dispatch(getAllPostsSuccess(response.data));
          // use browserHistory singleton to control navigation. Will generate a
          // state change for time-traveling as we are using the react-router-redux package
        } else {
          dispatch(getAllPostsError());
          const sendBlogMessage = response.data.message;

          return sendBlogMessage;
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
