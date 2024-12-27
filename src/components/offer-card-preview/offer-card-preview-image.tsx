import React from 'react';
import cn from 'classnames';

export type TOfferCardPreviewImage = {
  imageAlt?: string;
  imageSrc: string;
  imageHeight?: number;
  imageWidth?: number;
  isFavorite?: boolean;
};

function OfferCardPreviewImage(
  props: TOfferCardPreviewImage
): React.ReactElement {
  const {
    imageAlt = 'Place image',
    imageSrc,
    imageHeight = 200,
    imageWidth = 260,
    isFavorite
  } = props;

  const divClass = cn('place-card__image-wrapper', {
    'cities__image-wrapper': !isFavorite,
    'favorites__image-wrapper': isFavorite
  });

  return (
    <div className={divClass}>
      <img
        alt={imageAlt}
        className='place-card__image'
        height={imageHeight}
        src={imageSrc}
        width={imageWidth}
      />
    </div>
  );
}

export default OfferCardPreviewImage;
