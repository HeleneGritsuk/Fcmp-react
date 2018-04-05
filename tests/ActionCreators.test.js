import {setSearchTerm, beginLogin, beginSendBlog, sendBlogSuccess, sendBlogError , loginSuccess,
loginError, beginLogout, logoutSuccess, logoutError, beginRegister, registerSuccess, registerError } from '../src/client/redux/actions/index.js';
import * as types from '../src/constants.js';

const mockData = {
  post: {
      author: "author",
      id: "5ac1134b9bc42c482c71e594",
      text: "China's defunct Tiangong 1 space station is hurtling toward Earth and expected to re-enter the atmosphere within the next day.\nMost of it should burn up on re-entry, so scientists say it poses only a …",
      title: "Defunct Chinese space lab set to re-enter Earth's atmosphere1",
      _id: "5ac624949e388c2b50786325",
      _v: 0
    },
  success: true
},
mockUserData = {email: "user@domen.ru", password: "passwd"}

describe('>>>A C T I O N --- Test ActionsCreators',()=>{
    it('+++ actionCreator setSearchTerm', () => {
        const search = setSearchTerm('a')
        expect(search).toEqual({type:types.SET_VISIBILITY_FILTER, payload: { text: 'a'}})
    });
    it('+++ actionCreator beginLogin', () => {
            const startLogin = beginLogin()
            expect(startLogin).toEqual({type:types.MANUAL_LOGIN_USER})
    });
    it('+++ actionCreator beginSendBlog', () => {
            const startSendBlog = beginSendBlog()
            expect(startSendBlog).toEqual({type:types.MANUAL_SEND_BLOG})
    });
    it('+++ actionCreator sendBlogSuccess', () => {
            const sendSuccess = sendBlogSuccess(mockData)
            expect(sendSuccess).toEqual({type:types.SEND_BLOG_SUCCESS, payload: mockData  })
    });
    it('+++ actionCreator sendBlogError', () => {
            const sendError = sendBlogError()
            expect(sendError).toEqual({type:types.SEND_BLOG_ERROR })
    });
    it('+++ actionCreator loginSuccess', () => {
            const logSuccess = loginSuccess(mockUserData)
            expect(logSuccess).toEqual({type:types.LOGIN_SUCCESS_USER, data: mockUserData  })
    });

    it('+++ actionCreator loginError', () => {
            const logError = loginError()
            expect(logError).toEqual({type:types.LOGIN_ERROR_USER })
    });
    it('+++ actionCreator beginLogout', () => {
            const startLogout = beginLogout()
            expect(startLogout).toEqual({type:types.LOGOUT_USER })
    });
    it('+++ actionCreator logoutSuccess', () => {
            const logSuccess = logoutSuccess()
            expect(logSuccess).toEqual({type:types.LOGOUT_SUCCESS_USER })
    });
    it('+++ actionCreator logoutError', () => {
            const logError = logoutError()
            expect(logError).toEqual({type:types.LOGOUT_ERROR_USER })
    });

    it('+++ actionCreator beginRegister', () => {
            const startRegister = beginRegister()
            expect(startRegister).toEqual({type:types.REGISTER_USER })
    });

    it('+++ actionCreator registerSuccess', () => {
            const regSuccess = registerSuccess()
            expect(regSuccess).toEqual({type:types.REGISTER_SUCCESS_USER })
    });

    it('+++ actionCreator registerError', () => {
            const regError = registerError()
            expect(regError).toEqual({type:types.REGISTER_ERROR_USER })
    });

});
