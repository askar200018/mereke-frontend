import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UserState {
  value: number;
  user: any;
  isAuthorized: boolean;
}

const initialState: UserState = {
  value: 0,
  user: {},
  isAuthorized: false,
};

export const userSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<any>) => {
      state.isAuthorized = true;
      state.user = action.payload;
    },
    logout: (state) => {
      state.isAuthorized = false;
      state.user = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
