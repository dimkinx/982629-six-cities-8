import {render, screen} from '@testing-library/react';
import Map from './map';
import {createMockOffers} from '../../mocks/offers';

const mockOffers = createMockOffers();
const mockCityLocation = mockOffers[0].city.location;

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
