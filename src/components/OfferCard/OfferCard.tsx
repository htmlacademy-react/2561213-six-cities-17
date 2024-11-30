import OfferCardContent, { TOfferTypeContent } from './OfferCardContent';
import OfferCardImage, { TOfferCardImage } from './OfferCardImage';

type TOfferCard = {
  isPremium?: boolean;
} & TOfferTypeContent &
  TOfferCardImage;

function OfferCard(props: TOfferCard) {
  return (
    <article className='cities__card place-card'>
      {props.isPremium && (
        <div className='place-card__mark'>
          <span>Premium</span>
        </div>
      )}
      <OfferCardImage imageSrc={props.imageSrc} imageAlt={props.imageAlt} />
      <OfferCardContent
        text={props.text}
        price={props.price}
        type={props.type}
        rating={props.rating}
        isInBookmarks={props.isInBookmarks}
      />
    </article>
  );
}

export default OfferCard;
