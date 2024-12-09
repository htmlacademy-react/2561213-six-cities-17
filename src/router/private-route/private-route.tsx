import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { AuthorizationStatus } from '../../enums';
import { Route } from '../route';

type PrivateRouteProps = {
  authorizationStatus: AuthorizationStatus;
};

function PrivateRoute(props: PrivateRouteProps): React.ReactElement {
  const { authorizationStatus } = props;

  return authorizationStatus === AuthorizationStatus.Auth ? (
    <Outlet />
  ) : (
    <Navigate to={Route.Login} />
  );
}

export default PrivateRoute;
