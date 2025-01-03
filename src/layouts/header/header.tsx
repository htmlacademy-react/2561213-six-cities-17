import React from 'react';
import { Link } from 'react-router-dom';

import { Route } from '../../router';

type THeader = {
  hasData?: boolean;
};

function Header({ hasData }: THeader): React.ReactElement {
  return (
    <header className='header'>
      <div className='container'>
        <div className='header__wrapper'>
          <div className='header__left'>
            <Link className='header__logo-link' to={Route.Main}>
              <img
                className='header__logo'
                src='markup/img/logo.svg'
                alt='6 cities logo'
                width='81'
                height='41'
              />
            </Link>
          </div>
          <nav className='header__nav'>
            <ul className='header__nav-list'>
              <li className='header__nav-item user'>
                <Link
                  className='header__nav-link header__nav-link--profile'
                  to={'#'}
                >
                  <div className='header__avatar-wrapper user__avatar-wrapper'></div>
                  {hasData ? (
                    <>
                      <span className='header__user-name user__name'>
                        Oliver.conner@gmail.com
                      </span>
                      <span className='header__favorite-count'>3</span>
                    </>
                  ) : (
                    <span className='header__login'>Sign in</span>
                  )}
                </Link>
              </li>
              {hasData && (
                <li className='header__nav-item'>
                  <a className='header__nav-link' href='#'>
                    <span className='header__signout'>Sign out</span>
                  </a>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
