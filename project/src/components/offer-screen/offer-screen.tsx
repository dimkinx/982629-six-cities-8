import {useParams} from 'react-router-dom';
import Header from '../header/header';
import OfferList from '../offer-list/offer-list';
import ReviewsList from '../reviews-list/reviews-list';
import ReviewsForm from '../reviews-form/reviews-form';
import Map from '../map/map';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import {addClassModifier, getRatingPercentage, getStatefulItems} from '../../common/utils';
import {Offer} from '../../types/offer';
import {Review} from '../../types/review';
import {OfferType} from '../../common/const';

type OfferScreenProps = {
  offers: Offer[];
  reviews: Review[];
}

function OfferScreen({offers, reviews}: OfferScreenProps): JSX.Element {
  const {id} = useParams() as {id: string};
  const offer = offers.find((item) => item.id.toString() === id);

  if (!offer) {
    return <NotFoundScreen />;
  }

  const {images, isPremium, title, isFavorite, rating, type, bedrooms, maxAdults, price, goods, description, host} = offer;
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
                  key={image.id}
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
                      key={good.id}
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
                <ReviewsList
                  reviews={reviews}
                />
                <ReviewsForm />
              </section>
            </div>
          </div>
          <Map
            className="property__map"
            cityLocation={offer.city.location}
            offers={offers.slice(0, 3)}
          />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <OfferList
              offers={offers.slice(0, 3)}
              offerType={OfferType.Near}
            />
          </section>
        </div>
      </main>
    </div>
  );
}

export default OfferScreen;
