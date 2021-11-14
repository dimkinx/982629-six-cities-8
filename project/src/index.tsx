import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {configureStore} from '@reduxjs/toolkit';
import {createAPI} from './services/api';
import {rootReducer} from './store/root-reducer';
import {requireAuthorization} from './store/user/user-actions';
import {checkAuthAction} from './store/user/user-api-actions';
import App from './components/app/app';
import {AuthStatus, ToastParams} from './common/const';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const api = createAPI(() => {
  store.dispatch(requireAuthorization(AuthStatus.NoAuth));
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});

store.dispatch(checkAuthAction());

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
