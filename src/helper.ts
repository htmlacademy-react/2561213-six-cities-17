import { SortType } from './enums';
import { TCity, TOffers } from './types';

export const selectOffersByCity = (city: TCity, offers: TOffers) =>
  offers.filter((offer) => offer.city.name === city.name);

export const getSortedOffers = (
  currentOffers: TOffers,
  sortType: SortType
): TOffers => {
  const sortedOffers = [...currentOffers];

  switch (sortType) {
    case SortType.Popular:
      return sortedOffers.sort(
        (a, b) => Number(b.isPremium) - Number(a.isPremium)
      );
    case SortType.PriceLowToHigh:
      return sortedOffers.sort((a, b) => a.price - b.price);
    case SortType.PriceHighToLow:
      return sortedOffers.sort((a, b) => b.price - a.price);
    case SortType.TopRatedFirst:
      return sortedOffers.sort((a, b) => b.rating - a.rating);
    default:
      return sortedOffers;
  }
};
