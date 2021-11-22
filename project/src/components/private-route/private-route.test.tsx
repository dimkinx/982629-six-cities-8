import {Router, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import {render, screen} from '@testing-library/react';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {createMemoryHistory} from 'history';
import PrivateRoute from './private-route';
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

describe('Component: PrivateRoute', () => {
  beforeEach(() => {
    history.push(AppRoute.FavoritesScreen);
  });

  it('should render component for private route, when user authorized', () => {
    render(
      <Provider store={authStore}>
        <Router history={history}>
          <Route exact path={AppRoute.LoginScreen}>
            <h1>Public Route</h1>
          </Route>
          <PrivateRoute exact path={AppRoute.FavoritesScreen}>
            <h1>Private Route</h1>
          </PrivateRoute>
        </Router>
      </Provider>,
    );

    expect(screen.getByText(/Private Route/i)).toBeInTheDocument();
    expect(screen.queryByText(/Public Route/i)).toBeNull();
  });

  it('should render component for public route, when user not authorized', () => {
    render(
      <Provider store={noAuthStore}>
        <Router history={history}>
          <Route exact path={AppRoute.LoginScreen}>
            <h1>Public Route</h1>
          </Route>
          <PrivateRoute exact path={AppRoute.FavoritesScreen}>
            <h1>Private Route</h1>
          </PrivateRoute>
        </Router>
      </Provider>,
    );

    expect(screen.getByText(/Public Route/i)).toBeInTheDocument();
    expect(screen.queryByText(/Private Route/i)).toBeNull();
  });
});
