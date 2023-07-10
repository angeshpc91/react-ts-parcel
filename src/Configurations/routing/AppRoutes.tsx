import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import { IAppRoutesProps } from './Router.type';

const AppRoutes: FC<IAppRoutesProps> = ({ appRoutes }) => {
  return (
    <Routes>
      {appRoutes.map((routesProps, key) => (
        <Route key={key} {...routesProps} />
      ))}
    </Routes>
  );
};

export default AppRoutes;
