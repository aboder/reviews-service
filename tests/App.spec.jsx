import React from 'react';
import { shallow } from 'enzyme';
import App from '../client/components/App';
import RatingsList from '../client/components/RatingsList';
import ReviewsList from '../client/components/ReviewsList';
import mockData from './mockData.js';

describe('App rendering', () => {
  const shallowReview = shallow(<App />);
  const reviewsList = shallowReview.find('ReviewsList');
  const ratingsList = shallowReview.find('RatingsList');
  test('App component should exist', () => {
    expect(shallowReview).toExist();
  });

  test('App should have the correct three children components', () => {
    expect(shallowReview.find('Header')).toExist();
    expect(reviewsList).toExist();
    expect(ratingsList).toExist();
  });

  test('App should pass the correct props to the correct components', () => {
    expect('placeholder').toEqual('placeholder');
  });
});

describe('Subcomponent rendering', () => {
  const shallowReviewsList = shallow(<ReviewsList reviews={mockData.reviews} />);
  const reviewsListItem = shallowReviewsList.find('ReviewsListItem');
  const shallowRatingsList = shallow(<RatingsList rating={mockData.rating} />);
  const ratingsListItem = shallowRatingsList.find('RatingsListItem');
  test('All subcomponents should render', () => {
    expect(reviewsListItem).toExist();
    expect(ratingsListItem).toExist();
  });
});
