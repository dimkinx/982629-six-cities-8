import * as Redux from 'react-redux';
import ReactRouter from 'react-router';
import {Router} from 'react-router-dom';
import {render, screen} from '@testing-library/react';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {createMemoryHistory} from 'history';
import {AuthStatus, RequestStatus} from '../../common/const';
import {createMockOffer} from '../../mocks/offers';
import {createMockAuthData} from '../../mocks/auth-data';
import ReviewsForm from './reviews-form';
import userEvent from '@testing-library/user-event';
import {lorem} from 'faker';

const mockStore = configureMockStore();
const history = createMemoryHistory();
const mockOffer = createMockOffer();
const mockAuthData = createMockAuthData();
const mockComment = lorem.sentence(10, 30);

const store = mockStore({
  data: {
    review: {
      requestStatus: RequestStatus.Success,
    },
  },
  user: {
    auth: {
      status: AuthStatus.Auth,
      data: mockAuthData,
    },
  },
});

describe('Component: ReviewsForm', () => {
  it('should render correctly', () => {
    jest.spyOn(ReactRouter, 'useParams').mockReturnValue({id: mockOffer.id.toString()});
    store.dispatch = jest.fn();

    render(
      <Redux.Provider store={store}>
        <Router history={history}>
          <ReviewsForm />
        </Router>
      </Redux.Provider>);

    expect(screen.getByText(/Your review/i)).toBeInTheDocument();
  });

  it('should be disabled until fields is empty', () => {
    jest.spyOn(ReactRouter, 'useParams').mockReturnValue({id: mockOffer.id.toString()});
    store.dispatch = jest.fn();

    render(
      <Redux.Provider store={store}>
        <Router history={history}>
          <ReviewsForm />
        </Router>
      </Redux.Provider>);

    expect(screen.getByRole('button', {name: 'Submit'})).toBeDisabled();

    userEvent.click(screen.getByTestId('5-stars'));
    userEvent.type(screen.getByTestId('comment'), mockComment);

    expect(screen.getByRole('button', {name: 'Submit'})).not.toBeDisabled();
  });
});
