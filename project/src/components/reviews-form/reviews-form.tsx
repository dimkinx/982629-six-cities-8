import {FormEvent, Fragment, useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {postReviewAction} from '../../store/data/data-api-actions';
import {getIsReviewLoading} from '../../store/data/data-selectors';
import {getStatefulItems} from '../../common/utils';
import {CommentLengthLimit, RatingType} from '../../common/const';
import {OfferIdParamValue} from '../../types/offer';

const initialReviewState = {
  rating: 0,
  comment: '',
};

function ReviewsForm(): JSX.Element {
  const {id} = useParams<{id: OfferIdParamValue}>();

  const isReviewLoading = useSelector(getIsReviewLoading);

  const [review, setReview] = useState(initialReviewState);
  const [isDisabled, setIsDisabled] = useState(true);

  const dispatch = useDispatch();

  const isRatingValid = Boolean(review.rating);
  const isCommentValid = review.comment.length >= CommentLengthLimit.Min && review.comment.length <= CommentLengthLimit.Max;
  const statefulRatings = getStatefulItems(Object.values(RatingType), 'title').reverse();

  const handleFieldChange = (evt: {target: HTMLInputElement | HTMLTextAreaElement}) => {
    const {name, value} = evt.target;
    setReview({...review, [name]: name === 'rating' ? +value : value});
  };

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    dispatch(postReviewAction(id, review));
    setReview(initialReviewState);
  };

  useEffect(() => {
    setIsDisabled(!(isRatingValid && isCommentValid));
  }, [isRatingValid, isCommentValid]);

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
              value={Number(rating.id) + 1}
              id={`${Number(rating.id) + 1}-stars`}
              type="radio"
              checked={Number(rating.id) + 1 === review.rating}
              disabled={isReviewLoading}
              data-testid={`${Number(rating.id) + 1}-stars`}
            />
            <label
              htmlFor={`${Number(rating.id) + 1}-stars`}
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
        minLength={CommentLengthLimit.Min}
        maxLength={CommentLengthLimit.Max}
        disabled={isReviewLoading}
        data-testid="comment"
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and
          describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={isDisabled || isReviewLoading}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default ReviewsForm;
