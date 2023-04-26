import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  sales: [],
  filteredSales: [],
  startDate: '',
  endDate: '',
};

const salesSlice = createSlice({
  name: 'sales',
  initialState,
  reducers: {
    addSale: (state, action) => {
      state.sales.push(action.payload);
    },
    updateSale: (state, action) => {
      const index = state.sales.findIndex((sale) => sale.id === action.payload.id);
      if (index !== -1) {
        state.sales[index] = action.payload;
      }
    },
    setFilterDates: (state, action) => {
      state.startDate = action.payload.startDate;
      state.endDate = action.payload.endDate;
    },
    applyDateFilter: (state) => {
      state.filteredSales = state.sales.filter(
        (sale) =>
          new Date(sale.date) >= new Date(state.startDate) &&
          new Date(sale.date) <= new Date(state.endDate)
      );
    },
  },
});

export const {
  addSale,
  updateSale,
  setFilterDates,
  applyDateFilter,
} = salesSlice.actions;

export default salesSlice.reducer;
