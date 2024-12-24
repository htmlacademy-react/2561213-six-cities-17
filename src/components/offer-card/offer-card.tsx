import React from 'react';

import { OfferCardContent, TOfferCardContent } from './offer-card-content';
import OfferCardGallery, { TOfferCardImage } from './offer-card-gallery';
import OfferCardMap from './offer-card-map';

export type TOfferCard = {
  id: number;
  images: TOfferCardImage[];
  isInBookmarks?: boolean;
} & TOfferCardContent;

function OfferCard(data: TOfferCard): React.ReactElement {
  const { images } = data;

  return (
    <section className='offer'>
      <OfferCardGallery images={images} />
      <OfferCardContent {...data} />
      <OfferCardMap />
    </section>
  );
}

export default OfferCard;
