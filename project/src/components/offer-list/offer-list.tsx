import OfferCard from '../offer-card/offer-card';
import {OfferSettings} from '../../const';
import Offer from '../../types/offer';

type OfferListProps = {
  offerSittings: typeof OfferSettings.Main;
  offers: Offer[];
}

function OfferList({offerSittings, offers}: OfferListProps): JSX.Element {
  return (
    <div className={`${offerSittings.Modifier}__places-list`}>
      {offers.map((offer) => (
        <OfferCard
          key={offer.id.toString()}
          offerSittings={offerSittings}
          offer={offer}
        />
      ))}
    </div>
  );
}

export default OfferList;
