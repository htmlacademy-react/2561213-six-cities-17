import { createReducer } from '@reduxjs/toolkit';

import { changeCity, changeOffers, loadOffers, setSortType } from './action';
import { CITIES, City, SortType } from '../enums';
import { TOffers, TCity } from '../types';

type TInitialState = {
  city: TCity;
  offers: TOffers;
  sortType: SortType;
};

const initialState: TInitialState = {
  city: CITIES[City.Paris],
  offers: [],
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
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    });
});

export { reducer };
