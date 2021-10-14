import {Fragment, useState, useEffect} from 'react';
import {getStatefulItems} from '../../common/utils';

const ratings = [
  'terribly',
  'badly',
  'not bad',
  'good',
  'perfect',
];

function ReviewForm(): JSX.Element {
  const [state, setState] = useState({rating: 0, review: ''});

  const statefulRatings = getStatefulItems(ratings, 'title').reverse();

  const handleFieldChange = (evt: {target: HTMLInputElement | HTMLTextAreaElement}) => {
    const {name, value} = evt.target;
    setState({...state, [name]: value});
  };

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log(state);
  });

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {statefulRatings.map((rating) => {
          const ratingValue = rating.id + 1;

          return (
            <Fragment key={rating.id}>
              <input
                onChange={handleFieldChange}
                className="form__rating-input visually-hidden"
                name="rating"
                value={ratingValue}
                id={`${ratingValue}-stars`}
                type="radio"
              />
              <label
                htmlFor={`${ratingValue}-stars`}
                className="reviews__rating-label form__rating-label"
                title={rating.title}
              >
                <svg className="form__star-image" width="37" height="33">
                  <use xlinkHref="#icon-star" />
                </svg>
              </label>
            </Fragment>
          );
        })}
      </div>
      <textarea
        onChange={handleFieldChange}
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        value={state.review}
        placeholder="Tell how was your stay, what you like and what can be improved"
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and
          describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled>Submit</button>
      </div>
    </form>
  );
}

export default ReviewForm;
