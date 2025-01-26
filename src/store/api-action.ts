import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';

import { TAppDispatch, TState } from './index';
import { APIRoute } from '../enums';
import { loadOffers } from './action';
import { TOffers } from '../types';

export const fetchOffersAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: TAppDispatch;
    state: TState;
    extra: AxiosInstance;
  }
>('data/fetchOffers', async (_arg, { dispatch, extra: api }) => {
  const { data } = await api.get<TOffers>(APIRoute.Offers);
  dispatch(loadOffers(data));
});
