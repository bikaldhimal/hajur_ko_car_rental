import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  damageReports: [],
};

const damageSlice = createSlice({
  name: 'damage',
  initialState,
  reducers: {
    createDamageReport: (state, action) => {
      state.damageReports.push(action.payload);
    },
    updateDamageCharge: (state, action) => {
      const index = state.damageReports.findIndex(
        (report) => report.id === action.payload.reportId
      );
      if (index !== -1) {
        state.damageReports[index].charge = action.payload.charge;
      }
    },
    markChargeAsPaid: (state, action) => {
      const index = state.damageReports.findIndex(
        (report) => report.id === action.payload
      );
      if (index !== -1) {
        state.damageReports[index].isPaid = true;
      }
    },
    markChargeAsUnpaid: (state, action) => {
      const index = state.damageReports.findIndex(
        (report) => report.id === action.payload
      );
      if (index !== -1) {
        state.damageReports[index].isPaid = false;
      }
    },
  },
});

export const {
  createDamageReport,
  updateDamageCharge,
  markChargeAsPaid,
  markChargeAsUnpaid,
} = damageSlice.actions;

export default damageSlice.reducer;
