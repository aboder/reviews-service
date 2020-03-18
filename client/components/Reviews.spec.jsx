import React from 'react';
import { shallow } from 'enzyme';
import Reviews from './Reviews.jsx'

test('Review component should exist', () => {
  const shallowReview = shallow(<Reviews />);
  expect(shallowReview).toExist();
});
