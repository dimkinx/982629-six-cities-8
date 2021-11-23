import {render, screen} from '@testing-library/react';
import * as Redux from 'react-redux';
import {Router} from 'react-router-dom';
import MainScreen from './main-screen';
import {createMemoryHistory} from 'history';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {AuthStatus, CityType, RequestStatus, SortingType} from '../../common/const';
import {createMockOffers} from '../../mocks/offers';

const mockStore = configureMockStore();
const history = createMemoryHistory();
const mockOffers = createMockOffers();

const emptyStore = mockStore({
  data: {
    offers: {
      data: [],
      requestStatus: RequestStatus.Unknown,
    },
  },
  user: {
    city: CityType.Paris,
    sort: SortingType.Popular,
    auth: {
      status: AuthStatus.Unknown,
    },
  },
});

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

describe('Component: MainScreen', () => {
  it('should render correctly without offers', () => {
    emptyStore.dispatch = jest.fn();

    render(
      <Redux.Provider store={emptyStore}>
        <Router history={history}>
          <MainScreen />
        </Router>
      </Redux.Provider>);

    expect(screen.getByRole('heading', {level: 1})).toHaveTextContent(/Cities/i);
    expect(screen.getByText(/No places to stay available/i)).toBeInTheDocument();
    expect(screen.getByText(/We could not find any property available at the moment in/i)).toBeInTheDocument();
  });

  it('should render correctly with offers', () => {
    store.dispatch = jest.fn();

    render(
      <Redux.Provider store={store}>
        <Router history={history}>
          <MainScreen />
        </Router>
      </Redux.Provider>);

    expect(screen.getByRole('heading', {level: 1})).toHaveTextContent(/Cities/i);
    expect(screen.getByText(/places to stay in/i)).toBeInTheDocument();
    expect(screen.getByTitle(/A JS library for interactive maps/i)).toHaveTextContent(/Leaflet/i);
  });
});
