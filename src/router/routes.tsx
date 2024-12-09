import { createRoutesFromElements, Route } from 'react-router-dom';

import {
  ErrorPage,
  FavoritesPage,
  LoginPage,
  MainPage,
  OfferPage
} from '../pages';
import { Route as RouteEnum } from './route';

import { AuthorizationStatus as Status } from '../enums';
import PrivateRoute from './private-route';

export const routes = createRoutesFromElements(
  <Route errorElement={<ErrorPage />}>
    <Route
      path={RouteEnum.Main}
      element={<MainPage placesAmount={312} offersAmount={5} />}
    />
    <Route path={RouteEnum.Login} element={<LoginPage />} />
    <Route element={<PrivateRoute authorizationStatus={Status.NoAuth} />}>
      <Route path={RouteEnum.Favorites} element={<FavoritesPage />} />
    </Route>
    <Route path={RouteEnum.Offer} element={<OfferPage />} />
    <Route
      path={RouteEnum.NotFound}
      element={<ErrorPage message='Страница не найдена' />}
    />
  </Route>
);
