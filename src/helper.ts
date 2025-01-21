import { TCity } from './components/offer-map';
import { offers } from './mocks';

export const handleOfferChange = (city: TCity) =>
  offers.filter((offer) => offer.city === city);
