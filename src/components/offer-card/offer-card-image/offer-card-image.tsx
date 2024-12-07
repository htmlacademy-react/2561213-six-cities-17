import React from 'react';

export type TOfferCardImage = {
  imageAlt?: string;
  imageSrc: string;
  imageHeight?: number;
  imageWidth?: number;
};

function OfferCardImage({
  imageAlt = 'Place image',
  imageSrc,
  imageHeight = 200,
  imageWidth = 260
}: TOfferCardImage): React.ReactElement {
  return (
    <div className='cities__image-wrapper place-card__image-wrapper'>
      <a href='#'>
        <img
          alt={imageAlt}
          className='place-card__image'
          height={imageHeight}
          src={imageSrc}
          width={imageWidth}
        />
      </a>
    </div>
  );
}

export default OfferCardImage;
