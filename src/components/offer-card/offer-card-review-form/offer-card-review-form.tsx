import React, { useState, useEffect } from 'react';

enum StarRating {
  Ten = 10,
  Nine = 9,
  Eight = 8,
  Seven = 7,
  Six = 6,
  Five = 5,
  Four = 4,
  Three = 3,
  Two = 2,
  One = 1,
}

export type TReviewFormState = {
  rating: number;
  reviewText: string;
};

function OfferCardReviewForm() {
  const [formState, setFormState] = useState<TReviewFormState>({
    rating: 0,
    reviewText: '',
  });

  const [isFormValid, setIsFormValid] = useState<boolean>(false);

  useEffect(() => {
    const { rating, reviewText } = formState;
    setIsFormValid(rating > 0 && reviewText.length >= 50);
  }, [formState]);

  const handleRatingChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newRating = Number(event.target.value);
    setFormState((prevState) => ({
      ...prevState,
      rating: newRating,
    }));
  };

  const handleReviewTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = event.target.value;
    setFormState((prevState) => ({
      ...prevState,
      reviewText: newText,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isFormValid) {
      // eslint-disable-next-line no-console
      console.log(formState);
      setFormState({
        rating: 0,
        reviewText: '',
      });
    }
  };

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handleSubmit}>
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        {Object.values(StarRating)
          .filter((value) => typeof value === 'number')
          .map((value) => (
            <React.Fragment key={value}>
              <input
                className="form__rating-input visually-hidden"
                name="rating"
                value={value}
                id={`${value}-stars`}
                type="radio"
                checked={formState.rating === Number(value)} // Явное приведение к number
                onChange={handleRatingChange}
              />
              <label htmlFor={`${value}-stars`} className="reviews__rating-label form__rating-label" title={`${value} stars`}>
                <svg className="form__star-image" width="37" height="33">
                  <use xlinkHref="#icon-star"></use>
                </svg>
              </label>
            </React.Fragment>
          ))}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={formState.reviewText}
        onChange={handleReviewTextChange}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay
          with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={!isFormValid}>
          Submit
        </button>
      </div>
    </form>
  );
}

export default OfferCardReviewForm;
