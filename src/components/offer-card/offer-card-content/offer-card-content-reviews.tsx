import OfferCardReviewForm from '../offer-card-review-form'; // Импортируем форму

export type TOfferCardContentReview = {
  id: number;
  user: {
    name: string;
    avatar: string;
  };
  rating: number;
  text: string;
  date: string;
};

export type TOfferCardContentReviewList = {
  reviews: TOfferCardContentReview[];
};

export type TOfferCardContentReviews = TOfferCardContentReviewList & {
  reviewCount: number;
};

function OfferCardContentReview({ id, user, rating, text, date }: TOfferCardContentReview) {
  const { name, avatar } = user;

  return (
    <li className="reviews__item" key={id}>
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={avatar} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">{name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: `${rating * 20}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">{text}</p>
        <time className="reviews__time" dateTime={date}>
          {new Date(date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
        </time>
      </div>
    </li>
  );
}

function OfferCardContentReviewList({ reviews }: TOfferCardContentReviewList) {
  return (
    <ul className="reviews__list">
      {reviews.map((review) => (
        <OfferCardContentReview key={review.id} {...review} />
      ))}
    </ul>
  );
}

export function OfferCardContentReviews({ reviews, reviewCount }: TOfferCardContentReviews) {
  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
        Reviews &middot; <span className="reviews__amount">{reviewCount}</span>
      </h2>
      <OfferCardContentReviewList reviews={reviews} />
      <OfferCardReviewForm />
    </section>
  );
}
