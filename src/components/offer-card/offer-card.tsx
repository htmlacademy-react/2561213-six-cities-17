import React from 'react';

import OfferCardContent, { TOfferTypeContent } from './offer-card-content';
import OfferCardImage, { TOfferCardImage } from './offer-card-image';

type TOfferCard = {
  isPremium?: boolean;
} & TOfferTypeContent &
  TOfferCardImage;

function OfferCard(props: TOfferCard): React.ReactElement {
  return (
    <article className='cities__card place-card'>
      {props.isPremium && (
        <div className='place-card__mark'>
          <span>Premium</span>
        </div>
      )}
      <OfferCardImage
        imageSrc={props.imageSrc}
        imageAlt={props.imageAlt}
        imageHeight={props.imageHeight}
        imageWidth={props.imageWidth}
      />
      <OfferCardContent
        text={props.text}
        price={props.price}
        type={props.type}
        rating={props.rating}
        isInBookmarks={props.isInBookmarks}
      />
    </article>
  );
}

export default OfferCard;
