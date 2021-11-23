import * as Redux from 'react-redux';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {configureMockStore} from '@jedmao/redux-mock-store';
import FavoritesScreen from './favorites-screen';
import {AuthStatus, RequestStatus} from '../../common/const';
import {createMockOffers} from '../../mocks/offers';

const history = createMemoryHistory();
const mockStore = configureMockStore();
const mockFavoriteOffers = createMockOffers().map((offer) => ({...offer, isFavorite: true}));

const emptyStore = mockStore({
  data: {
    favoriteOffers: {
      data: [],
      requestStatus: RequestStatus.Unknown,
    },
  },
  user: {
    auth: {
      status: AuthStatus.Unknown,
    },
  },
});

const store = mockStore({
  data: {
    favoriteOffers: {
      data: mockFavoriteOffers,
      requestStatus: RequestStatus.Success,
    },
  },
  user: {
    auth: {
      status: AuthStatus.NoAuth,
    },
  },
});

describe('Component: FavoritesScreen', () => {
  it('should render correctly without favorite offers', () => {
    emptyStore.dispatch = jest.fn();

    render(
      <Redux.Provider store={emptyStore}>
        <Router history={history}>
          <FavoritesScreen />
        </Router>
      </Redux.Provider>);

    expect(screen.getByRole('heading', {level: 1})).toHaveTextContent(/Favorites \(empty\)/i);
  });

  it('should render correctly with favorite offers', () => {
    store.dispatch = jest.fn();

    render(
      <Redux.Provider store={store}>
        <Router history={history}>
          <FavoritesScreen />
        </Router>
      </Redux.Provider>);

    expect(screen.getByRole('heading', {level: 1})).toHaveTextContent(/Saved listing/i);
  });
});
