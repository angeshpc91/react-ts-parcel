import { createSlice } from '@reduxjs/toolkit';
import { SLICE_NAME } from './Selectors';

type AuthState = {
  isLoggedIn: boolean;
};

const INITIAL_STATE: AuthState = { isLoggedIn: false };

const slice = createSlice({
  name: SLICE_NAME,
  initialState: INITIAL_STATE,
  extraReducers: (builder) => { },
  reducers: {}
});

export default slice.reducer;
