import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  documents: [],
};

const documentSlice = createSlice({
  name: 'document',
  initialState,
  reducers: {
    uploadDocument: (state, action) => {
      state.documents.push(action.payload);
    },
    updateDocument: (state, action) => {
      const index = state.documents.findIndex((doc) => doc.id === action.payload.id);
      if (index !== -1) {
        state.documents[index] = action.payload;
      }
    },
    deleteDocument: (state, action) => {
      state.documents = state.documents.filter((doc) => doc.id !== action.payload);
    },
  },
});

export const {
  uploadDocument,
  updateDocument,
  deleteDocument,
} = documentSlice.actions;

export default documentSlice.reducer;
