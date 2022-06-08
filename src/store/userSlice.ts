import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../interfaces/user.interface';

export interface UserState {
  user: User | null;
  isAuthorized: boolean;
}

const userExists = () => {
  return !!localStorage.getItem('user');
};

const initialState: UserState = {
  user: userExists() ? JSON.parse(localStorage.getItem('user') || '{}') : null,
  isAuthorized: userExists(),
};

export const userSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<User>) => {
      state.isAuthorized = true;
      state.user = action.payload;
      localStorage.setItem('user', JSON.stringify(state.user));
    },
    logout: (state) => {
      state.isAuthorized = false;
      state.user = null;
      localStorage.removeItem('user');
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
