import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  payments: [],
};

const paymentSlice = createSlice({
  name: 'payment',
  initialState,
  reducers: {
    createPayment: (state, action) => {
      state.payments.push(action.payload);
    },
    updatePayment: (state, action) => {
      const index = state.payments.findIndex((payment) => payment.id === action.payload.id);
      if (index !== -1) {
        state.payments[index] = action.payload;
      }
    },
    deletePayment: (state, action) => {
      state.payments = state.payments.filter((payment) => payment.id !== action.payload);
    },
    markPaymentAsCompleted: (state, action) => {
      const index = state.payments.findIndex((payment) => payment.id === action.payload);
      if (index !== -1) {
        state.payments[index].isCompleted = true;
      }
    },
  },
});

export const {
  createPayment,
  updatePayment,
  deletePayment,
  markPaymentAsCompleted,
} = paymentSlice.actions;

export default paymentSlice.reducer;
