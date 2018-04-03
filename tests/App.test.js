import React from 'react';
import App from '../src/client/components/App';
import renderer from 'react-test-renderer';

describe('App', () => {
  it('should render App correctly', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
