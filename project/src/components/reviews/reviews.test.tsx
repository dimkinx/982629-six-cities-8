import * as Redux from 'react-redux';
import {Router} from 'react-router-dom';
import {render, screen} from '@testing-library/react';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {createMemoryHistory} from 'history';
import {AuthStatus, RequestStatus} from '../../common/const';
import {createMockAuthData} from '../../mocks/auth-data';
import {createMockReviews} from '../../mocks/reviews';
import Reviews from './reviews';

const mockStore = configureMockStore();
const history = createMemoryHistory();
const mockReviews = createMockReviews();
const mockAuthData = createMockAuthData();

const store = mockStore({
  data: {
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

const noAuthStore = mockStore({
  data: {
    reviews: {
      data: mockReviews,
      requestStatus: RequestStatus.Success,
    },
    review: {
      requestStatus: RequestStatus.Unknown,
    },
  },
  user: {
    auth: {
      status: AuthStatus.NoAuth,
      data: null,
    },
  },
});

describe('Component: Reviews', () => {
  it('should render correctly', () => {
    store.dispatch = jest.fn();

    render(
      <Redux.Provider store={store}>
        <Router history={history}>
          <Reviews />
        </Router>
      </Redux.Provider>);

    expect(screen.getByRole('heading', {level: 2})).toHaveTextContent(/Reviews/i);
  });

  it('should be displayed Reviews Form for authorized user', () => {
    store.dispatch = jest.fn();

    render(
      <Redux.Provider store={store}>
        <Router history={history}>
          <Reviews />
        </Router>
      </Redux.Provider>);

    expect(screen.getByText(/Your review/i)).toBeInTheDocument();
  });

  it('shouldn\'t show up Reviews Form for unauthorized user', () => {
    noAuthStore.dispatch = jest.fn();

    render(
      <Redux.Provider store={noAuthStore}>
        <Router history={history}>
          <Reviews />
        </Router>
      </Redux.Provider>);

    expect(screen.queryByText(/Your review/i)).toBeNull();
  });
});
