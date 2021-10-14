import {useParams} from 'react-router-dom';
import Header from '../header/header';
import OfferList from '../offer-list/offer-list';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import {addClassModifier, getRatingPercentage, getStatefulItems} from '../../common/utils';
import {getDateForHuman, getDateForRobot} from '../../common/date-time-utils';
import {OfferListSittingsType, OfferType} from '../../types/offer-types';
import {ReviewType} from '../../types/review-types';

type OfferScreenProps = {
  offerListSittings: OfferListSittingsType;
  offers: OfferType[];
  reviews: ReviewType[];
}

function OfferScreen({offerListSittings, offers, reviews}: OfferScreenProps): JSX.Element {
  const {id} = useParams() as {id: string};
  const property = offers.find((offer) => offer.id.toString() === id);

  if (!property) {
    return <NotFoundScreen />;
  }

  const {images, isPremium, title, isFavorite, rating, type, bedrooms, maxAdults, price, goods, description, host} = property;
  const {avatarUrl, isPro, name} = host;

  const statefulImages = getStatefulItems(images, 'src');
  const statefulGoods = getStatefulItems(goods, 'name');
  const statefulDescriptions = getStatefulItems(description.split('\n'), 'text');

  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {statefulImages.map((image) => (
                <div
                  key={image.id.toString()}
                  className="property__image-wrapper"
                >
                  <img
                    className="property__image"
                    src={image.src}
                    alt="Some kind of studio"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {isPremium && (
                <div className="property__mark">
                  <span>Premium</span>
                </div>
              )}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {title}
                </h1>
                <button
                  className={`${addClassModifier(isFavorite, 'property__bookmark-button')} button`}
                  type="button"
                >
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark" />
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: getRatingPercentage(rating)}} />
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {type[0].toUpperCase().concat(type.slice(1))}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {statefulGoods.map((good) => (
                    <li
                      key={good.id.toString()}
                      className="property__inside-item"
                    >
                      {good.name}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className={`${addClassModifier(isPro, 'property__avatar-wrapper', 'pro')} user__avatar-wrapper`}>
                    <img className="property__avatar user__avatar" src={avatarUrl} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    {name}
                  </span>
                  {isPro && (
                    <span className="property__user-status">
                      Pro
                    </span>
                  )}
                </div>
                <div className="property__description">
                  {statefulDescriptions.map((paragraph) => (
                    <p
                      key={paragraph.id}
                      className="property__text"
                    >
                      {paragraph.text}
                    </p>
                  ))}
                </div>
              </div>
              <section className="property__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
                <ul className="reviews__list">
                  {reviews.map((review) => {
                    const {comment, date: reviewDate, id: reviewId, rating: reviewRating, user: {avatarUrl: reviewUserAvatarUrl, name: reviewUserName}} = review;
                    return (
                      <li
                        key={reviewId}
                        className="reviews__item"
                      >
                        <div className="reviews__user user">
                          <div className="reviews__avatar-wrapper user__avatar-wrapper">
                            <img
                              className="reviews__avatar user__avatar"
                              src={reviewUserAvatarUrl}
                              width="54"
                              height="54"
                              alt="Reviews avatar"
                            />
                          </div>
                          <span className="reviews__user-name">
                            {reviewUserName}
                          </span>
                        </div>
                        <div className="reviews__info">
                          <div className="reviews__rating rating">
                            <div className="reviews__stars rating__stars">
                              <span style={{width: getRatingPercentage(reviewRating)}} />
                              <span className="visually-hidden">Rating</span>
                            </div>
                          </div>
                          <p className="reviews__text">
                            {comment}
                          </p>
                          <time
                            className="reviews__time"
                            dateTime={getDateForRobot(reviewDate)}
                          >
                            {getDateForHuman(reviewDate)}
                          </time>
                        </div>
                      </li>
                    );
                  })}
                </ul>
                <form className="reviews__form form" action="#" method="post">
                  <label className="reviews__label form__label" htmlFor="review">Your review</label>
                  <div className="reviews__rating-form form__rating">
                    <input className="form__rating-input visually-hidden" name="rating" value="5" id="5-stars" type="radio" />
                    <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
                      <svg className="form__star-image" width="37" height="33">
                        <use xlinkHref="#icon-star" />
                      </svg>
                    </label>

                    <input className="form__rating-input visually-hidden" name="rating" value="4" id="4-stars" type="radio" />
                    <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
                      <svg className="form__star-image" width="37" height="33">
                        <use xlinkHref="#icon-star" />
                      </svg>
                    </label>

                    <input className="form__rating-input visually-hidden" name="rating" value="3" id="3-stars" type="radio" />
                    <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
                      <svg className="form__star-image" width="37" height="33">
                        <use xlinkHref="#icon-star" />
                      </svg>
                    </label>

                    <input className="form__rating-input visually-hidden" name="rating" value="2" id="2-stars" type="radio" />
                    <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
                      <svg className="form__star-image" width="37" height="33">
                        <use xlinkHref="#icon-star" />
                      </svg>
                    </label>

                    <input className="form__rating-input visually-hidden" name="rating" value="1" id="1-star" type="radio" />
                    <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
                      <svg className="form__star-image" width="37" height="33">
                        <use xlinkHref="#icon-star"/>
                      </svg>
                    </label>
                  </div>
                  <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" />
                  <div className="reviews__button-wrapper">
                    <p className="reviews__help">
                      To submit review please make sure to set <span className="reviews__star">rating</span> and
                      describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
                    </p>
                    <button className="reviews__submit form__submit button" type="submit" disabled>Submit</button>
                  </div>
                </form>
              </section>
            </div>
          </div>
          <section className="property__map map" />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <OfferList
              offerListSittings={offerListSittings}
              offers={offers.slice(0, offerListSittings.MaxCount)}
            />
          </section>
        </div>
      </main>
    </div>
  );
}

export default OfferScreen;
