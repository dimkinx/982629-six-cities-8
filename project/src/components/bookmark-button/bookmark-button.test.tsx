import * as Redux from 'react-redux';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {Route, Router, Switch} from 'react-router-dom';
import BookmarkButton from './bookmark-button';
import {createMemoryHistory} from 'history';
import {datatype} from 'faker';
import {AppRoute, AuthStatus, BookmarkButtonType} from '../../common/const';

const history = createMemoryHistory();
const mockStore = configureMockStore();

const store = mockStore({
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

describe('Component: BookmarkButton', () => {
  store.dispatch = jest.fn();

  it('should render correctly', () => {
    render(
      <Redux.Provider store={store}>
        <Router history={history}>
          <BookmarkButton
            id={datatype.number().toString()}
            favoritesStatus={datatype.number({min: 0, max: 1})}
            buttonType={BookmarkButtonType.PlaceCard}
          />
        </Router>
      </Redux.Provider>);

    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByText(/To bookmarks/i)).toBeInTheDocument();
  });

  it('should redirect to /login after click provided the user isn\'t auth', () => {
    noAuthStore.dispatch = jest.fn();

    render(
      <Redux.Provider store={noAuthStore}>
        <Router history={history}>
          <Switch>
            <Route exact path={AppRoute.MainScreen}>
              <BookmarkButton
                id={datatype.number().toString()}
                favoritesStatus={datatype.number({min: 0, max: 1})}
                buttonType={BookmarkButtonType.PlaceCard}
              />
            </Route>
            <Route exact path={AppRoute.LoginScreen}>
              <h1>Login Screen</h1>
            </Route>
          </Switch>
        </Router>
      </Redux.Provider>);

    expect(screen.queryByText(/Login Screen/i)).toBeNull();
    userEvent.click(screen.getByRole('button'));
    expect(screen.getByText(/Login Screen/i)).toBeInTheDocument();
  });
});
