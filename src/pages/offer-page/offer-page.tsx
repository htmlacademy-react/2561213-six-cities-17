import React from 'react';
// import { useParams } from 'react-router-dom';
//
// import { OfferCard } from '../../components';
// import { Header } from '../../layouts';
// import { offers } from '../../mocks';
// import { TPoint } from '../../components/offer-map';
// import NearbyOffers from '../../components/nearby-offers'

function OfferPage(): React.ReactElement {
  // const [selectedPoint, setSelectedPoint] = useState<TPoint | undefined>(
  //   undefined
  // );
  // const { id } = useParams<{ id: string }>();
  // const offer = useAppSelector((state) => state.offer);
  // const dispatch = useAppDispatch();

  // const handleOfferCardHover = (offerId: string) => {
  //   const currentOffer = offers.find((offer) => offer.id === offerId);
  //   if (currentOffer) {
  //     setSelectedPoint(currentOffer.point);
  //   }
  // };
  //
  // const otherOffers = offers.filter(
  //   (offer) => offer.city === offerData.city && offer.id !== offerId
  // );
  //
  // const points = otherOffers.map((offer) => offer.point);

  return (
    <div className='page'>
      {/*<Header hasData={hasData} />*/}

      {/*<main className='page__main page__main--offer'>*/}
      {/*  <OfferCard*/}
      {/*    {...offerData}*/}
      {/*    points={points}*/}
      {/*    selectedPoint={selectedPoint}*/}
      {/*  />*/}
      {/*  <NearbyOffers*/}
      {/*    offers={otherOffers}*/}
      {/*    onOfferCardHover={handleOfferCardHover}*/}
      {/*  />*/}
      {/*</main>*/}
    </div>
  );
}

export default OfferPage;
