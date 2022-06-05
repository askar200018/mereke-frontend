import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IsAuthorizedState {
  value: boolean;
}

const initialState: IsAuthorizedState = {
  value: localStorage.getItem('isAuthorized') ? true : false,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    login: (state) => {
      state.value = true;
    },
    logout: (state) => {
      state.value = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, logout } = counterSlice.actions;

export default counterSlice.reducer;
