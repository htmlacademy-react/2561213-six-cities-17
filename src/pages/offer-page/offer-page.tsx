import React from 'react';
import { useParams } from 'react-router-dom';

import { OfferCard, OfferList } from '../../components';
import { Header } from '../../layouts';
import { offers } from '../../mocks';

type TOfferPage = {
  hasData?: boolean;
};

function OfferPage({ hasData }: TOfferPage): React.ReactElement {
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return <div>Offer ID is missing</div>;
  }

  const offerId = parseInt(id, 10);

  if (isNaN(offerId) || offerId < 0 || offerId >= offers.length) {
    return <div>Offer not found</div>;
  }

  const offerData = offers[offerId];

  return (
    <div className='page'>
      <Header hasData={hasData} />

      <main className='page__main page__main--offer'>
        <OfferCard {...offerData} />
        <div className='container'>
          <section className='near-places places'>
            <h2 className='near-places__title'>Other places in the neighbourhood</h2>
            <div className='near-places__list places__list'>
              <OfferList offers={offers.slice(0, 3)} />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default OfferPage;
