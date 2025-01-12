import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import { OfferCard } from '../../components';
import { Header } from '../../layouts';
import { offers } from '../../mocks';
import { TPoint } from '../../components/offer-map';
import NearbyOffers from '../../components/nearby-offers';

type TOfferPage = {
  hasData?: boolean;
};

function OfferPage({ hasData }: TOfferPage): React.ReactElement {
  const { id } = useParams<{ id: string }>();
  const [selectedPoint, setSelectedPoint] = useState<TPoint | undefined>(
    undefined
  );

  const handleOfferCardHover = (offerId: number) => {
    const currentOffer = offers.find((offer) => offer.id === offerId);
    if (currentOffer) {
      setSelectedPoint(currentOffer.point);
    }
  };

  if (!id) {
    return <div>Offer ID is missing</div>;
  }

  const offerId = parseInt(id, 10);

  if (isNaN(offerId) || offerId < 0 || offerId >= offers.length) {
    return <div>Offer not found</div>;
  }

  const offerData = offers[offerId];

  const otherOffers = offers.filter(
    (offer) => offer.city === offerData.city && offer.id !== offerId
  );

  const points = otherOffers.map((offer) => offer.point);

  return (
    <div className='page'>
      <Header hasData={hasData} />

      <main className='page__main page__main--offer'>
        <OfferCard
          {...offerData}
          points={points}
          selectedPoint={selectedPoint}
        />
        <NearbyOffers
          offers={otherOffers}
          onOfferCardHover={handleOfferCardHover}
        />
      </main>
    </div>
  );
}

export default OfferPage;
