import React from 'react';

import OfferCardGallery from './offer-card-gallery';
import OfferCardContent from './offer-card-content';
import OfferCardMap from './offer-card-map';

function OfferCard(): React.ReactElement {
  return (
    <section className='offer'>
      <OfferCardGallery images={[]} />
      <OfferCardContent />
      <OfferCardMap />
    </section>
  );
}

export default OfferCard;
