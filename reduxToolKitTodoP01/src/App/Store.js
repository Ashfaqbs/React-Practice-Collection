import { configureStore } from "@reduxjs/toolkit";
import todoReducers from "../Feature/TodoSlics";
const store = configureStore({
  reducer: todoReducers,
});
