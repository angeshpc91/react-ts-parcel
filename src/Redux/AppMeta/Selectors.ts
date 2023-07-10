import { createSelector } from '@reduxjs/toolkit';

export const SLICE_NAME = 'appMeta';

export const getAppMetaReducer = (state: { [x: string]: any }) => {
  return state[SLICE_NAME];
};

export const getAppMetaModeSelector = createSelector(
  (state: { [x: string]: { appMeta: any } }) => state[SLICE_NAME].appMeta,
  (appMeta) => appMeta
);
