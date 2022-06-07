import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../interfaces/user.interface';

export interface UserState {
  user: User | null;
  isAuthorized: boolean;
}

const initialState: UserState = {
  user: null,
  isAuthorized: false,
};

export const userSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<User>) => {
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
