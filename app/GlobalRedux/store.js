//store.jsx

"use client";
import { combineReducers, configureStore  } from "@reduxjs/toolkit";
import counterReducer from "./Features/Counter/counterSlice";
import cartReducer from "./Cart/cart";

const rootReducer = combineReducers({
  //add all your reducers here
  counter: counterReducer,
  cart:cartReducer,
},);

export const store = configureStore({
  reducer: rootReducer,

 });