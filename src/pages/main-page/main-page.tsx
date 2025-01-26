import React, { useState } from 'react';

import { Header } from '../../layouts';
import { OfferList, OfferCityTabPanel } from '../../components';
import { CITIES } from '../../enums';
import { OfferMap, TPoint } from '../../components/offer-map';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeCity } from '../../store/action';
import { selectOffersByCity } from '../../helper';
import OfferSortingOptions from '../../components/offer-sorting-options/offer-sorting-options.tsx';
import { TCity } from '../../types';

export type TMainPage = {
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

function MainPage(props: TMainPage): React.ReactElement {
  const dispatch = useAppDispatch();
  const currentCity = useAppSelector((state) => state.city);
  const offers = useAppSelector((state) => state.offers);
  const currentOffers = selectOffersByCity(currentCity, offers);
  const [selectedPoint, setSelectedPoint] = useState<TPoint | undefined>(
    undefined
  );

  const handleCityChange = (city: TCity) => {
    dispatch(changeCity({ city }));
  };

  const handleOfferCardHover = (offerId: string) => {
    const currentOffer = currentOffers.find((offer) => offer.id === offerId);

    if (currentOffer) {
      const point: TPoint = {
        lat: currentOffer.location.latitude,
        lng: currentOffer.location.longitude,
        title: currentOffer.title
      };

      setSelectedPoint(point);
    }
  };

  const handleOfferCardLeave = () => {
    setSelectedPoint(undefined);
  };

  const cities = Object.values(CITIES);

  const points = offers
    .filter((offer) => offer.city.name === currentCity.name)
    .map((offer) => ({
      title: offer.title,
      lat: offer.location.latitude,
      lng: offer.location.longitude
    }));

  console.log(currentOffers);

  return (
    <div className='page page--gray page--main'>
      <Header hasData={props.hasData} />

      <main className='page__main page__main--index'>
        <h1 className='visually-hidden'>Cities</h1>
        <OfferCityTabPanel
          currentCity={currentCity}
          cities={cities}
          onCityChange={handleCityChange}
        />
        <div className='cities'>
          {props.hasData ? (
            <div className='cities__places-container container'>
              <section className='cities__places places'>
                <h2 className='visually-hidden'>Places</h2>
                <b className='places__found'>
                  {currentOffers.length} places to stay in {currentCity.name}
                </b>
                <OfferSortingOptions />
                <OfferList
                  offers={currentOffers}
                  onOfferCardHover={handleOfferCardHover}
                  onOfferCardLeave={handleOfferCardLeave}
                />
              </section>
              <div className='cities__right-section'>
                <section className='cities__map map'>
                  <OfferMap
                    key={currentCity.name}
                    city={currentCity}
                    points={points}
                    selectedPoint={selectedPoint}
                  />
                </section>
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
