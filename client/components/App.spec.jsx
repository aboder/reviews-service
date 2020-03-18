import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App rendering', () => {
  test('App component should exist', () => {
    const shallowReview = shallow(<App />);
    expect(shallowReview).toExist();
  });
});
