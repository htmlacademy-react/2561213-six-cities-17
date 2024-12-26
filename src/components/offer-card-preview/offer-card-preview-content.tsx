import React from 'react';
import cn from 'classnames';

import { HotelRating, RoomType } from '../../enums';

export type TOfferCardPreviewContent = {
  isInBookmarks?: boolean;
  price: number;
  stars: HotelRating;
  name: string;
  roomType: RoomType;
};

function OfferCardPreviewContent(props: TOfferCardPreviewContent): React.ReactElement {
  const btnClass = cn('place-card__bookmark-button button', {
    'place-card__bookmark-button--active': props.isInBookmarks
  });

  return (
    <div className='place-card__info'>
      <div className='place-card__price-wrapper'>
        <div className='place-card__price'>
          <b className='place-card__price-value'>&euro; {props.price}</b>
          <span className='place-card__price-text'>&#47;&nbsp;night</span>
        </div>
        <button className={btnClass} type='button'>
          <svg className='place-card__bookmark-icon' width='18' height='19'>
            <use xlinkHref='#icon-bookmark'></use>
          </svg>
          <span className='visually-hidden'>{props.isInBookmarks ? 'In bookmarks' : 'To bookmarks'}</span>
        </button>
      </div>
      <div className='place-card__rating rating'>
        <div className='place-card__stars rating__stars'>
          <span style={{ width: props.stars }}></span>
          <span className='visually-hidden'>Rating</span>
        </div>
      </div>
      <h2 className='place-card__name'>
        <a href='#'>{props.name}</a>
      </h2>
      <p className='place-card__type'>{props.roomType}</p>
    </div>
  );
}

export default OfferCardPreviewContent;
