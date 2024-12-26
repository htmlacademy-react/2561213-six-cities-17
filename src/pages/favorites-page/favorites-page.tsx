import React from 'react';

import { Header } from '../../layouts';
import { offers } from '../../mocks';
import { TOfferCard, OfferCardPreview } from '../../components';

type TFavoritesPage = {
  hasData?: boolean;
};

type TGroupedOffers = Record<string, TOfferCard[]>;

const groupOffersByCity = (offersArray: TOfferCard[]): TGroupedOffers =>
  offersArray.reduce((acc, offer) => {
    if (offer.isInBookmarks) {
      const city = offer.city;
      if (!acc[city]) {
        acc[city] = [];
      }
      acc[city].push(offer);
    }
    return acc;
  }, {} as TGroupedOffers);

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
  const groupedOffers = groupOffersByCity(offers);

  return (
    <div className='page'>
      <Header hasData={hasData} />

      <main className='page__main page__main--favorites'>
        {hasData ? (
          <div className='page__favorites-container container'>
            <section className='favorites'>
              <h1 className='favorites__title'>Saved listing</h1>
              <ul className='favorites__list'>
                {Object.entries(groupedOffers).map(([city, cityOffers]) => (
                  <li className='favorites__locations-items' key={city}>
                    <div className='favorites__locations locations locations--current'>
                      <div className='locations__item'>
                        <a className='locations__item-link' href='#'>
                          <span>{city}</span>
                        </a>
                      </div>
                    </div>
                    <div className='favorites__places'>
                      {cityOffers.map((offer) => (
                        <OfferCardPreview
                          key={offer.id}
                          id={offer.id}
                          price={offer.price}
                          stars={offer.stars}
                          name={offer.name}
                          roomType={offer.roomType}
                          imageSrc={offer.previewImage.imageSrc}
                          imageAlt={offer.previewImage.imageAlt}
                          imageHeight={110}
                          imageWidth={150}
                          isFavorite
                          isInBookmarks={offer.isInBookmarks}
                        />
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
          <img className='footer__logo' src='markup/img/logo.svg' alt='6 cities logo' width='64' height='33' />
        </a>
      </footer>
    </div>
  );
}

export default FavoritesPage;
