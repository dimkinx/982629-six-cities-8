import {render, screen} from '@testing-library/react';
import * as Redux from 'react-redux';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {CityType} from '../../common/const';
import MainScreenCitiesEmpty from './main-screen-cities-empty';

const mockStore = configureMockStore();
const history = createMemoryHistory();

const store = mockStore({
  user: {
    city: CityType.Paris,
  },
});

describe('Component: MainScreenCitiesEmpty', () => {
  it('should render correctly', () => {
    store.dispatch = jest.fn();

    render(
      <Redux.Provider store={store}>
        <Router history={history}>
          <MainScreenCitiesEmpty />
        </Router>
      </Redux.Provider>);

    expect(screen.getByText(/No places to stay available/i)).toBeInTheDocument();
    expect(screen.getByText(/We could not find any property available at the moment in/i)).toBeInTheDocument();
  });
});
