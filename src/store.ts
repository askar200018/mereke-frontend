import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './store/counterSlice';
import userReducer from './store/userSlice';
import bookingsReducer from './store/bookingsStore';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
    bookings: bookingsReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
