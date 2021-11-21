import * as Redux from 'react-redux';
import {Router} from 'react-router-dom';
import {render, screen} from '@testing-library/react';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {createMemoryHistory} from 'history';
import OfferCard from './offer-card';
import {AuthStatus, OfferType, RequestStatus} from '../../common/const';
import {createMockOffer} from '../../mocks/offers';
import {createMockAuthData} from '../../mocks/auth-data';

const mockStore = configureMockStore();
const history = createMemoryHistory();
const mockOffer = createMockOffer();
const mockAuthData = createMockAuthData();

const store = mockStore({
  data: {
    offer: {
      data: mockOffer,
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

describe('Component: OfferCard', () => {
  it('should render correctly', () => {
    render(
      <Redux.Provider store={store}>
        <Router history={history}>
          <OfferCard
            offer={mockOffer}
            offerType={OfferType.Main}
          />
        </Router>
      </Redux.Provider>);

    expect(screen.getByRole('heading', {level: 2})).toHaveTextContent(`${mockOffer.title}`);
  });
});
