import {combineReducers} from '@reduxjs/toolkit';
import {dataReducer} from './data/data-reducer';
import {userReducer} from './user/user-reducer';

const rootReducer = combineReducers({
  data: dataReducer,
  user: userReducer,
});

export {rootReducer};
