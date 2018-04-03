import React from 'react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

import RegisterPage from '../src/client/components/RegisterPage';


const mockStore = configureStore();
const initialState = {
  posts: [],
  user: {isWaiting: false, authenticated: false, email: ""},
  visibilityFilter : ""
};
describe('RegisterPage', () => {
  let wrapper;
  let store;

  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = mount(
        <Provider store={store}>
          <RegisterPage />
        </Provider>,
    );
  });

  it('renders a email input', () => {
    expect(wrapper.find('[type="email"]').length).toEqual(1);
  });

  it('renders a password input', () => {
    expect(wrapper.find('[type="password"]').length).toEqual(1);
  });
});
