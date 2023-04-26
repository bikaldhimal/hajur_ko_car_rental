import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
    changeUserRole: (state, action) => {
      state.user.role = action.payload.role;
    },
  },
});

export const { login, logout, changeUserRole } = authSlice.actions;

export default authSlice.reducer;
