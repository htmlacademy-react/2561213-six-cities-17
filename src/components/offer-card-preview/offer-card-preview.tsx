import React, { useState } from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';

import { TOffer } from '../../types';

export type TOfferCardPreview = {
  offer: TOffer;
  onOfferCardHover?: (offerId: string) => void;
  onOfferCardLeave?: () => void;
};

function OfferCardPreview(props: TOfferCardPreview): React.ReactElement {
  const { offer, onOfferCardHover, onOfferCardLeave } = props;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setIsActive] = useState(false);

  const handleMouseEnter = () => {
    setIsActive(true);
    // eslint-disable-next-line no-console
    console.log(`Active card ID: ${offer.id}`);
  };

  const handleMouseLeave = () => {
    setIsActive(false);
    // eslint-disable-next-line no-console
    console.log(`Card ID ${offer.id} is no longer active`);
  };

  const cardClass = cn('place-card', {
    'favorites__card': offer.isFavorite,
    'cities__card': !offer.isFavorite
  });

  const imageWrapperClass = cn('place-card__image-wrapper', {
    'favorites__image-wrapper': offer.isFavorite,
    'cities__image-wrapper': !offer.isFavorite
  });

  const cardInfoClass = cn('place-card__info', {
    'favorites__card-info': offer.isFavorite
  });

  const bookmarkButtonClass = cn('place-card__bookmark-button button', {
    'place-card__bookmark-button--active': offer.isFavorite
  });

  return (
    <article
      className={cardClass}
      onMouseEnter={handleMouseEnter}
      onMouseOver={() => onOfferCardHover?.(offer.id)}
      onMouseLeave={() => {
        handleMouseLeave();
        if (onOfferCardLeave) {
          onOfferCardLeave();
        }
      }}
      style={{ cursor: 'pointer' }}
    >
      {offer.isPremium && (
        <div className='place-card__mark'>
          <span>Premium</span>
        </div>
      )}
      <Link
        to={`/offer/${offer.id}`}
        onClick={() => window.scrollTo(0, 0)}
        style={{ textDecoration: 'none', color: 'inherit' }}
      >
        <div className={imageWrapperClass}>
          <img
            alt={offer.title}
            className='place-card__image'
            height={110}
            src={offer.previewImage}
            width={150}
          />
        </div>
        <div className={cardInfoClass}>
          <div className='place-card__info'>
            <div className='place-card__price-wrapper'>
              <div className='place-card__price'>
                <b className='place-card__price-value'>&euro; {offer.price}</b>
                <span className='place-card__price-text'>&#47;&nbsp;night</span>
              </div>
              <button className={bookmarkButtonClass} type='button'>
                <svg
                  className='place-card__bookmark-icon'
                  width='18'
                  height='19'
                >
                  <use xlinkHref='#icon-bookmark'></use>
                </svg>
                <span className='visually-hidden'>
                  {offer.isFavorite ? 'In bookmarks' : 'To bookmarks'}
                </span>
              </button>
            </div>
            <div className='place-card__rating rating'>
              <div className='place-card__stars rating__stars'>
                <span style={{ width: `${(offer.rating / 5) * 100}%` }}></span>
                <span className='visually-hidden'>Rating</span>
              </div>
            </div>
            <h2 className='place-card__name'>{offer.title}</h2>
            <p className='place-card__type'>{offer.type}</p>
          </div>
        </div>
      </Link>
    </article>
  );
}

export default OfferCardPreview;
