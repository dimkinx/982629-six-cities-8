import {useState} from 'react';
import OfferCard from '../offer-card/offer-card';
import {OfferType, OfferSittingsType} from '../../types/offer-types';

type OfferListProps = {
  offerSittings: OfferSittingsType;
  offers: OfferType[];
}

function OfferList({offerSittings, offers}: OfferListProps): JSX.Element {
  const [activeCardId, setActiveCardId] = useState<null | number>(null);

  // eslint-disable-next-line no-console
  console.log(activeCardId);

  return (
    <div className={offerSittings.ListClassName}>
      {offers.map((offer) => (
        <OfferCard
          key={offer.id.toString()}
          offerSittings={offerSittings}
          offer={offer}
          setActiveCardId={setActiveCardId}
        />
      ))}
    </div>
  );
}

export default OfferList;
