import React, {Fragment, useEffect, useState} from 'react';
import {getStatefulItems} from '../../common/utils';
import {postReviewAction} from '../../store/api-actions';
import {useDispatch, useSelector} from 'react-redux';
import {State} from '../../types/state';
import {RequestStatus} from '../../common/const';
import {useParams} from 'react-router-dom';
import {OfferId} from '../../types/offer';

const ratings = [
  'terribly',
  'badly',
  'not bad',
  'good',
  'perfect',
];

function ReviewsForm(): JSX.Element {
  const {id} = useParams<OfferId>();

  const isLoading = useSelector((state: State) => state.review.requestStatus === RequestStatus.Loading);

  const [review, setReview] = useState({rating: 0, comment: ''});
  const [isDisabled, setIsDisabled] = useState(true);

  const dispatch = useDispatch();

  const isValid = Boolean(review.rating) && (review.comment.length >= 50 && review.comment.length <= 300);
  const statefulRatings = getStatefulItems(ratings, 'title').reverse();

  const handleFieldChange = (evt: {target: HTMLInputElement | HTMLTextAreaElement}) => {
    const {name, value} = evt.target;
    setReview({...review, [name]: name === 'rating' ? +value : value});
  };

  const handleFormSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    dispatch(postReviewAction(id, review));
    setReview({rating: 0, comment: ''});
  };

  useEffect(() => {
    setIsDisabled(!isValid);
  }, [isValid]);

  return (
    <form
      onSubmit={handleFormSubmit}
      className="reviews__form form"
      action="#"
      method="post"
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {statefulRatings.map((rating) => (
          <Fragment key={rating.id}>
            <input
              onChange={handleFieldChange}
              className="form__rating-input visually-hidden"
              name="rating"
              value={+rating.id + 1}
              id={`${+rating.id + 1}-stars`}
              type="radio"
              checked={+rating.id + 1 === review.rating}
              disabled={isLoading}
            />
            <label
              htmlFor={`${+rating.id + 1}-stars`}
              className="reviews__rating-label form__rating-label"
              title={rating.title}
            >
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star" />
              </svg>
            </label>
          </Fragment>
        ))}
      </div>
      <textarea
        onChange={handleFieldChange}
        className="reviews__textarea form__textarea"
        id="comment"
        name="comment"
        value={review.comment}
        placeholder="Tell how was your stay, what you like and what can be improved"
        minLength={50}
        maxLength={300}
        disabled={isLoading}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and
          describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={isDisabled || isLoading}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default ReviewsForm;
