import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Booking, BookingRequest } from '../interfaces/booking.interface';
import { Status } from '../interfaces/status.enum';
import { User } from '../interfaces/user.interface';

export interface BookingsState {
  bookings: Booking[];
}

const initialState: BookingsState = {
  bookings: JSON.parse(localStorage.getItem('bookings') || '[]'),
};

export const bookingsSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addBooking: (state, action: PayloadAction<BookingRequest>) => {
      const lastId = state.bookings.reduce((acc, booking) => {
        if (acc < booking.id) {
          return booking.id;
        }
        return acc;
      }, 0);
      const newBooking: Booking = {
        ...action.payload,
        id: lastId + 1,
      };
      state.bookings = [...state.bookings, newBooking];
      localStorage.setItem('bookings', JSON.stringify(state.bookings));
    },
    changeStatusOfBooking: (
      state,
      action: PayloadAction<{
        status: Status;
        id: number;
      }>,
    ) => {
      console.log({ payload: action.payload });
      state.bookings = [
        ...state.bookings.map((booking) => {
          if (booking.id === action.payload.id) {
            return { ...booking, status: action.payload.status };
          }
          return booking;
        }),
      ];
      localStorage.setItem('bookings', JSON.stringify(state.bookings));
    },
  },
});

// Action creators are generated for each case reducer function
export const { addBooking, changeStatusOfBooking } = bookingsSlice.actions;

export default bookingsSlice.reducer;
