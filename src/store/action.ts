import { createAction } from '@reduxjs/toolkit';
import { TCity } from '../components/offer-map';
import { TOfferCard } from '../components';
import { SortType } from '../enums';

export const changeCity = createAction<{ city: TCity }>('changeCity');
export const changeOffers = createAction<{ offers: TOfferCard[] }>(
  'changeOffers'
);

export const setSortType = createAction<SortType>('sort/setSortType');
