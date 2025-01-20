import { TCity } from './components/offer-map';
import { offers } from './mocks';
import { TOfferCard } from './components';
import { SortType } from './enums';

export const handleOfferChange = (city: TCity) =>
  offers.filter((offer) => offer.city === city);

export const getSortedOffers = (
  currentOffers: TOfferCard[],
  sortType: SortType
): TOfferCard[] => {
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
