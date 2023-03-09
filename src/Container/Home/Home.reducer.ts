import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { themeHomeSelection } from './Home.service';
// import { HttpClient } from '../..';

export interface HomeState {
  loading: boolean;
  error: string;
}

const initialState: HomeState = {
  loading: false,
  error: ''
};

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

export const HomeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(themeHomeSelection.fulfilled, (state, action: PayloadAction<any>) => {
      console.log('Action', action);
      state.loading = false;
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

export default HomeSlice.reducer;
