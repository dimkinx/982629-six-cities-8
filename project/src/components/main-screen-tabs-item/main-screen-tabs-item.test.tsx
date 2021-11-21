import * as Redux from 'react-redux';
import {Router} from 'react-router-dom';
import {render, screen} from '@testing-library/react';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {createMemoryHistory} from 'history';
import {CityType} from '../../common/const';
import MainScreenTabsItem from './main-screen-tabs-item';

const mockStore = configureMockStore();
const history = createMemoryHistory();

describe('Component: MainScreenTabsItem', () => {
  it('should render correctly', () => {
    render(
      <Redux.Provider store={mockStore({})}>
        <Router history={history}>
          <MainScreenTabsItem
            city={CityType.Paris}
            currentCity={CityType.Paris}
          />
        </Router>
      </Redux.Provider>);

    expect(screen.getByRole('listitem')).toHaveClass('locations__item');
  });
});
