import { TOfferCard } from '../components';
import { offerInsideItems } from './offer-inside-items';
import { offerFeatures } from './offer-features';
import { offerImages } from './offer-images';
import { offerReviews } from './offer-reviews';
import { CITIES, HotelRating, RoomType } from '../enums';

/**
 * Mocked offers
 */
export const offers: TOfferCard[] = [
  {
    id: 1,
    images: offerImages.slice(0, 5),
    previewImage: {
      imageSrc: offerImages[0].src,
      imageAlt: offerImages[0].alt
    },
    isPremium: false,
    isInBookmarks: true,
    name: 'Beautiful & luxurious studio at great location',
    stars: HotelRating.Five,
    features: offerFeatures.slice(0, 3),
    rating: 4.8,
    price: 120,
    insideItems: offerInsideItems.slice(0, 5),
    host: {
      title: 'Friendly Host',
      imageSrc: 'markup/img/avatar-angelina.jpg',
      name: 'Angelina',
      status: 'Pro',
      text:
        'A quiet cozy and picturesque that hides behind a river by the unique lightness of Amsterdam. ' +
        'The building is green and from the 18th century.'
    },
    reviews: offerReviews.slice(0, 3),
    roomType: RoomType.Studio,
    city: CITIES.Amsterdam,
    point: {
      title: 'Beautiful & luxurious studio at great location',
      lat: 52.3909553943508,
      lng: 4.85309666406198
    }
  },
  {
    id: 2,
    images: offerImages.slice(2, 7),
    previewImage: {
      imageSrc: offerImages[2].src,
      imageAlt: offerImages[2].alt
    },
    isPremium: false,
    isInBookmarks: false,
    name: 'Cozy apartment near the beach',
    stars: HotelRating.Four,
    features: offerFeatures.slice(1, 4),
    rating: 4.2,
    price: 90,
    insideItems: offerInsideItems.slice(3, 8),
    host: {
      title: 'Local Expert',
      imageSrc: 'markup/img/avatar-john.jpg',
      name: 'John',
      status: 'Verified',
      text:
        'Strategically located near the beach, this apartment offers a relaxing stay with all ' +
        'the necessary amenities.'
    },
    reviews: offerReviews.slice(0, 5),
    roomType: RoomType.Apartment,
    city: CITIES.Cologne,
    point: {
      title: 'Cozy apartment near the beach',
      lat: 50.935173,
      lng: 6.953101
    }
  },
  {
    id: 3,
    images: offerImages.slice(4, 9),
    previewImage: {
      imageSrc: offerImages[2].src,
      imageAlt: offerImages[2].alt
    },
    isPremium: true,
    isInBookmarks: true,
    name: 'Luxury villa with a pool',
    stars: HotelRating.Five,
    features: offerFeatures.slice(0, 5),
    rating: 4.9,
    price: 250,
    insideItems: offerInsideItems.slice(0, 10),
    host: {
      title: 'Luxury Host',
      imageSrc: 'markup/img/avatar-anna.jpg',
      name: 'Anna',
      status: 'Pro',
      text: 'Experience luxury in this stunning villa with a private pool and breathtaking views.'
    },
    reviews: offerReviews.slice(0, 7),
    roomType: RoomType.Villa,
    city: CITIES.Paris,
    point: {
      title: 'Luxury villa with a pool',
      lat: 48.858844,
      lng: 2.294351
    }
  },
  {
    id: 4,
    images: offerImages.slice(1, 6),
    previewImage: {
      imageSrc: offerImages[1].src,
      imageAlt: offerImages[1].alt
    },
    isPremium: false,
    isInBookmarks: false,
    name: 'Modern studio in the city center',
    stars: HotelRating.Three,
    features: offerFeatures.slice(2, 5),
    rating: 3.5,
    price: 70,
    insideItems: offerInsideItems.slice(5, 10),
    host: {
      title: 'City Host',
      imageSrc: 'markup/img/avatar-max.jpg',
      name: 'Max',
      status: 'Verified',
      text: 'Perfect for city explorers, this modern studio is located in the heart of the city.'
    },
    reviews: offerReviews.slice(0, 2),
    roomType: RoomType.Studio,
    city: CITIES.Brussels,
    point: {
      title: 'Modern studio in the city center',
      lat: 50.850346,
      lng: 4.351721
    }
  },
  {
    id: 5,
    images: offerImages.slice(3, 8),
    previewImage: {
      imageSrc: offerImages[3].src,
      imageAlt: offerImages[3].alt
    },
    isPremium: true,
    isInBookmarks: true,
    name: 'Spacious family house',
    stars: HotelRating.Four,
    features: offerFeatures.slice(0, 4),
    rating: 4.6,
    price: 180,
    insideItems: offerInsideItems.slice(2, 7),
    host: {
      title: 'Family-friendly Host',
      imageSrc: 'markup/img/avatar-emma.jpg',
      name: 'Emma',
      status: 'Pro',
      text: 'This spacious house is perfect for families with kids. It has a large garden and a playground.'
    },
    reviews: offerReviews.slice(0, 4),
    roomType: RoomType.House,
    city: CITIES.Hamburg,
    point: {
      title: 'Spacious family house',
      lat: 53.551086,
      lng: 9.993682
    }
  },
  {
    id: 6,
    images: offerImages.slice(5, 10),
    previewImage: {
      imageSrc: offerImages[5].src,
      imageAlt: offerImages[5].alt
    },
    isPremium: false,
    isInBookmarks: false,
    name: 'Charming cottage in the countryside',
    stars: HotelRating.Three,
    features: offerFeatures.slice(1, 5),
    rating: 3.9,
    price: 100,
    insideItems: offerInsideItems.slice(4, 9),
    host: {
      title: 'Countryside Host',
      imageSrc: 'markup/img/avatar-daniel.jpg',
      name: 'Daniel',
      status: 'Verified',
      text: 'Escape the city and enjoy the peace and quiet of this charming cottage in the countryside.'
    },
    reviews: offerReviews.slice(0, 6),
    roomType: RoomType.Cottage,
    city: CITIES.Dusseldorf,
    point: {
      title: 'Charming cottage in the countryside',
      lat: 51.227741,
      lng: 6.773456
    }
  },
  {
    id: 7,
    images: offerImages.slice(0, 5),
    previewImage: {
      imageSrc: offerImages[0].src,
      imageAlt: offerImages[0].alt
    },
    isPremium: true,
    isInBookmarks: true,
    name: 'Elegant penthouse with a view',
    stars: HotelRating.Five,
    features: offerFeatures.slice(0, 3),
    rating: 4.7,
    price: 300,
    insideItems: offerInsideItems.slice(1, 6),
    host: {
      title: 'Elegant Host',
      imageSrc: 'markup/img/avatar-sophia.jpg',
      name: 'Sophia',
      status: 'Pro',
      text: 'Enjoy the breathtaking views from this elegant penthouse located in the heart of the city.'
    },
    reviews: offerReviews.slice(0, 8),
    roomType: RoomType.Penthouse,
    city: CITIES.Paris,
    point: {
      title: 'Elegant penthouse with a view',
      lat: 48.856613,
      lng: 2.352222
    }
  },
  {
    id: 8,
    images: offerImages.slice(2, 7),
    previewImage: {
      imageSrc: offerImages[2].src,
      imageAlt: offerImages[2].alt
    },
    isPremium: false,
    isInBookmarks: false,
    name: 'Cozy cabin by the lake',
    stars: HotelRating.Four,
    features: offerFeatures.slice(2, 5),
    rating: 4.3,
    price: 110,
    insideItems: offerInsideItems.slice(3, 8),
    host: {
      title: 'Lake Host',
      imageSrc: 'markup/img/avatar-michael.jpg',
      name: 'Michael',
      status: 'Verified',
      text: 'Relax by the lake in this cozy cabin, perfect for a weekend getaway.'
    },
    reviews: offerReviews.slice(0, 3),
    roomType: RoomType.Cabin,
    city: CITIES.Cologne,
    point: {
      title: 'Cozy cabin by the lake',
      lat: 50.937531,
      lng: 6.960279
    }
  },
  {
    id: 9,
    images: offerImages.slice(4, 9),
    previewImage: {
      imageSrc: offerImages[5].src,
      imageAlt: offerImages[5].alt
    },
    isPremium: true,
    isInBookmarks: true,
    name: 'Modern loft in the industrial district',
    stars: HotelRating.Five,
    features: offerFeatures.slice(0, 4),
    rating: 4.5,
    price: 150,
    insideItems: offerInsideItems.slice(5, 10),
    host: {
      title: 'Industrial Host',
      imageSrc: 'markup/img/avatar-olivia.jpg',
      name: 'Olivia',
      status: 'Pro',
      text: 'Experience the unique charm of this modern loft in the industrial district.'
    },
    reviews: offerReviews.slice(0, 5),
    roomType: RoomType.Loft,
    city: CITIES.Brussels,
    point: {
      title: 'Modern loft in the industrial district',
      lat: 50.850346,
      lng: 4.351721
    }
  },
  {
    id: 10,
    images: offerImages.slice(1, 6),
    previewImage: {
      imageSrc: offerImages[1].src,
      imageAlt: offerImages[1].alt
    },
    isPremium: false,
    isInBookmarks: false,
    name: 'Stylish apartment with a balcony',
    stars: HotelRating.Four,
    features: offerFeatures.slice(1, 5),
    rating: 4.1,
    price: 95,
    insideItems: offerInsideItems.slice(2, 7),
    host: {
      title: 'Stylish Host',
      imageSrc: 'markup/img/avatar-james.jpg',
      name: 'James',
      status: 'Verified',
      text: 'Enjoy the stylish interior and the cozy balcony of this modern apartment.'
    },
    reviews: offerReviews.slice(0, 10),
    roomType: RoomType.Apartment,
    city: CITIES.Amsterdam,
    point: {
      title: 'Stylish apartment with a balcony',
      lat: 52.370216,
      lng: 4.895168
    }
  }
];
