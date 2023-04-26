import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import carReducer from "./carSlice";
import rentalReducer from "./rentalSlice";
import salesReducer from "./salesSlice";
import offerReducer from "./offerSlice";
import damageReducer from "./damageSlice";
import paymentReducer from "./paymentSlice";
import documentReducer from "./documentSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    car: carReducer,
    rental: rentalReducer,
    sales: salesReducer,
    offer: offerReducer,
    damage: damageReducer,
    payment: paymentReducer,
    document: documentReducer,
  },
});

export default store;
