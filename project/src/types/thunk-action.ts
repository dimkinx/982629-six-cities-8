import {Action, ThunkAction} from '@reduxjs/toolkit';
import {AxiosInstance} from 'axios';
import {DataState, UserState} from './state';

type ThunkActionResult<R = Promise<void>> = ThunkAction<R, {data: DataState; user: UserState}, AxiosInstance, Action>;

export type {ThunkActionResult};
