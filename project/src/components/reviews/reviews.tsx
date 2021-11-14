import React from 'react';
import ReviewsItem from '../reviews-item/reviews-item';
import ReviewsForm from '../reviews-form/reviews-form';
import {useSelector} from 'react-redux';
import {AuthStatus, PropertyParams} from '../../common/const';
import {State} from '../../types/state';
import {compareReviewsByDate} from '../../common/date-time-utils';

function Reviews(): JSX.Element {
  const isAuthorized = useSelector((state: State) => state.user.auth.status === AuthStatus.Auth);
  const reviews = useSelector((state: State) => state.data.reviews.data.slice(0, PropertyParams.ReviewsMaxCount).sort(compareReviewsByDate));

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {reviews.map((review) => (
          <ReviewsItem
            key={review.id}
            review={review}
          />
        ))}
      </ul>
      {isAuthorized && <ReviewsForm />}
    </section>
  );
}

export default Reviews;
