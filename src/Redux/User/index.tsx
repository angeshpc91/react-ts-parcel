import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
// import { HttpClient } from '../..';

export interface UserState {
  loading: boolean;
  users: string[];
  theme: string;
  error: string;
}

const initialState: UserState = {
  loading: false,
  users: [],
  theme: 'light',
  error: ''
};

const themeSelection = createAsyncThunk('theme/select',
  async (theme: string) => {
    console.log('THEME DISPATCH', theme);
    return theme;
  });
// const fetchUsers = createAsyncThunk(
//   'user/fetchUsers',
//   // need to pass type for params (object, string, number, array or any) according to dispatched payload
//   async (params: { name: string; id: number }, { extra }) => {
//     const { API } = extra as { API: HttpClient };
//     // destructure parama and use accordingly
//     const { name, id } = params;
//     console.log(name, id);
//     const options = {
//       apiPath: 'USER.GET',
//     };
//     try {
//       const { data: data } = await API.request(options);
//       return data.map((user: { id: string }) => user.id);
//     } catch (e) {
//       return { error: e };
//     }
//   }
// );

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(themeSelection.fulfilled, (state, action: PayloadAction<any>) => {
      console.log('Action', action);

      state.loading = false;
      state.theme = action.payload;
    });
    // builder.addCase(fetchUsers.fulfilled, (state, action: PayloadAction<string[]>) => {
    //   (state.loading = false), (state.users = action.payload), (state.error = '');
    // });
    // builder.addCase(fetchUsers.rejected, (state, action) => {
    //   (state.loading = false),
    //     (state.users = []),
    //     (state.error = action.error.message || 'Something went wrong. Please retry.');
    // });
  }
});

export { themeSelection };
export default userSlice.reducer;
