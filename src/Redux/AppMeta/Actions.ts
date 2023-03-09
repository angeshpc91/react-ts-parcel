import { createAction, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchAppMetaServiceName = 'appMeta/fetchAppMeta';
export const fetchAppMetaActions = {
  loading: createAction(`${fetchAppMetaServiceName}/LOADING`),
  success: createAction(`${fetchAppMetaServiceName}/SUCCESS`),
  error: createAction(`${fetchAppMetaServiceName}/ERROR`)
};

export const setAppMetaAction: any = createAsyncThunk('appMeta/setAppMeta', async () => { });
export const setAppMetaModeAction: any = createAsyncThunk('appMeta/setAppMetaMode', async () => { });
export const setAppMetaMinimumLoaderTimeCompletedAction: any = createAsyncThunk('appMeta/setAppMetaMinimumLoaderTimeCompleted', async () => { });
