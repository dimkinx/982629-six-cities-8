import {Icon, Marker} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {useEffect, useRef} from 'react';
import useMap from '../../hooks/use-map';
import {Offer} from '../../types/offer-types';

type MapProps = {
  offers: Offer[];
  activeCardId: null | number;
}

const defaultCustomIcon = new Icon({
  iconUrl: 'img/pin.svg',
  iconSize: [27, 39],
  iconAnchor: [13, 39],
});

const currentCustomIcon = new Icon({
  iconUrl: 'img/pin-active.svg',
  iconSize: [27, 39],
  iconAnchor: [13, 39],
});

function Map({offers, activeCardId}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, offers[0].city.location);

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude,
        });

        marker
          .setIcon(
            activeCardId !== null && offer.id === activeCardId
              ? currentCustomIcon
              : defaultCustomIcon,
          )
          .addTo(map);
      });
    }
  }, [map, offers, activeCardId]);

  return (
    <section
      className="cities__map map"
      ref={mapRef}
    />
  );
}

export default Map;
