import { configureStore } from "@reduxjs/toolkit";
import mealsSliceReducer from "../features/meals/mealSlice";

const store = configureStore({
  reducer: {
    meals: mealsSliceReducer,
  },
});

export default store;
