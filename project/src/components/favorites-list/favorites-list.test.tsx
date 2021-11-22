import * as Redux from 'react-redux';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import FavoritesList from './favorites-list';
import {createMockOffers} from '../../mocks/offers';
import {createMemoryHistory} from 'history';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {AuthStatus, RequestStatus} from '../../common/const';

const history = createMemoryHistory();
const mockStore = configureMockStore();
const mockFavoriteOffers = createMockOffers();

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

describe('Component: FavoritesList', () => {
  it('should render correctly', () => {
    store.dispatch = jest.fn();

    render(
      <Redux.Provider store={store}>
        <Router history={history}>
          <FavoritesList />
        </Router>
      </Redux.Provider>);

    expect(screen.getByTestId('favorites__list')).toBeInTheDocument();
  });
});
