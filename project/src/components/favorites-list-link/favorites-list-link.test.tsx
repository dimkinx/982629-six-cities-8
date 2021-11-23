import * as Redux from 'react-redux';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {CityType} from '../../common/const';
import FavoritesListLink from './favorites-list-link';

const history = createMemoryHistory();
const mockStore = configureMockStore();

describe('Component: FavoritesListLink', () => {
  it('should render correctly', () => {
    render(
      <Redux.Provider store={mockStore({})}>
        <Router history={history}>
          <FavoritesListLink
            currentCity={CityType.Brussels}
          />
        </Router>
      </Redux.Provider>);

    expect(screen.getByRole('link')).toBeInTheDocument();
    expect(screen.getByText(CityType.Brussels)).toBeInTheDocument();
  });
});
