
import React from 'react';
import { ROUTES } from '@Constants/routes';

import { RouteObj } from './Router.type';

const Page404Page = React.lazy(
  () => import(
    /* webpackChunkName: "Page404Page" */
    /* webpackPreload: true */
    '@Pages/Page404/Page404.Container'
  )
);



const HomePage = React.lazy(
  () => import(
    /* webpackChunkName: "Home Page" */
    /* webpackPreload: true */
    '@Container/Home'
  )
);


// import ProtectedRoute from './ProtectedRouter';

export const APP_ROUTES: RouteObj[] = [
  {
    path: ROUTES.ANY,
    exact: false,
    element: <Page404Page />
  },

  // Home
  {
    path: ROUTES.HOME,
    exact: true,
    element: <HomePage />
  },
];
