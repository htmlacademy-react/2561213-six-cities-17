import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import { HotelRating, RoomType } from '../../enums';
import { OfferCardPreview } from '../../components';
import { Header } from '../../layouts';

type TMainPage = {
  placesAmount: number;
  offersAmount: number;
  hasData?: boolean;
};

function EmptyMainPage() {
  return (
    <div className='cities__places-container cities__places-container--empty container'>
      <section className='cities__no-places'>
        <div className='cities__status-wrapper tabs__content'>
          <b className='cities__status'>No places to stay available</b>
          <p className='cities__status-description'>
            We could not find any property available at the moment in Dusseldorf
          </p>
        </div>
      </section>
      <div className='cities__right-section'></div>
    </div>
  );
}

function MainPage({
  placesAmount,
  offersAmount,
  hasData
}: TMainPage): React.ReactElement {
  return (
    <div className='page page--gray page--main'>
      <Header hasData={hasData} />

      <main className='page__main page__main--index'>
        <h1 className='visually-hidden'>Cities</h1>
        <div className='tabs'>
          <section className='locations container'>
            <ul className='locations__list tabs__list'>
              <li className='locations__item'>
                <a className='locations__item-link tabs__item' href='#'>
                  <span>Paris</span>
                </a>
              </li>
              <li className='locations__item'>
                <a className='locations__item-link tabs__item' href='#'>
                  <span>Cologne</span>
                </a>
              </li>
              <li className='locations__item'>
                <a className='locations__item-link tabs__item' href='#'>
                  <span>Brussels</span>
                </a>
              </li>
              <li className='locations__item'>
                <a className='locations__item-link tabs__item tabs__item--active'>
                  <span>Amsterdam</span>
                </a>
              </li>
              <li className='locations__item'>
                <a className='locations__item-link tabs__item' href='#'>
                  <span>Hamburg</span>
                </a>
              </li>
              <li className='locations__item'>
                <a className='locations__item-link tabs__item' href='#'>
                  <span>Dusseldorf</span>
                </a>
              </li>
            </ul>
          </section>
        </div>
        <div className='cities'>
          {hasData ? (
            <div className='cities__places-container container'>
              <section className='cities__places places'>
                <h2 className='visually-hidden'>Places</h2>
                <b className='places__found'>
                  {placesAmount} places to stay in Amsterdam
                </b>
                <form className='places__sorting' action='#' method='get'>
                  <span className='places__sorting-caption'>Sort by</span>
                  <span className='places__sorting-type' tabIndex={0}>
                    Popular
                    <svg className='places__sorting-arrow' width='7' height='4'>
                      <use xlinkHref='#icon-arrow-select'></use>
                    </svg>
                  </span>
                  <ul className='places__options places__options--custom places__options--opened'>
                    <li
                      className='places__option places__option--active'
                      tabIndex={0}
                    >
                      Popular
                    </li>
                    <li className='places__option' tabIndex={0}>
                      Price: low to high
                    </li>
                    <li className='places__option' tabIndex={0}>
                      Price: high to low
                    </li>
                    <li className='places__option' tabIndex={0}>
                      Top-rated first
                    </li>
                  </ul>
                </form>

                <div className='cities__places-list places__list tabs__content'>
                  <OfferCardPreview
                    key={1}
                    type={RoomType.Apartment}
                    price={120}
                    rating={HotelRating.Four}
                    text='Beautiful &amp; luxurious Apartment at great location'
                    imageSrc='markup/img/apartment-01.jpg'
                    isPremium
                  />
                  <OfferCardPreview
                    key={2}
                    type={RoomType.Room}
                    price={80}
                    rating={HotelRating.Four}
                    text='Wood and stone place'
                    imageSrc='markup/img/room.jpg'
                    isInBookmarks
                  />
                  <OfferCardPreview
                    key={3}
                    type={RoomType.Apartment}
                    price={132}
                    rating={HotelRating.Four}
                    text='Canal View Prinsengracht'
                    imageSrc='markup/img/apartment-02.jpg'
                  />
                  <OfferCardPreview
                    key={4}
                    type={RoomType.Apartment}
                    price={180}
                    rating={HotelRating.Five}
                    text='Nice, cozy, warm big bed Apartment'
                    imageSrc='markup/img/apartment-03.jpg'
                    isPremium
                  />
                  <OfferCardPreview
                    key={5}
                    type={RoomType.Room}
                    price={80}
                    rating={HotelRating.Four}
                    text='Wood and stone place'
                    imageSrc='markup/img/room.jpg'
                    isInBookmarks
                  />
                  {Array.from({ length: offersAmount }).map(() => (
                    <OfferCardPreview
                      key={uuidv4()}
                      type={RoomType.Apartment}
                      price={120}
                      rating={HotelRating.Four}
                      text='Beautiful &amp; luxurious Apartment at great location'
                      imageSrc='markup/img/apartment-01.jpg'
                      isPremium
                    />
                  ))}
                </div>
              </section>
              <div className='cities__right-section'>
                <section className='cities__map map'></section>
              </div>
            </div>
          ) : (
            <EmptyMainPage />
          )}
        </div>
      </main>
    </div>
  );
}

export default MainPage;
