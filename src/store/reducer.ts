import { createReducer } from '@reduxjs/toolkit';

import { changeCity, changeOffers, setSortType } from './action';
import { CITIES, City, SortType } from '../enums';
import { TOfferCard } from '../components';
import { TCity } from '../components/offer-map';
import { handleOfferChange } from '../helper.ts';

type TInitialState = {
  city: TCity;
  offers: TOfferCard[];
  sortType: SortType;
};

const initialState: TInitialState = {
  city: CITIES[City.Paris],
  offers: handleOfferChange(CITIES[City.Paris]),
  sortType: SortType.Popular
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      const { city } = action.payload;

      state.city = city;
    })
    .addCase(changeOffers, (state, action) => {
      const { offers } = action.payload;

      state.offers = offers;
    })
    .addCase(setSortType, (state, action) => {
      state.sortType = action.payload;
    });
});

export { reducer };
