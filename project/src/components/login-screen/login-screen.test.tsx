import * as Redux from 'react-redux';
import {Route, Router, Switch} from 'react-router-dom';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {createMemoryHistory} from 'history';
import LoginScreen from './login-screen';
import {AppRoute, CityType} from '../../common/const';

const mockStore = configureMockStore();
const history = createMemoryHistory();

const store = mockStore({
  user: {
    city: CityType.Cologne,
  },
});

describe('Component: LoginScreen', () => {
  store.dispatch = jest.fn();

  it('should render correctly', () => {
    render(
      <Redux.Provider store={store}>
        <Router history={history}>
          <LoginScreen />
        </Router>
      </Redux.Provider>);

    expect(screen.getByRole('heading', {level: 1})).toHaveTextContent(/Sign in/i);

    userEvent.type(screen.getByTestId('login'), 'admin');
    userEvent.type(screen.getByTestId('password'), 'qwerty');

    expect(screen.getByDisplayValue(/admin/i)).toBeInTheDocument();
    expect(screen.getByDisplayValue(/qwerty/i)).toBeInTheDocument();
  });

  it('should redirect to root url when user clicked to link', () => {
    history.push('/fake');

    render(
      <Redux.Provider store={store}>
        <Router history={history}>
          <Switch>
            <Route path={AppRoute.MainScreen} exact>
              <h1>This is main page</h1>
            </Route>
            <Route>
              <LoginScreen />
            </Route>
          </Switch>
        </Router>
      </Redux.Provider>);

    expect(screen.queryByText(/This is main page/i)).toBeNull();
    userEvent.click(screen.getByTestId('locations__item-link'));
    expect(screen.queryByText(/This is main page/i)).toBeInTheDocument();
  });
});
