import React from 'react';

import { HotelRating, RoomType } from '../../enums';
import { OfferCard, OfferCardPreview } from '../../components';
import { Header } from '../../layouts';

type TOfferPage = {
  hasData?: boolean;
};

function OfferPage({ hasData }: TOfferPage): React.ReactElement {
  return (
    <div className='page'>
      <Header hasData={hasData} />

      <main className='page__main page__main--offer'>
        <OfferCard />
        <div className='container'>
          <section className='near-places places'>
            <h2 className='near-places__title'>
              Other places in the neighbourhood
            </h2>
            <div className='near-places__list places__list'>
              <OfferCardPreview
                key={1}
                price={80}
                rating={HotelRating.Four}
                text='Wood and stone place'
                type={RoomType.Room}
                imageSrc='markup/img/room.jpg'
                isInBookmarks
              />
              <OfferCardPreview
                key={2}
                price={132}
                rating={HotelRating.Four}
                text='Canal View Prinsengracht'
                type={RoomType.Apartment}
                imageSrc='markup/img/apartment-02.jpg'
              />
              <OfferCardPreview
                key={3}
                price={180}
                rating={HotelRating.Five}
                text='Nice, cozy, warm big bed Apartment'
                type={RoomType.Apartment}
                imageSrc='markup/img/apartment-03.jpg'
                isPremium
              />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default OfferPage;
