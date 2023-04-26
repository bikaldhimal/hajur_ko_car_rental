import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [],
  currentUser: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
    removeUser: (state, action) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
    updateUser: (state, action) => {
      const index = state.users.findIndex((user) => user.id === action.payload.id);
      if (index !== -1) {
        state.users[index] = action.payload;
      }
    },
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
    changePassword: (state, action) => {
      if (state.currentUser) {
        state.currentUser.password = action.payload.newPassword;
      }
    },
    applyDiscount: (state, action) => {
      if (state.currentUser && state.currentUser.isRegular) {
        state.currentUser.discount = 10;
      } else if (state.currentUser && state.currentUser.role === 'staff') {
        state.currentUser.discount = 25;
      } else {
        state.currentUser.discount = 0;
      }
    },
  },
});

export const {
  addUser,
  removeUser,
  updateUser,
  setCurrentUser,
  changePassword,
  applyDiscount,
} = userSlice.actions;

export default userSlice.reducer;
