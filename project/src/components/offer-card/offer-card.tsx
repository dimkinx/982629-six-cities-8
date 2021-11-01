import {Link} from 'react-router-dom';
import {AppRoute} from '../../common/const';
import {addClassModifier, getRatingPercentage} from '../../common/utils';
import {Offer} from '../../types/offer';

type OfferCardProps = {
  offer: Offer;
  offerType: string;
  onActiveCardIdSelect?: (id: null | number) => void;
}

function OfferCard({offer, offerType, onActiveCardIdSelect}: OfferCardProps): JSX.Element {
  const {id, isPremium, previewImage, price, isFavorite, rating, title, type} = offer;

  const handleMouseEnter = () => onActiveCardIdSelect && onActiveCardIdSelect(id);
  const handleMouseLeave = () => onActiveCardIdSelect && onActiveCardIdSelect(null);

  return (
    <article
      className={`${offerType === 'cities' ? `${offerType}__place-card` : `${offerType}__card`} place-card`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className={`${offerType}__image-wrapper place-card__image-wrapper`}>
        <Link to={`${AppRoute.Offer}${id}`}>
          <img
            className="place-card__image"
            src={previewImage}
            width={offerType === 'favorites' ? '150' : '260'}
            height={offerType === 'favorites' ? '110' : '200'}
            alt="Some place"
          />
        </Link>
      </div>
      <div className={`${offerType === 'favorites' && 'favorites__card-info'} place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={`${addClassModifier(isFavorite, 'place-card__bookmark-button')} button`}
            type="button"
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: getRatingPercentage(rating)}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Offer}${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default OfferCard;
