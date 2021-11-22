import * as Redux from 'react-redux';
import ReactRouter from 'react-router';
import {Router} from 'react-router-dom';
import {render, screen} from '@testing-library/react';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {createMemoryHistory} from 'history';
import {AuthStatus, RequestStatus} from '../../common/const';
import {createMockOffer, createMockOffers} from '../../mocks/offers';
import {createMockAuthData} from '../../mocks/auth-data';
import OfferScreen from './offer-screen';
import {createMockReviews} from '../../mocks/reviews';

const mockStore = configureMockStore();
const history = createMemoryHistory();
const mockOffer = createMockOffer();
const mockNearbyOffers = createMockOffers();
const mockReviews = createMockReviews();
const mockAuthData = createMockAuthData();

const store = mockStore({
  data: {
    offer: {
      data: mockOffer,
      requestStatus: RequestStatus.Success,
    },
    nearbyOffers: {
      data: mockNearbyOffers,
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
    auth: {
      status: AuthStatus.Auth,
      data: mockAuthData,
    },
  },
});

describe('Component: OfferScreen', () => {
  it('should render correctly', () => {
    jest.spyOn(ReactRouter, 'useParams').mockReturnValue({id: mockOffer.id.toString()});
    store.dispatch = jest.fn();

    render(
      <Redux.Provider store={store}>
        <Router history={history}>
          <OfferScreen />
        </Router>
      </Redux.Provider>);

    expect(screen.getByRole('heading', {level: 1})).toHaveTextContent(`${mockOffer.title}`);
  });
});
