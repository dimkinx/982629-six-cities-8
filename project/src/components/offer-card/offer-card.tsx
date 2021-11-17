import {memo} from 'react';
import {Link} from 'react-router-dom';
import {AppRoute, BookmarkButtonType, OfferCardImgSize, OfferType} from '../../common/const';
import {getRatingPercentage} from '../../common/utils';
import {Offer} from '../../types/offer';
import BookmarkButton from '../bookmark-button/bookmark-button';

type OfferCardProps = {
  offer: Offer;
  offerType: OfferType;
  onActiveCardIdSelect?: (id: null | number) => void;
}

function OfferCard({offer, offerType, onActiveCardIdSelect}: OfferCardProps): JSX.Element {
  const {id, isPremium, previewImage, price, isFavorite, rating, title, type} = offer;

  const handleMouseEnter = () => onActiveCardIdSelect && onActiveCardIdSelect(id);
  const handleMouseLeave = () => onActiveCardIdSelect && onActiveCardIdSelect(null);

  return (
    <article
      className={`${offerType === OfferType.Main ? `${offerType}__place-card` : `${offerType}__card`} place-card`}
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
            width={offerType === OfferType.Favorites ? OfferCardImgSize.Favorites.Width : OfferCardImgSize.Nearby.Width}
            height={offerType === OfferType.Favorites ? OfferCardImgSize.Favorites.Height : OfferCardImgSize.Nearby.Height}
            alt="Some place"
          />
        </Link>
      </div>
      <div className={`${offerType === OfferType.Favorites && 'favorites__card-info'} place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <BookmarkButton
            id={{id: id.toString()}}
            favoritesStatus={Number(!isFavorite)}
            buttonType={BookmarkButtonType.PlaceCard}
          />
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

export default memo(OfferCard);
