import OfferCard from '../offer-card/offer-card';
import {Offer} from '../../types/offer';
import {OfferType} from '../../common/const';
import {memo} from 'react';

type OfferListProps = {
  offers: Offer[];
  offerType: OfferType;
  onActiveCardIdSelect?: (id: null | number) => void;
}

function OfferList(props: OfferListProps): JSX.Element {
  const {offers, offerType, onActiveCardIdSelect} = props;

  return (
    <div
      className={`${offerType === OfferType.Main ? `${offerType}__places-list tabs__content` : `${offerType}__list`} places__list`}
      data-testid="places-list"
    >
      {offers.map((offer) => (
        <OfferCard
          key={offer.id}
          offer={offer}
          offerType={offerType}
          onActiveCardIdSelect={onActiveCardIdSelect}
        />
      ))}
    </div>
  );
}

export default memo(OfferList);
