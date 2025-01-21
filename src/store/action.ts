import { createAction } from '@reduxjs/toolkit';
import { TCity } from '../components/offer-map';
import { TOfferCard } from '../components';

export const changeCity = createAction<{ city: TCity }>('changeCity');
export const changeOffers = createAction<{ offers: TOfferCard[] }>(
  'changeOffers'
);
