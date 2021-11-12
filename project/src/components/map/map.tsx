import {Icon, Marker} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {useEffect, useRef} from 'react';
import useMap from '../../hooks/use-map';
import {Location, Offer} from '../../types/offer';
import {MapIconParams} from '../../common/const';

type MapProps = {
  className: string;
  cityLocation: Location | undefined;
  offers: Offer[];
  activeCardId?: null | number;
}

const defaultCustomIcon = new Icon({
  iconUrl: MapIconParams.DefaultImgUrl,
  iconSize: [
    MapIconParams.Size.Width,
    MapIconParams.Size.Height,
  ],
  iconAnchor: [
    MapIconParams.AnchorCoordinate.X,
    MapIconParams.AnchorCoordinate.Y,
  ],
});

const currentCustomIcon = new Icon({
  iconUrl: MapIconParams.ActiveImgUrl,
  iconSize: [
    MapIconParams.Size.Width,
    MapIconParams.Size.Height,
  ],
  iconAnchor: [
    MapIconParams.AnchorCoordinate.X,
    MapIconParams.AnchorCoordinate.Y,
  ],
});

function Map({className, cityLocation, offers, activeCardId}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, cityLocation);

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

      if (cityLocation) {
        map.setView(
          [
            cityLocation.latitude,
            cityLocation.longitude,
          ],
          cityLocation.zoom,
        );
      }

      if (activeCardId) {
        const activeOffer: Offer | undefined = offers.find((offer) => offer.id === activeCardId);

        activeOffer && map.panTo(
          [
            activeOffer.location.latitude,
            activeOffer.location.longitude,
          ],
        );
      }
    }
  }, [map, cityLocation, offers, activeCardId]);

  return (
    <section
      className={`${className} map`}
      ref={mapRef}
    />
  );
}

export default Map;
