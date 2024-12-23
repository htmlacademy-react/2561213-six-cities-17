import React from 'react';

import { HotelRating, RoomType } from '../../enums';
import { OfferCardPreview } from '../../components';
import { Header } from '../../layouts';

type TFavoritesPage = {
  hasData?: boolean;
};

function EmptyFavoritesPage() {
  return (
    <div className='page__favorites-container container'>
      <section className='favorites favorites--empty'>
        <h1 className='visually-hidden'>Favorites (empty)</h1>
        <div className='favorites__status-wrapper'>
          <b className='favorites__status'>Nothing yet saved.</b>
          <p className='favorites__status-description'>
            Save properties to narrow down search or plan your future trips.
          </p>
        </div>
      </section>
    </div>
  );
}

function FavoritesPage({ hasData }: TFavoritesPage): React.ReactElement {
  return (
    <div className='page'>
      <Header hasData={hasData} />

      <main className='page__main page__main--favorites'>
        {hasData ? (
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
                    <OfferCardPreview
                      key={1}
                      imageSrc='markup/img/apartment-small-03.jpg'
                      price={180}
                      rating={HotelRating.Five}
                      text='Nice, cozy, warm big bed Apartment'
                      type={RoomType.Apartment}
                      isPremium
                      isInBookmarks
                    />
                    <OfferCardPreview
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
                    <OfferCardPreview
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
        ) : (
          <EmptyFavoritesPage />
        )}
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
