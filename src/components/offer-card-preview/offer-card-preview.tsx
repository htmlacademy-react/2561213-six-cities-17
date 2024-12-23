import React from 'react';

import OfferCardPreviewContent, { TOfferCardPreviewContent } from './offer-card-preview-content.tsx';
import OfferCardPreviewImage, { TOfferCardPreviewImage } from './offer-card-preview-image.tsx';

type TOfferCardPreview = {
  isPremium?: boolean;
} & TOfferCardPreviewContent &
  TOfferCardPreviewImage;

function OfferCardPreview(props: TOfferCardPreview): React.ReactElement {
  return (
    <article className='cities__card place-card'>
      {props.isPremium && (
        <div className='place-card__mark'>
          <span>Premium</span>
        </div>
      )}
      <OfferCardPreviewImage
        imageSrc={props.imageSrc}
        imageAlt={props.imageAlt}
        imageHeight={props.imageHeight}
        imageWidth={props.imageWidth}
      />
      <OfferCardPreviewContent
        text={props.text}
        price={props.price}
        type={props.type}
        rating={props.rating}
        isInBookmarks={props.isInBookmarks}
      />
    </article>
  );
}

export default OfferCardPreview;
