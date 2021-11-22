import {Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import {render, screen} from '@testing-library/react';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {createMemoryHistory} from 'history';
import {createMockOffer, createMockOffers} from '../../mocks/offers';
import {createMockReviews} from '../../mocks/reviews';
import {createMockAuthData} from '../../mocks/auth-data';
import {AppRoute, AuthStatus, CityType, ErrorMessage, RequestStatus, SortingType} from '../../common/const';
import App from './app';

const mockStore = configureMockStore();
const mockOffer = createMockOffer();
const mockOffers = createMockOffers();
const mockNearbyOffers = createMockOffers();
const mockFavoriteOffers = createMockOffers();
const mockReviews = createMockReviews();
const mockAuthData = createMockAuthData();

const store = mockStore({
  data: {
    offer: {
      data: mockOffer,
      requestStatus: RequestStatus.Success,
    },
    offers: {
      data: mockOffers,
      requestStatus: RequestStatus.Success,
    },
    nearbyOffers: {
      data: mockNearbyOffers,
      requestStatus: RequestStatus.Success,
    },
    favoriteOffers: {
      data: mockFavoriteOffers,
      requestStatus: RequestStatus.Success,
    },
    reviews: {
      data: mockReviews,
      requestStatus: RequestStatus.Success,
    },
    review: {
      requestStatus: RequestStatus.Success,
    },
  },
  user: {
    city: CityType.Paris,
    sort: SortingType.Popular,
    auth: {
      data: mockAuthData,
      status: AuthStatus.Auth,
      error: ErrorMessage.NoFailure,
    },
  },
});

const noAuthStore = mockStore({
  user: {
    auth: {
      status: AuthStatus.NoAuth,
    },
  },
});

const history = createMemoryHistory();
const fakeApp = (
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>
);

describe('Application Routing', () => {
  store.dispatch = jest.fn();

  it('should render "MainScreen" when user navigate to "/"', () => {
    history.push(AppRoute.MainScreen);
    render(fakeApp);

    expect(screen.getByRole('heading', {level: 1})).toHaveTextContent(/Cities/i);
  });

  it('should render "LoginScreen" when user navigate to "/login"', () => {
    noAuthStore.dispatch = jest.fn();
    history.push(AppRoute.LoginScreen);
    render(
      <Provider store={noAuthStore}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>);

    expect(screen.getByRole('heading', {level: 1})).toHaveTextContent(/Sign in/i);
  });

  it('should render "FavoritesScreen" when user navigate to "/favorites"', () => {
    history.push(AppRoute.FavoritesScreen);
    render(fakeApp);

    expect(screen.getByRole('heading', {level: 1})).toHaveTextContent(/Saved listing/i);
  });

  it('should render "OfferScreen" when user navigate to "/offer/:id"', () => {
    history.push(`/offer/${mockOffer.id}`);
    render(fakeApp);

    expect(screen.getByRole('heading', {level: 1})).toHaveTextContent(new RegExp(`${mockOffer.title}`));
  });

  it('should render "NotFoundScreen" when user navigate to non-existent route', () => {
    history.push('/non-existent-route');
    render(fakeApp);

    expect(screen.getByRole('heading', {level: 1})).toHaveTextContent(/404/i);
  });
});
