import {useState} from 'react';
import OfferCard from '../offer-card/offer-card';
import {Offer} from '../../types/offer-types';

type OfferListProps = {
  offers: Offer[];
  offerType: string;
}

function OfferList({offers, offerType}: OfferListProps): JSX.Element {
  const [activeCardId, setActiveCardId] = useState<null | number>(null);

  // eslint-disable-next-line no-console
  console.log(activeCardId);

  return (
    <div className={`${offerType === 'cities' ? `${offerType}__places-list tabs__content` : `${offerType}__list`} places__list`}>
      {offers.map((offer) => (
        <OfferCard
          key={offer.id}
          offer={offer}
          offerType={offerType}
          onActiveCardIdSelect={setActiveCardId}
        />
      ))}
    </div>
  );
}

export default OfferList;
