import { configureStore } from '@reduxjs/toolkit';

import { reducer } from './reducer';
import { createAPI } from '../services';

export type TState = ReturnType<typeof store.getState>;
export type TAppDispatch = typeof store.dispatch;

export const api = createAPI();

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api
      }
    })
});
