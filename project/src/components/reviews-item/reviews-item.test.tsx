import * as Redux from 'react-redux';
import {Router} from 'react-router-dom';
import {render, screen} from '@testing-library/react';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {createMemoryHistory} from 'history';
import {createMockReview} from '../../mocks/reviews';

import ReviewsItem from './reviews-item';

const mockStore = configureMockStore();
const history = createMemoryHistory();
const mockReview = createMockReview();

describe('Component: ReviewsItem', () => {
  it('should render correctly', () => {

    render(
      <Redux.Provider store={mockStore({})}>
        <Router history={history}>
          <ReviewsItem
            review={mockReview}
          />
        </Router>
      </Redux.Provider>);

    expect(screen.getByRole('listitem')).toHaveClass('reviews__item');
  });
});
