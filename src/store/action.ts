import { createAction } from '@reduxjs/toolkit';
import { SortType } from '../enums';
import { TOffers, TCity } from '../types';

export const changeCity = createAction<{ city: TCity }>('changeCity');
export const changeOffers = createAction<{ offers: TOffers }>('changeOffers');

export const setSortType = createAction<SortType>('sort/setSortType');

export const loadOffers = createAction<TOffers>('data/loadOffers');

export const setOffersDataLoadingStatus = createAction<boolean>(
  'data/setOffersDataLoadingStatus'
);
