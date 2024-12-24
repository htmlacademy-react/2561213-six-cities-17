import React from 'react';
import { HotelRating, RoomType } from '../../enums';
import { OfferCardPreview } from '../index';

export type TOfferList = {
  offers: TOfferListItem[];
};

export type TOfferListItem = {
  id: number;
  type: RoomType;
  price: number;
  rating: HotelRating;
  text: string;
  imageSrc: string;
  isPremium?: boolean;
  isInBookmarks?: boolean;
};

export function OfferList({ offers }: TOfferList): React.ReactElement {
  return (
    <div className='cities__places-list places__list tabs__content'>
      {offers.map((offer) => (
        <OfferCardPreview
          key={offer.id}
          type={offer.type}
          price={offer.price}
          rating={offer.rating}
          text={offer.text}
          imageSrc={offer.imageSrc}
          isPremium={offer.isPremium}
          isInBookmarks={offer.isInBookmarks}
        />
      ))}
    </div>
  );
}
