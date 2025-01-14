import React from 'react';

import { OfferCardContent, TOfferCardContent } from './offer-card-content';
import OfferCardGallery, { TOfferCardImage } from './offer-card-gallery';
import { TOfferCardPreviewImage } from '../offer-card-preview';
import { CITIES } from '../../enums';
import { OfferMap, TCity, TPoint } from '../offer-map';
import { offers } from '../../mocks';

export type TOfferCard = {
  id: number;
  images: TOfferCardImage[];
  isInBookmarks?: boolean;
  previewImage: TOfferCardPreviewImage;
  city: TCity;
  point: TPoint;
} & TOfferCardContent;

function OfferCard(data: TOfferCard): React.ReactElement {
  const { images } = data;

  const city = CITIES.Amsterdam;
  const points = offers
    .filter((offer) => offer.city === city)
    .map((offer) => offer.point);

  return (
    <section className='offer'>
      <OfferCardGallery images={images} />
      <OfferCardContent {...data} />
      <section className='offer__map map'>
        <OfferMap city={city} points={points} selectedPoint={undefined} />
      </section>
    </section>
  );
}

export default OfferCard;
