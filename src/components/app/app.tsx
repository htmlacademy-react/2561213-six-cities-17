import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from '../../router';
import { useAppSelector } from '../../hooks';
import { LoadingPage } from '../../pages';

function App(): React.ReactElement {
  const isOffersDataLoading = useAppSelector(
    (state) => state.isOffersDataLoading
  );

  if (isOffersDataLoading) {
    return <LoadingPage />;
  }

  return <RouterProvider router={router} />;
}

export default App;
