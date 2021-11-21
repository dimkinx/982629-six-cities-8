import * as Redux from 'react-redux';
import {render, screen} from '@testing-library/react';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {Router} from 'react-router-dom';
import BookmarkButton from './bookmark-button';
import {createMemoryHistory} from 'history';
import {datatype} from 'faker';
import {AuthStatus, BookmarkButtonType, CityType, ErrorMessage} from '../../common/const';

const history = createMemoryHistory();
const mockStore = configureMockStore();

const store = mockStore({
  user: {
    city: CityType.Paris,
    auth: {
      data: null,
      status: AuthStatus.NoAuth,
      error: ErrorMessage.NoFailure,
    },
  },
});

describe('Component: BookmarkButton', () => {
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
});
