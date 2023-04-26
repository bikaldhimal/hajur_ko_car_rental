import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  rentalRequests: [],
  approvedRentals: [],
};

const rentalSlice = createSlice({
  name: 'rental',
  initialState,
  reducers: {
    createRentalRequest: (state, action) => {
      state.rentalRequests.push(action.payload);
    },
    approveRentalRequest: (state, action) => {
      const index = state.rentalRequests.findIndex(
        (request) => request.id === action.payload.requestId
      );
      if (index !== -1) {
        const rental = { ...state.rentalRequests[index], ...action.payload };
        state.approvedRentals.push(rental);
        state.rentalRequests.splice(index, 1);
      }
    },
    cancelRentalRequest: (state, action) => {
      state.rentalRequests = state.rentalRequests.filter(
        (request) => request.id !== action.payload
      );
    },
    cancelApprovedRental: (state, action) => {
      state.approvedRentals = state.approvedRentals.filter(
        (rental) => rental.id !== action.payload
      );
    },
    returnRental: (state, action) => {
      state.approvedRentals = state.approvedRentals.filter(
        (rental) => rental.id !== action.payload
      );
    },
  },
});

export const {
  createRentalRequest,
  approveRentalRequest,
  cancelRentalRequest,
  cancelApprovedRental,
  returnRental,
} = rentalSlice.actions;

export default rentalSlice.reducer;
