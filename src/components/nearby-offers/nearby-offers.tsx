import React from 'react';
import { OfferList } from '../offer-list';
import { TOfferCard } from '../offer-card';

export type TNearbyOffers = {
  offers: TOfferCard[];
  onOfferCardHover: (offerId: number) => void;
};

function NearbyOffers(props: TNearbyOffers): React.ReactElement {
  return (
    <div className='container'>
      <section className='near-places places'>
        <h2 className='near-places__title'>
          Other places in the neighbourhood
        </h2>
        <div className='near-places__list places__list'>
          <OfferList
            offers={props.offers}
            onOfferCardHover={props.onOfferCardHover}
          />
        </div>
      </section>
    </div>
  );
}

export default NearbyOffers;
