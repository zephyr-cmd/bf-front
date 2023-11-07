//counterSlice.jsx

"use client"; //this is a client side component

import { createSlice,current } from "@reduxjs/toolkit";

const initialState = {
  totalItems: [],
  totalPrice: 0,
  totalQuantity: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increment: (state) => {
      console.log("inside the cart reducer setup-->",state);
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    itemsIncrement: (state, action) => {
      console.log("action in itemsIncrement reducs--->", action.payload);
      // let {totalItems,totalPrice,totalQuantity}=state;
      console.log("totalItems:", current(state));
      const order = action.payload;
      let itemAlreadyExists = false;
      for (let [idx, item] of state.totalItems.entries()) {
        console.log("item in totalItems reducer--->", item);
        if (action.payload.id == item.id) {
          itemAlreadyExists = true;
          state.totalItems.splice(idx, 1, { ...order });
          state.totalPrice = Number(state.totalPrice) + Number(order.price);
          state.totalQuantity = Number(state.totalQuantity) + Number(1);
          break;
        }
      }
      if (!itemAlreadyExists) {
        state.totalItems.push(order);
        state.totalPrice = Number(state.totalPrice) + Number(order.price);
        state.totalQuantity = Number(state.totalQuantity) + Number(1);
      }
    },
    itemsDecrement: (state, action) => {
        console.log("action in itemsDecrement reducs--->", action.payload);
        const order = action.payload;
        for (let [idx, item] of state.totalItems.entries()) {
          console.log("item in totalItems reducer--->", item);
          if (order.id == item.id && order.qty) {
            state.totalItems.splice(idx, 1, { ...order });
            state.totalPrice = Number(state.totalPrice) - Number(order.price);
            state.totalQuantity = Number(state.totalQuantity) - Number(1);
            break;
          }else if(order.id == item.id && !order.qty){
            state.totalItems.splice(idx, 1);
            state.totalPrice = Number(state.totalPrice) - Number(order.price);
            state.totalQuantity = Number(state.totalQuantity) - Number(1);
            break;
          }
        }
      },
  },
});

export const { increment, decrement, incrementByAmount, itemsIncrement,itemsDecrement } =
  cartSlice.actions;

export default cartSlice.reducer;
