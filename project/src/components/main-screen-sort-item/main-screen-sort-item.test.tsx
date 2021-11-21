import * as Redux from 'react-redux';
import {render, screen} from '@testing-library/react';
import {SortingType} from '../../common/const';
import {configureMockStore} from '@jedmao/redux-mock-store';
import MainScreenSortItem from './main-screen-sort-item';

const mockStore = configureMockStore();

describe('Component: MainScreenSortItem', () => {
  it('should render correctly', () => {
    render(
      <Redux.Provider store={mockStore({})}>
        <MainScreenSortItem
          sort={SortingType.Popular}
          currentSort={SortingType.Popular}
          onOpenedItemClick={() => void 0}
        />
      </Redux.Provider>);

    expect(screen.getByRole('listitem')).toBeInTheDocument();
  });
});
