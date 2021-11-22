import * as Redux from 'react-redux';
import {Router} from 'react-router-dom';
import {render, screen} from '@testing-library/react';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {createMemoryHistory} from 'history';
import {AuthStatus, OfferType, RequestStatus} from '../../common/const';
import {createMockOffers} from '../../mocks/offers';
import {createMockAuthData} from '../../mocks/auth-data';
import OfferList from './offer-list';

const mockStore = configureMockStore();
const history = createMemoryHistory();
const mockOffers = createMockOffers();
const mockAuthData = createMockAuthData();

const store = mockStore({
  data: {
    offers: {
      data: mockOffers,
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

describe('Component: OfferList', () => {
  it('should render correctly', () => {
    render(
      <Redux.Provider store={store}>
        <Router history={history}>
          <OfferList
            offers={mockOffers}
            offerType={OfferType.Main}
          />
        </Router>
      </Redux.Provider>);

    expect(screen.getByTestId('places-list')).toBeInTheDocument();
  });
});
