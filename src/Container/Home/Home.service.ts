import { createAsyncThunk } from '@reduxjs/toolkit';

export const themeHomeSelection = createAsyncThunk(
  'theme/select',
  async (theme: string) => {
    console.log('THEME DISPATCH', theme);
    return theme;
  }
);
