import React from 'react';
import { Navigate } from 'react-router-dom';

import { AuthorizationStatus } from '../../enums';
import { Route } from '../route';

type PrivateRouteProps = {
  authorizationStatus: AuthorizationStatus;
  children: React.ReactElement;
};

function PrivateRoute(props: PrivateRouteProps): React.ReactElement {
  const { authorizationStatus, children } = props;

  return authorizationStatus === AuthorizationStatus.Auth ? (
    children
  ) : (
    <Navigate to={Route.Login} />
  );
}

export default PrivateRoute;
