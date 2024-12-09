import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Route as RouteEnum, PrivateRoute } from '../../router';
import {
  ErrorPage,
  FavoritesPage,
  LoginPage,
  MainPage,
  OfferPage
} from '../../pages';
import { AuthorizationStatus } from '../../enums';

function App(): React.ReactElement {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={RouteEnum.Main}
          element={<MainPage placesAmount={312} offersAmount={5} />}
        />
        <Route path={RouteEnum.Login} element={<LoginPage />} />
        <Route
          path={RouteEnum.Favorites}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
              <FavoritesPage />
            </PrivateRoute>
          }
        />
        <Route path={RouteEnum.Offer} element={<OfferPage />} />
        <Route path={RouteEnum.NotFound} element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
