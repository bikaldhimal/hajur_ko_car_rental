import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cars: [],
  availableCars: [],
  rentedCars: [],
};

const carSlice = createSlice({
  name: "car",
  initialState,
  reducers: {
    addCar: (state, action) => {
      state.cars.push(action.payload);
      state.availableCars.push(action.payload);
    },
    removeCar: (state, action) => {
      state.cars = state.cars.filter((car) => car.id !== action.payload);
      state.availableCars = state.availableCars.filter(
        (car) => car.id !== action.payload
      );
    },
    updateCar: (state, action) => {
      const index = state.cars.findIndex((car) => car.id === action.payload.id);
      if (index !== -1) {
        state.cars[index] = action.payload;
      }
    },
    rentCar: (state, action) => {
      const index = state.availableCars.findIndex(
        (car) => car.id === action.payload.carId
      );
      if (index !== -1) {
        state.availableCars.splice(index, 1);
        state.rentedCars.push(action.payload);
      }
    },
    returnCar: (state, action) => {
      const index = state.rentedCars.findIndex(
        (car) => car.id === action.payload.carId
      );
      if (index !== -1) {
        state.rentedCars.splice(index, 1);
        state.availableCars.push(action.payload);
      }
    },
  },
});

export const { addCar, removeCar, updateCar, rentCar, returnCar } =
  carSlice.actions;

export default carSlice.reducer;
