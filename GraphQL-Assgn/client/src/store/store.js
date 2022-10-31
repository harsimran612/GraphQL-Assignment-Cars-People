import { configureStore } from "@reduxjs/toolkit";
import PersonReducer from "./person";

export const store = configureStore({
  reducer: {
    people: PersonReducer,
  },
});
