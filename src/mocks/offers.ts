import { offerInsideItems } from './offer-inside-items';
import { offerFeatures } from './offer-features';
import { offerImages } from './offer-images';
import { HotelRating } from '../enums';

/**
 * Mocked offers
 */
export const offers = [
  {
    id: 1,
    pictures: offerImages,
    isPremium: true,
    description: 'Beautiful &amp; luxurious studio at great location',
    rating: 4.8,
    features: offerFeatures,
    inside: offerInsideItems,
    host: {
      avatar: 'markup/img/avatar-angelina.jpg',
      name: 'Angelina',
      status: 'Pro',
      text: ' A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.  An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.'
    },
    reviews: [
      {
        id: 1,
        avatar: 'markup/img/avatar-max.jpg',
        name: 'Max',
        stars: HotelRating.Four,
        text: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
        time: '2019-04-24'
      }
    ]
  }
];
