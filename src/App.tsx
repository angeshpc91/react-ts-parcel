import React, { Suspense, useEffect, useState } from 'react';
import { RouterProvider, useLocation, useNavigate } from 'react-router-dom';


import Loader from './GlobalComponents/Loader';

import {
  setAppMetaAction,
  setAppMetaModeAction,
  setAppMetaMinimumLoaderTimeCompletedAction
} from '@Redux/AppMeta/Actions';
import { getAppMetaReducer } from '@Redux/AppMeta/Selectors';
import { getServiceSelector } from '@Redux/ServiceTracker/Selectors';
import fetchAppMetaServiceAction, { fetchAppMetaServiceName } from './Redux/AppMeta/Services/fetchAppMeta.Service';

import performHandshake from './Services/performHandshake';
// import AppInitError from './GlobalComponents/AppInitError'
import ErrorBoundary from './Components/ErrorBoundary';

import Footer from './Components/Footer';
import Header from './Components/Header';
// import { getLocalStorage } from './Utils/global';
// import { LOCAL_STORAGE_KEY } from './Constants/storage';
// import { ROUTES } from './Constants/routes'
import AppRoutes from '@Configurations/routing/AppRoutes';
import { APP_ROUTES } from '@Configurations/routing/routes';
import { ROUTES } from '@Constants/routes';

function App(props: { mode?: any; palette?: any; persisted?: boolean; isLoading?: boolean; fontUrl?: any; fontFamilyName?: any; minimumLoaderTimeCompleted?: boolean; actions?: any; minimumLoaderTime?: any }) {
  const {
    mode,
    palette,
    persisted = false,
    isLoading = false,
    fontUrl,
    fontFamilyName,
    minimumLoaderTimeCompleted = false
  } = props;

  const [hasError, setHasError] = useState(false);

  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const navigate = useNavigate();
  const location = useLocation();
  const handleThemeChange = (mode: string) =>
    setTheme(mode === 'Light' ? 'dark' : 'light');

  useEffect(() => {
    console.log('INSIDE APP', isLoading, minimumLoaderTimeCompleted, persisted);
    initialize()

    navigate(ROUTES.HOME);

    // if (
    //   location.pathname === ROUTES.HOME &&
    //   getLocalStorage(LOCAL_STORAGE_KEY)
    // ) {
    //   navigate(ROUTES.HOME);
    // }
  }, []);

  const initialize = async () => {
    setHasError(false);
    // await (async () => {
    const { actions, minimumLoaderTime } = props;
    try {
      // setTimeout(
      //   () => { actions.setAppMetaMinimumLoaderTimeCompletedAction(); },
      //   minimumLoaderTime
      // );
      await performHandshake();
      // const appConfig = await actions.fetchAppMetaServiceAction();
      // actions.setAppMetaAction(appConfig);
      // actions.completeAppMetaFetchAction();
    } catch (error) {
      setHasError(true);
      // actions.completeAppMetaFetchAction();
    }
    // })
  };

  // if (hasError) { return <AppInitError initialize={this.initialize} /> }
  // let children = <Loader />

  // const AppTheme = getTheme(palette, fontFamilyName)

  // if (minimumLoaderTimeCompleted && persisted && !isLoading) {
  //   console.log("INSIDE IF");

  //   const router = getAppRouter()
  //   children = <RouterProvider router={router} />
  // } else {
  //   console.log("INSIDE eelse");
  //   const router = getAppRouter()
  //   children = <RouterProvider router={router} />
  // }

  return (
    <>
      <ErrorBoundary>
        {/* <Helmet>
            <link href={fontUrl} rel='stylesheet' />
          </Helmet> */}
        <Suspense fallback={<Loader />}>
          <Header switched={theme} onThemeChange={handleThemeChange} />
          <AppRoutes appRoutes={APP_ROUTES} />
          {/* {children} */}
          <Footer />
        </Suspense>
      </ErrorBoundary>
    </>
  );
}

export default App;
