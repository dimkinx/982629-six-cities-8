import {render, screen} from '@testing-library/react';
import Map from './map';
import {createMockOffer, createMockOffers} from '../../mocks/offers';

const mockOffers = createMockOffers();
const mockOffer = createMockOffer();
const mockCityLocation = mockOffer.city.location;

describe('Component: Map', () => {
  it('should render correctly', () => {
    render(
      <Map
        className="cities__map"
        cityLocation={mockCityLocation}
        offers={mockOffers}
      />);

    expect(screen.getByTitle(/A JS library for interactive maps/i)).toHaveTextContent(/Leaflet/i);
  });
});
