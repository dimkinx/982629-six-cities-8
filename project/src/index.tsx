import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from '@reduxjs/toolkit';
import {reducer} from './store/reducer';
import {Provider} from 'react-redux';
import App from './components/app/app';
import offers from './mocks/offers';
import reviews from './mocks/reviews';

const store = createStore(reducer);

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
