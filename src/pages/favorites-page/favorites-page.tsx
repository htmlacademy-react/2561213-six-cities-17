import React from 'react';

import { HotelRating, RoomType } from '../../enums';
import { OfferCard } from '../../components';

function FavoritesPage(): React.ReactElement {
  return (
    <div className='page'>
      <header className='header'>
        <div className='container'>
          <div className='header__wrapper'>
            <div className='header__left'>
              <a className='header__logo-link' href='markup/main.html'>
                <img
                  className='header__logo'
                  src='markup/img/logo.svg'
                  alt='6 cities logo'
                  width='81'
                  height='41'
                />
              </a>
            </div>
            <nav className='header__nav'>
              <ul className='header__nav-list'>
                <li className='header__nav-item user'>
                  <a
                    className='header__nav-link header__nav-link--profile'
                    href='#'
                  >
                    <div className='header__avatar-wrapper user__avatar-wrapper'></div>
                    <span className='header__user-name user__name'>
                      Oliver.conner@gmail.com
                    </span>
                    <span className='header__favorite-count'>3</span>
                  </a>
                </li>
                <li className='header__nav-item'>
                  <a className='header__nav-link' href='#'>
                    <span className='header__signout'>Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

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
                    imageSrc='markup/img/Apartment-small-03.jpg'
                    price={180}
                    rating={HotelRating.Five}
                    text='Nice, cozy, warm big bed Apartment'
                    type={RoomType.Apartment}
                    isPremium
                    isInBookmarks
                  />
                  <OfferCard
                    key={2}
                    imageSrc='markup/img/Room-small.jpg'
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
