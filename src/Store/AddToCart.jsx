import { createSlice } from "@reduxjs/toolkit";

export const addToCart = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    add(state, action) {
      // Check if the item already exists in the cart
      const existingItem = state.find((item) => item.id === action.payload.id);
      
      if (existingItem && existingItem.quantity < 10) {
        // If the item exists, increase its quantity
        existingItem.quantity += 1;
      } else {
        // Otherwise, add the item with an initial quantity of 1
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    remove(state, action) {
      return state.filter((item) => item.id !== action.payload.id);
    },
    increment(state, action) {
      const item = state.find((item) => item.id === action.payload.id);
      if (item && item.quantity < 10) {
        item.quantity += 1;
      }
    },
    decrement(state, action) {
      const item = state.find((item) => item.id === action.payload.id);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    }
  }
});

export const { add, remove, increment, decrement } = addToCart.actions;
export default addToCart.reducer;


