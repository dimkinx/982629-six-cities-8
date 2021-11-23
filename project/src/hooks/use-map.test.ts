import {renderHook} from '@testing-library/react-hooks';
import useMap from './use-map';
import {createMockLocation} from '../mocks/offers';

const mockLocation = createMockLocation();

describe('Hook: useMap', () => {
  it('should render correctly', () => {
    const mapRef = {current: document.createElement('div')};
    const map = renderHook(() => useMap(mapRef, mockLocation)).result.current;

    expect(map).toBeInstanceOf(Object);
    expect(map?.getZoom()).toBe(mockLocation.zoom);
  });
});
