import {configureMockStore} from '@jedmao/redux-mock-store';
import {createMemoryHistory} from 'history';
import {createMockOffers} from '../../mocks/offers';
import {AuthStatus, CityType, RequestStatus, SortingType} from '../../common/const';
import {render, screen} from '@testing-library/react';
import * as Redux from 'react-redux';
import {Router} from 'react-router-dom';
import MainScreenCities from './main-screen-cities';

const mockStore = configureMockStore();
const history = createMemoryHistory();
const mockOffers = createMockOffers();

const store = mockStore({
  data: {
    offers: {
      data: mockOffers,
      requestStatus: RequestStatus.Success,
    },
  },
  user: {
    city: CityType.Paris,
    sort: SortingType.Popular,
    auth: {
      status: AuthStatus.NoAuth,
    },
  },
});

describe('Component: MainScreenCities', () => {
  it('should render correctly', () => {
    store.dispatch = jest.fn();

    render(
      <Redux.Provider store={store}>
        <Router history={history}>
          <MainScreenCities />
        </Router>
      </Redux.Provider>);

    expect(screen.getByTestId('subtitle')).toHaveTextContent(/Places/i);
  });
});
