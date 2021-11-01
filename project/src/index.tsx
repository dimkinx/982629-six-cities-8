import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from '@reduxjs/toolkit';
import {reducer} from './store/reducer';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import App from './components/app/app';
import offers from './mocks/offers';
import reviews from './mocks/reviews';

const store = createStore(
  reducer,
  composeWithDevTools(),
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        offers = {offers}
        reviews = {reviews}
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
