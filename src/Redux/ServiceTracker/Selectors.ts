import { createSelector } from '@reduxjs/toolkit';

export const SLICE_NAME = 'serviceTracker';

export const getServiceTrackerReducer = (state: { [x: string]: any }) => {
  return state[SLICE_NAME];
};

export const getServiceSelector = (state: any, serviceKey: string | number) => {
  return createSelector(
    (state: { [x: string]: { [x: string]: any } }) => state[SLICE_NAME][serviceKey],
    (serviceKeyValue: any) => serviceKeyValue
  )(state);
};
