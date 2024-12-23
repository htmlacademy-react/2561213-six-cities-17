import React from 'react';

import { HotelRating, RoomType } from '../../enums';

export type TOfferCardPreviewContent = {
  isInBookmarks?: boolean;
  price: number;
  rating: HotelRating;
  text: string;
  type: RoomType;
};

function OfferCardPreviewContent({
  isInBookmarks,
  price,
  rating,
  text,
  type
}: TOfferCardPreviewContent): React.ReactElement {
  return (
    <div className='place-card__info'>
      <div className='place-card__price-wrapper'>
        <div className='place-card__price'>
          <b className='place-card__price-value'>&euro; {price}</b>
          <span className='place-card__price-text'>&#47;&nbsp;night</span>
        </div>
        <button
          className={`
            place-card__bookmark-button button
            ${isInBookmarks ? 'place-card__bookmark-button--active' : ''}
          `}
          type='button'
        >
          <svg className='place-card__bookmark-icon' width='18' height='19'>
            <use xlinkHref='#icon-bookmark'></use>
          </svg>
          <span className='visually-hidden'>
            {isInBookmarks ? 'In bookmarks' : 'To bookmarks'}
          </span>
        </button>
      </div>
      <div className='place-card__rating rating'>
        <div className='place-card__stars rating__stars'>
          <span style={{ width: rating }}></span>
          <span className='visually-hidden'>Rating</span>
        </div>
      </div>
      <h2 className='place-card__name'>
        <a href='#'>{text}</a>
      </h2>
      <p className='place-card__type'>{type}</p>
    </div>
  );
}

export default OfferCardPreviewContent;
