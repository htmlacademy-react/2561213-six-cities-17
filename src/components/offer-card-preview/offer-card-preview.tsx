import React, { useState } from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom'; // Импортируем Link

import OfferCardPreviewContent, {
  TOfferCardPreviewContent
} from './offer-card-preview-content';
import OfferCardPreviewImage, {
  TOfferCardPreviewImage
} from './offer-card-preview-image';

export type TOfferCardPreview = {
  id: number;
  isPremium?: boolean;
  isFavorite?: boolean;
} & TOfferCardPreviewContent &
  TOfferCardPreviewImage;

function OfferCardPreview(props: TOfferCardPreview): React.ReactElement {
  const { isFavorite = false } = props;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setIsActive] = useState(false);

  const handleMouseEnter = () => {
    setIsActive(true);
    // eslint-disable-next-line no-console
    console.log(`Active card ID: ${props.id}`);
  };

  const handleMouseLeave = () => {
    setIsActive(false);
    // eslint-disable-next-line no-console
    console.log(`Card ID ${props.id} is no longer active`);
  };

  const cardClass = cn('place-card', {
    'favorites__card': isFavorite,
    'cities__card': !isFavorite
  });

  const imageWrapperClass = cn('place-card__image-wrapper', {
    'favorites__image-wrapper': isFavorite,
    'cities__image-wrapper': !isFavorite
  });

  const cardInfoClass = cn('place-card__info', {
    'favorites__card-info': isFavorite
  });

  return (
    <article
      className={cardClass}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ cursor: 'pointer' }}
    >
      {props.isPremium && (
        <div className='place-card__mark'>
          <span>Premium</span>
        </div>
      )}
      <Link
        to={`/offer/${props.id}`}
        onClick={() => window.scrollTo(0, 0)}
        style={{ textDecoration: 'none', color: 'inherit' }}
      >
        <div className={imageWrapperClass}>
          <OfferCardPreviewImage {...props} />
        </div>
        <div className={cardInfoClass}>
          <OfferCardPreviewContent {...props} />
        </div>
      </Link>
    </article>
  );
}

export default OfferCardPreview;
