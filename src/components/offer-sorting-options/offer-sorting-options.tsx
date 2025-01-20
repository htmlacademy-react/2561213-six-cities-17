import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import cn from 'classnames';

import { SortType } from '../../enums';
import { changeOffers, setSortType } from '../../store/action';
import { getSortedOffers } from '../../helper';

function OfferSortingOptions(): React.ReactElement {
  const dispatch = useAppDispatch();
  const activeSort = useAppSelector((state) => state.sortType);
  const currentOptions = useAppSelector((state) => state.offers);
  const [isOpen, setIsOpen] = useState(false);

  const handleSortClick = (sortType: SortType) => {
    dispatch(setSortType(sortType));
    const sortedOffers = getSortedOffers(currentOptions, sortType);
    dispatch(changeOffers({ offers: sortedOffers }));

    setIsOpen(false);
  };

  return (
    <form className='places__sorting' action='#' method='get'>
      <span className='places__sorting-caption'>Sort by</span>
      <span
        className='places__sorting-type'
        tabIndex={0}
        onClick={() => setIsOpen(!isOpen)}
      >
        {activeSort}
        <svg className='places__sorting-arrow' width='7' height='4'>
          <use xlinkHref='#icon-arrow-select'></use>
        </svg>
      </span>
      {isOpen && (
        <ul className='places__options places__options--custom places__options--opened'>
          {Object.values(SortType).map((option) => (
            <li
              key={option}
              className={cn('places__option', {
                'places__option--active': option === activeSort
              })}
              tabIndex={0}
              onClick={() => handleSortClick(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </form>
  );
}

export default OfferSortingOptions;
