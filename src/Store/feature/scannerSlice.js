import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  scannedData: {
    websiteName: '',
    scanDate: '',
  },
};

const scannerSlice = createSlice({
  name: 'scanner',
  initialState,
  reducers: {
    updateScannedData: (state, action) => {
      state.scannedData = action.payload;
    },
  },
});

export const { updateScannedData } = scannerSlice.actions;

export const scannerReducer = scannerSlice.reducer
