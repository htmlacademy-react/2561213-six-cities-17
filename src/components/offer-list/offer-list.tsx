import React from 'react';
import { OfferCardPreview } from '../offer-card-preview';
import { TOffers } from '../../types';

export type TOfferList = {
  offers: TOffers;
  onOfferCardHover?: (offerId: string) => void;
  onOfferCardLeave?: () => void;
};

function OfferList(props: TOfferList): React.ReactElement {
  const { offers, onOfferCardHover, onOfferCardLeave } = props;

  return (
    <div className='cities__places-list places__list tabs__content'>
      {offers.map((offer) => (
        <OfferCardPreview
          key={offer.id}
          offer={offer}
          onOfferCardHover={onOfferCardHover}
          onOfferCardLeave={onOfferCardLeave}
        />
      ))}
    </div>
  );
}

export default OfferList;
