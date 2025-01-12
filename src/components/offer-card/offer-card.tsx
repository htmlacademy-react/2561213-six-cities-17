import React from 'react';

import { OfferCardContent, TOfferCardContent } from './offer-card-content';
import OfferCardGallery, { TOfferCardImage } from './offer-card-gallery';
import { TOfferCardPreviewImage } from '../offer-card-preview';
import { OfferMap, TCity, TPoint } from '../offer-map';

export type TOfferCard = {
  id: number;
  images: TOfferCardImage[];
  isInBookmarks?: boolean;
  previewImage: TOfferCardPreviewImage;
  city: TCity;
  point: TPoint;
  points?: TPoint[];
  selectedPoint?: TPoint;
} & TOfferCardContent;

function OfferCard(data: TOfferCard): React.ReactElement {
  const { images, city, points = [], selectedPoint } = data;

  return (
    <section className='offer'>
      <OfferCardGallery images={images} />
      <OfferCardContent {...data} />
      <section className='offer__map map'>
        <OfferMap city={city} points={points} selectedPoint={selectedPoint} />
      </section>
    </section>
  );
}

export default OfferCard;
