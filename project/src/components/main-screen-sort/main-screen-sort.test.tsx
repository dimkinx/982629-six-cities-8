import * as Redux from 'react-redux';
import {render, screen} from '@testing-library/react';
import {SortingType} from '../../common/const';
import MainScreenSort from './main-screen-sort';
import {configureMockStore} from '@jedmao/redux-mock-store';
import userEvent from '@testing-library/user-event';

const mockStore = configureMockStore();

describe('Component: MainScreenSort', () => {
  it('should render correctly', () => {
    render(
      <Redux.Provider store={mockStore({})}>
        <MainScreenSort
          currentSort={SortingType.Popular}
        />
      </Redux.Provider>);

    expect(screen.getByText(/Sort by/i)).toBeInTheDocument();
  });

  it('should open or close a sort list on user clicks', () => {
    render(
      <Redux.Provider store={mockStore({})}>
        <MainScreenSort
          currentSort={SortingType.Popular}
        />
      </Redux.Provider>);

    expect(screen.getByTestId('sorting-list')).not.toHaveClass('places__options--opened');
    userEvent.click(screen.getByTestId('sorting-span'));
    expect(screen.getByTestId('sorting-list')).toHaveClass('places__options--opened');
    userEvent.click(screen.getByTestId('sorting-span'));
    expect(screen.getByTestId('sorting-list')).not.toHaveClass('places__options--opened');
  });
});
