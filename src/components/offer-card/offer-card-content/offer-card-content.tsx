import { HotelRating } from '../../../enums';
import { OfferCardContentInsideItems, TOfferCardContentInsideItem } from './offer-card-content-inside-items';
import { OfferCardContentFeatures, TOfferCardContentFeature } from './offer-card-content-features';
import { OfferCardContentHost, TOfferCardContentHost } from './offer-card-content-host';
import { OfferCardContentReviews, TOfferCardContentReview } from './offer-card-content-reviews';

export type TOfferCardContent = {
  id: number;
  isPremium: boolean;
  name: string;
  stars: HotelRating;
  features: TOfferCardContentFeature[];
  rating: number;
  price: number;
  insideItems: TOfferCardContentInsideItem[];
  host: TOfferCardContentHost;
  reviews: TOfferCardContentReview[];
};

function OfferCardContent(props: TOfferCardContent) {
  const { isPremium, name, stars, features, rating, price, insideItems, host, reviews } = props;

  return (
    <div className='offer__container container'>
      <div className='offer__wrapper'>
        {isPremium && (
          <div className='offer__mark'>
            <span>Premium</span>
          </div>
        )}
        <div className='offer__name-wrapper'>
          <h1 className='offer__name'>{name}</h1>
          <button className='offer__bookmark-button button' type='button'>
            <svg className='offer__bookmark-icon' width='31' height='33'>
              <use xlinkHref='#icon-bookmark'></use>
            </svg>
            <span className='visually-hidden'>To bookmarks</span>
          </button>
        </div>
        <div className='offer__rating rating'>
          <div className='offer__stars rating__stars'>
            <span style={{ width: stars }}></span>
            <span className='visually-hidden'>Rating</span>
          </div>
          <span className='offer__rating-value rating__value'>{rating}</span>
        </div>
        <OfferCardContentFeatures features={features} />
        <div className='offer__price'>
          <b className='offer__price-value'>&euro;{price}</b>
          <span className='offer__price-text'>&nbsp;night</span>
        </div>
        <OfferCardContentInsideItems insideItems={insideItems} />
        <OfferCardContentHost {...host} />
        <OfferCardContentReviews reviews={reviews} reviewCount={reviews.length} />
      </div>
    </div>
  );
}

export default OfferCardContent;
