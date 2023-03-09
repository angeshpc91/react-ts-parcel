import { combineReducers } from 'redux';

import AuthReducer from './Auth/Reducer';
import { SLICE_NAME as AuthSliceName } from './Auth/Selectors';

import AppMetaReducer from './AppMeta/Reducer';
import { SLICE_NAME as AppMetaSliceName } from './AppMeta/Selectors';

import ServiceTrackerReducer from './ServiceTracker/Reducer';
import { SLICE_NAME as ServiceTrackerSliceName } from './ServiceTracker/Selectors';

import userReducer from './User'
import HomeReducer from '@Container/Home/Home.reducer';


const reducers = {
  [AuthSliceName]: AuthReducer,
  [AppMetaSliceName]: AppMetaReducer,
  [ServiceTrackerSliceName]: ServiceTrackerReducer,

  //
  user: userReducer,
  home: HomeReducer,

};

const whitelist = [AppMetaSliceName];

export default combineReducers(reducers);

export { whitelist };
