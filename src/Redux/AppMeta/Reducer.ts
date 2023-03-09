import { createSlice } from '@reduxjs/toolkit';
import { SLICE_NAME } from './Selectors';
import {
  setAppMetaAction,
  setAppMetaModeAction,
  setAppMetaMinimumLoaderTimeCompletedAction
} from './Actions';

const PALETTE = {
  primary: '#97144D',
  primaryBlack: '#000000',
  primaryBlackLight: '#282828',
  primaryWhite: '#FFFFFF',

  secondary100: '#ED1164',
  secondary80: '#F14687',
  secondary60: '#F57BA9',
  secondary40: '#F9B0CC',
  secondary20: '#FDE5EE',

  secondaryGrey100: '#404040',
  secondaryGrey90: '#575757',
  secondaryGrey80: '#6E6E6E',
  secondaryGrey70: '#858585',
  secondaryGrey60: '#9D9D9D',
  secondaryGrey50: '#B4B4B4',
  secondaryGrey40: '#CBCBCB',
  secondaryGrey30: '#E2E2E2',
  secondaryGrey20: '#F1F1F1',
  secondaryGrey10: '#F9F9F9',

  tertiary100: '#12877F',
  tertiary80: '#49A49E',
  tertiary60: '#81C1BD',
  tertiary40: '#B8DDDB',
  tertiary20: '#E6F8F4',
  tertiary10: '#F3FBFB',

  errorRed: '#EB0000',
  successGreen: '#278829',
  warningOrange: '#D84008',
  snackBlue: '#145599',
  typical: '#165964',

  errorRedNeutralLight: '#F9EBEF',
  successGreenNeutralLight: '#EFF9EB',
  warningOrangeNeutralLight: '#F9F1EB',
  snackBlueNeutralLight: '#E3F5F8',
  linkPurpleLight: '#9911ED',

  errorRedNeutralDark: '#320F19',
  successGreenNeutralDark: '#0C1907',
  warningOrangeNeutralDark: '#321E0F',
  snackBlueNeutralDark: '#E3F5F8',
  linkPurpleDark: '#780DBB',

  neutral1Light: '#F1F4F7',
  neutral2Light: '#EBF9F8',
  neutral3Light: '#EBF0F9',
  neutral4Light: '#F4EBF9',
  neutral5Light: '#F9F6EB',
  neutral6Light: '#B8DDDB',

  neutral1Dark: '#0C1015',
  neutral2Dark: '#0F322F',
  neutral3Dark: '#0F1B32',
  neutral4Dark: '#260F32',
  neutral5Dark: '#322A0F',
  neutral6Dark: '#3D7F7C'
};

type AppMetaState = {
  palette: Object;
  mode: string;
  fontUrl: string;
  fontFamilyName: string;
  minimumLoaderTime: number;
  minimumLoaderTimeCompleted: boolean;
};

const INITIAL_STATE: AppMetaState = {
  palette: PALETTE,
  mode: 'light',
  fontUrl: '',
  fontFamilyName: 'Lato',
  minimumLoaderTime: 1000,
  minimumLoaderTimeCompleted: false
};

const slice = createSlice({
  name: SLICE_NAME,
  initialState: INITIAL_STATE,
  extraReducers: (builder) => {
    builder.addCase(setAppMetaAction.fulfilled, (state: { palette: any; mode: any; fontFamilyName: any; }, { payload }: any) => {
      const {
        palette = INITIAL_STATE.palette, mode = INITIAL_STATE.mode, fontFamilyName = INITIAL_STATE.fontFamilyName
      } = payload;

      state.palette = palette;
      state.mode = mode;
      state.fontFamilyName = fontFamilyName;
    });
    builder.addCase(setAppMetaModeAction.fulfilled, (state: { mode: any; }, { payload }: any) => {
      state.mode = payload;
    });
    builder.addCase(setAppMetaMinimumLoaderTimeCompletedAction.fulfilled, (state: { minimumLoaderTimeCompleted: boolean; }, { }: any) => {
      state.minimumLoaderTimeCompleted = true;
    });
  },
  reducers: {}
});

export default slice.reducer;
