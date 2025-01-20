import React, { useState } from 'react';

import { Header } from '../../layouts';
import { OfferList, OfferCityTabPanel } from '../../components';
import { offers } from '../../mocks';
import { CITIES } from '../../enums';
import { OfferMap, TCity, TPoint } from '../../components/offer-map';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeCity, changeOffers } from '../../store/action';
import { handleOfferChange } from '../../helper';
import OfferSortingOptions from '../../components/offer-sorting-options/offer-sorting-options.tsx';

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
  const currentCity = useAppSelector((state) => state.city);
  const [selectedPoint, setSelectedPoint] = useState<TPoint | undefined>(
    undefined
  );

  const dispatch = useAppDispatch();

  const handleCityChange = (city: TCity) => {
    dispatch(changeCity({ city }));

    const currentOffers = handleOfferChange(city);
    dispatch(changeOffers({ offers: currentOffers }));
  };

  const handleOfferCardHover = (offerId: number) => {
    const currentOffer = offers.find((offer) => offer.id === offerId);

    if (currentOffer) {
      setSelectedPoint(currentOffer.point);
    }
  };

  const handleOfferCardLeave = () => {
    setSelectedPoint(undefined);
  };

  const cities = Object.values(CITIES);

  const points = offers
    .filter((offer) => offer.city === currentCity)
    .map((offer) => offer.point);

  const currentOffers = useAppSelector((state) => state.offers);

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
                  {currentOffers.length} places to stay in {currentCity.title}
                </b>
                <OfferSortingOptions />

                <div className='cities__places-list places__list tabs__content'>
                  <OfferList
                    offers={currentOffers}
                    onOfferCardHover={handleOfferCardHover}
                    onOfferCardLeave={handleOfferCardLeave}
                  />
                </div>
              </section>
              <div className='cities__right-section'>
                <section className='cities__map map'>
                  <OfferMap
                    key={currentCity.title}
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
