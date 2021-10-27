import ReviewsItem from '../reviews-item/reviews-Item';
import {Review} from '../../types/review-types';

type ReviewsListProps = {
  reviews: Review[];
}

function ReviewsList({reviews}: ReviewsListProps): JSX.Element {
  return (
    <ul className="reviews__list">
      {reviews.map((review) => (
        <ReviewsItem
          key={review.id}
          review={review}
        />
      ))}
    </ul>
  );
}

export default ReviewsList;
