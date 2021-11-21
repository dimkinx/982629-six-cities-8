import * as Redux from 'react-redux';
import {Router} from 'react-router-dom';
import {render, screen} from '@testing-library/react';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {createMemoryHistory} from 'history';
import {CityType} from '../../common/const';
import MainScreenTabs from './main-screen-tabs';

const mockStore = configureMockStore();
const history = createMemoryHistory();

describe('Component: MainScreenTabs', () => {
  it('should render correctly', () => {
    render(
      <Redux.Provider store={mockStore({})}>
        <Router history={history}>
          <MainScreenTabs
            currentCity={CityType.Paris}
          />
        </Router>
      </Redux.Provider>);

    expect(screen.getByRole('list')).toHaveClass('locations__list');
  });
});
