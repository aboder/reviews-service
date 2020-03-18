import React from 'react';
import { shallow } from 'enzyme';
import Review from './Review.jsx'

test('Review component should exist', () => {
  const shallowReview = shallow(<Review />);
  expect(shallowReview).toExist();
});
