import React from 'react';

import { HotelRating, RoomType } from '../../enums';
import { OfferCard } from '../../components';
import { Header } from '../../layouts';

function FavoritesPage(): React.ReactElement {
  return (
    <div className='page'>
      <Header />

      <main className='page__main page__main--favorites'>
        <div className='page__favorites-container container'>
          <section className='favorites'>
            <h1 className='favorites__title'>Saved listing</h1>
            <ul className='favorites__list'>
              <li className='favorites__locations-items'>
                <div className='favorites__locations locations locations--current'>
                  <div className='locations__item'>
                    <a className='locations__item-link' href='#'>
                      <span>Amsterdam</span>
                    </a>
                  </div>
                </div>
                <div className='favorites__places'>
                  <OfferCard
                    key={1}
                    imageSrc='markup/img/apartment-small-03.jpg'
                    price={180}
                    rating={HotelRating.Five}
                    text='Nice, cozy, warm big bed Apartment'
                    type={RoomType.Apartment}
                    isPremium
                    isInBookmarks
                  />
                  <OfferCard
                    key={2}
                    imageSrc='markup/img/room-small.jpg'
                    imageHeight={150}
                    imageWidth={110}
                    price={80}
                    rating={HotelRating.Four}
                    text='Wood and stone place'
                    type={RoomType.Room}
                    isInBookmarks
                  />
                </div>
              </li>

              <li className='favorites__locations-items'>
                <div className='favorites__locations locations locations--current'>
                  <div className='locations__item'>
                    <a className='locations__item-link' href='#'>
                      <span>Cologne</span>
                    </a>
                  </div>
                </div>
                <div className='favorites__places'>
                  <OfferCard
                    key={3}
                    imageSrc='markup/img/apartment-small-04.jpg'
                    imageHeight={150}
                    imageWidth={110}
                    price={180}
                    rating={HotelRating.Five}
                    text='White castle'
                    type={RoomType.Apartment}
                    isInBookmarks
                  />
                </div>
              </li>
            </ul>
          </section>
        </div>
      </main>
      <footer className='footer container'>
        <a className='footer__logo-link' href='markup/main.html'>
          <img
            className='footer__logo'
            src='markup/img/logo.svg'
            alt='6 cities logo'
            width='64'
            height='33'
          />
        </a>
      </footer>
    </div>
  );
}

export default FavoritesPage;
