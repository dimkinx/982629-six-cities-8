import {useState} from 'react';
import OfferCard from '../offer-card/offer-card';
import {OfferType, OfferListSittingsType} from '../../types/offer-types';

type OfferListProps = {
  offerListSittings: OfferListSittingsType;
  offers: OfferType[];
}

function OfferList({offerListSittings, offers}: OfferListProps): JSX.Element {
  const [activeCardId, setActiveCardId] = useState<null | number>(null);

  // eslint-disable-next-line no-console
  console.log(activeCardId);

  return (
    <div className={offerListSittings.ListClassName}>
      {offers.map((offer) => (
        <OfferCard
          key={offer.id.toString()}
          offerListSittings={offerListSittings}
          offer={offer}
          setActiveCardId={setActiveCardId}
        />
      ))}
    </div>
  );
}

export default OfferList;
