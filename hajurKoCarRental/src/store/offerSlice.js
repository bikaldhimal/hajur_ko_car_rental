import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  offers: [],
  notifications: [],
};

const offerSlice = createSlice({
  name: 'offer',
  initialState,
  reducers: {
    createOffer: (state, action) => {
      state.offers.push(action.payload);
    },
    updateOffer: (state, action) => {
      const index = state.offers.findIndex((offer) => offer.id === action.payload.id);
      if (index !== -1) {
        state.offers[index] = action.payload;
      }
    },
    deleteOffer: (state, action) => {
      state.offers = state.offers.filter((offer) => offer.id !== action.payload);
    },
    notifyCustomers: (state, action) => {
      const newNotification = {
        id: Date.now(),
        message: action.payload.message,
        date: new Date(),
      };
      state.notifications.push(newNotification);
    },
  },
});

export const {
  createOffer,
  updateOffer,
  deleteOffer,
  notifyCustomers,
} = offerSlice.actions;

export default offerSlice.reducer;
