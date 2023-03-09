export const SLICE_NAME = 'auth';

export const getAuthReducer = (state: { [x: string]: any }) => {
  return state[SLICE_NAME];
};
