import * as Redux from 'react-redux';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {AuthStatus} from '../../common/const';
import {createMockAuthData} from '../../mocks/auth-data';
import Header from './header';

const history = createMemoryHistory();
const mockStore = configureMockStore();
const mockAuthData = createMockAuthData();

const authStore = mockStore({
  user: {
    auth: {
      status: AuthStatus.Auth,
      data: mockAuthData,
    },
  },
});

const noAuthStore = mockStore({
  user: {
    auth: {
      status: AuthStatus.NoAuth,
      data: null,
    },
  },
});

describe('Component: Header', () => {
  it('should render correctly when status "AUTH"', () => {
    render(
      <Redux.Provider store={authStore}>
        <Router history={history}>
          <Header />
        </Router>
      </Redux.Provider>);

    expect(screen.getByText(/Sign out/i)).toBeInTheDocument();
    expect(screen.queryByText(/Sign in/i)).toBeNull();
  });

  it('should render correctly when status "NO_AUTH"', () => {
    render(
      <Redux.Provider store={noAuthStore}>
        <Router history={history}>
          <Header />
        </Router>
      </Redux.Provider>);

    expect(screen.getByText(/Sign in/i)).toBeInTheDocument();
    expect(screen.queryByText(/Sign out/i)).toBeNull();
  });
});
