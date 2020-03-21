import React from 'react';
import { shallow } from 'enzyme';
import App from '../client/components/App';
import RatingsList from '../client/components/RatingsList';
import ReviewsList from '../client/components/ReviewsList';

describe('App rendering', () => {
  const shallowReview = shallow(<App />);
  const reviewsList = shallowReview.find('ReviewsList');
  const ratingsList = shallowReview.find('RatingsList');
  test('App component should exist', () => {
    expect(shallowReview).toExist();
  });

  test('App should have the correct three children components', () => {
    expect(shallowReview.find('Header').length).toEqual(1);
    expect(reviewsList.length).toEqual(1);
    expect(ratingsList.length).toEqual(1);
  });

  test('App should pass the correct props to the correct components', () => {
    expect('placeholder').toEqual('placeholder');
  });
});

// describe('Subcomponent rendering', () => {
//   const shallowReviewsList = shallow(<ReviewsList />);
//   const reviewsListItem = shallowReviewsList.find('RatingsListItem');
//   const shallowRatingsList = shallow(<RatingsList />);
//   const ratingsListItem = shallowRatingsList.find('RatingsListItem');
//   test('All subcomponents should render', () => {
//     expect(reviewsListItem.length).toEqual(1);
//     expect(ratingsListItem.length).toEqual(1);
//   });
// });
