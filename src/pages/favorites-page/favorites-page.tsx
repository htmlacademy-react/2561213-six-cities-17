import React from 'react';

import { Header } from '../../layouts';
import { OfferCardPreview } from '../../components';
import { TOffers } from '../../types';

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
  const groupedOffers: TOffers = [];

  return (
    <div className='page'>
      <Header hasData={hasData} />

      <main className='page__main page__main--favorites'>
        {hasData ? (
          <div className='page__favorites-container container'>
            <section className='favorites'>
              <h1 className='favorites__title'>Saved listing</h1>
              <ul className='favorites__list'>
                {Object.entries(groupedOffers).map(([city]) => (
                  <li className='favorites__locations-items' key={city}>
                    <div className='favorites__locations locations locations--current'>
                      <div className='locations__item'>
                        <a className='locations__item-link' href='#'>
                          <span>{city}</span>
                        </a>
                      </div>
                    </div>
                    <div className='favorites__places'>
                      {groupedOffers.map((offer) => (
                        <OfferCardPreview key={offer.id} offer={offer} />
                      ))}
                    </div>
                  </li>
                ))}
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
