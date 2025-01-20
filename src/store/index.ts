import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './reducer';

export type TState = ReturnType<typeof store.getState>;
export type TAppDispatch = typeof store.dispatch;

export const store = configureStore({ reducer });
