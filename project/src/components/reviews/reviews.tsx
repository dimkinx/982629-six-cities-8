import {useSelector} from 'react-redux';
import {getIsAuthorized} from '../../store/user/user-selectors';
import {getSortedReviews} from '../../store/data/data-selectors';
import ReviewsItem from '../reviews-item/reviews-item';
import ReviewsForm from '../reviews-form/reviews-form';

function Reviews(): JSX.Element {
  const isAuthorized = useSelector(getIsAuthorized);
  const reviews = useSelector(getSortedReviews);

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
