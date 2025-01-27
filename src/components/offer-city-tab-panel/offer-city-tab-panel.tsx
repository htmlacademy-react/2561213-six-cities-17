import React from 'react';
import cn from 'classnames';

import { TCity } from '../../types';

export type TOfferCityTabPanel = {
  currentCity: TCity;
  cities: TCity[];
  onCityChange: (city: TCity) => void;
};

function OfferCityTabPanel(props: TOfferCityTabPanel): React.ReactElement {
  const { currentCity, cities, onCityChange } = props;

  const handleCityClick =
    (city: TCity) => (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      onCityChange(city);
    };

  return (
    <div className='tabs'>
      <section className='locations container'>
        <ul className='locations__list tabs__list'>
          {cities.map((city) => {
            const btnClass = cn('locations__item-link tabs__item', {
              'tabs__item--active': city === currentCity
            });

            return (
              <li className='locations__item' key={city.name}>
                <a
                  className={btnClass}
                  href='#'
                  onClick={handleCityClick(city)}
                >
                  <span>{city.name}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}

export default OfferCityTabPanel;
