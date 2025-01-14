import React from 'react';
import { HotelRating, RoomType } from '../../enums';
import { OfferCardPreview } from '../index';
import { TOfferCardPreviewImage } from '../offer-card-preview';

export type TOfferList = {
  offers: TOfferListItem[];
  onOfferCardHover?: (offerId: number) => void;
};

export type TOfferListItem = {
  id: number;
  roomType: RoomType;
  price: number;
  stars: HotelRating;
  name: string;
  previewImage: TOfferCardPreviewImage;
  isPremium?: boolean;
  isInBookmarks?: boolean;
};

function OfferList({
  offers,
  onOfferCardHover
}: TOfferList): React.ReactElement {
  return (
    <div className='cities__places-list places__list tabs__content'>
      {offers.map((offer) => (
        <OfferCardPreview
          key={offer.id}
          offerId={offer.id}
          roomType={offer.roomType}
          price={offer.price}
          stars={offer.stars}
          name={offer.name}
          imageSrc={offer.previewImage.imageSrc}
          imageAlt={offer.previewImage.imageAlt}
          isPremium={offer.isPremium}
          isInBookmarks={offer.isInBookmarks}
          onOfferCardHover={onOfferCardHover}
        />
      ))}
    </div>
  );
}

export default OfferList;
