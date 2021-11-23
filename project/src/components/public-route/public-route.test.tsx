import {Router, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import {render, screen} from '@testing-library/react';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {createMemoryHistory} from 'history';
import PublicRoute from './public-route';
import {AppRoute, AuthStatus} from '../../common/const';

const mockStore = configureMockStore();
const history = createMemoryHistory();

const authStore = mockStore({
  user: {
    auth: {
      status: AuthStatus.Auth,
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

describe('Component: PublicRoute', () => {
  beforeEach(() => {
    history.push(AppRoute.LoginScreen);
  });

  it('should render component for public route, when user not authorized', () => {
    render(
      <Provider store={noAuthStore}>
        <Router history={history}>
          <Route exact path={AppRoute.MainScreen}>
            <h1>Another Route</h1>
          </Route>
          <PublicRoute exact path={AppRoute.LoginScreen}>
            <h1>Public Route</h1>
          </PublicRoute>
        </Router>
      </Provider>,
    );

    expect(screen.getByText(/Public Route/i)).toBeInTheDocument();
    expect(screen.queryByText(/Another Route/i)).toBeNull();
  });

  it('should render component for another route, when user authorized', () => {
    render(
      <Provider store={authStore}>
        <Router history={history}>
          <Route exact path={AppRoute.MainScreen}>
            <h1>Another Route</h1>
          </Route>
          <PublicRoute exact path={AppRoute.LoginScreen}>
            <h1>Public Route</h1>
          </PublicRoute>
        </Router>
      </Provider>,
    );

    expect(screen.getByText(/Another Route/i)).toBeInTheDocument();
    expect(screen.queryByText(/Public Route/i)).toBeNull();
  });
});
