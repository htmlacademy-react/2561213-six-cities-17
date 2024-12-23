import React from 'react';

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
    <li className='reviews__item' key={id}>
      <div className='reviews__user user'>
        <div className='reviews__avatar-wrapper user__avatar-wrapper'>
          <img className='reviews__avatar user__avatar' src={avatar} width='54' height='54' alt='Reviews avatar' />
        </div>
        <span className='reviews__user-name'>{name}</span>
      </div>
      <div className='reviews__info'>
        <div className='reviews__rating rating'>
          <div className='reviews__stars rating__stars'>
            <span style={{ width: `${rating * 20}%` }}></span>
            <span className='visually-hidden'>Rating</span>
          </div>
        </div>
        <p className='reviews__text'>{text}</p>
        <time className='reviews__time' dateTime={date}>
          {new Date(date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
        </time>
      </div>
    </li>
  );
}

function OfferCardContentReviewList({ reviews }: TOfferCardContentReviewList) {
  return (
    <ul className='reviews__list'>
      {reviews.map((review) => (
        <OfferCardContentReview key={review.id} {...review} />
      ))}
    </ul>
  );
}

enum StarRating {
  Perfect = 5,
  Good = 4,
  NotBad = 3,
  Badly = 2,
  Terribly = 1
}

function OfferCardContentReviewForm() {
  return (
    <form className='reviews__form form' action='#' method='post'>
      <label className='reviews__label form__label' htmlFor='review'>
        Your review
      </label>
      <div className='reviews__rating-form form__rating'>
        {Object.entries(StarRating).map(([title, value]) => (
          <React.Fragment key={value}>
            <input
              className='form__rating-input visually-hidden'
              name='rating'
              value={value}
              id={`${value}-stars`}
              type='radio'
            />
            <label htmlFor={`${value}-stars`} className='reviews__rating-label form__rating-label' title={title}>
              <svg className='form__star-image' width='37' height='33'>
                <use xlinkHref='#icon-star'></use>
              </svg>
            </label>
          </React.Fragment>
        ))}
      </div>
      <textarea
        className='reviews__textarea form__textarea'
        id='review'
        name='review'
        placeholder='Tell how was your stay, what you like and what can be improved'
      />
      <div className='reviews__button-wrapper'>
        <p className='reviews__help'>
          To submit review please make sure to set <span className='reviews__star'>rating</span> and describe your stay
          with at least <b className='reviews__text-amount'>50 characters</b>.
        </p>
        <button className='reviews__submit form__submit button' type='submit' disabled>
          Submit
        </button>
      </div>
    </form>
  );
}

export function OfferCardContentReviews({ reviews, reviewCount }: TOfferCardContentReviews) {
  return (
    <section className='offer__reviews reviews'>
      <h2 className='reviews__title'>
        Reviews &middot; <span className='reviews__amount'>{reviewCount}</span>
      </h2>
      <OfferCardContentReviewList reviews={reviews} />
      <OfferCardContentReviewForm />
    </section>
  );
}
