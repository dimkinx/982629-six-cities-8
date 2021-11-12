import React from 'react';
import ReactDOM from 'react-dom';
import {applyMiddleware, createStore} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import {createAPI} from './services/api';
import {reducer} from './store/reducer';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import App from './components/app/app';
import {AuthStatus, ToastParams} from './common/const';
import {requireAuthorization} from './store/actions';
import {ThunkAppDispatch} from './types/actions';
import {checkAuthAction} from './store/api-actions';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const api = createAPI(() => {
  store.dispatch(requireAuthorization(AuthStatus.NoAuth));
});

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk.withExtraArgument(api))),
);

(store.dispatch as ThunkAppDispatch)(checkAuthAction());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
    <ToastContainer
      theme={ToastParams.Theme}
      position={ToastParams.Position}
    />
  </React.StrictMode>,
  document.getElementById('root'),
);
