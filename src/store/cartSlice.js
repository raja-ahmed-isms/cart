import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  checkoutCompleted: false,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.items.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    addQuantity: (state, action) => {
      const item = state.items.find((item) => item.id == action.payload);
      if (item) {
        item.quantity += 1;
      }
    },
    removeQuantity: (state, action) => {
      const item = state.items.find((item) => item.id == action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      } else if (item && item.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== action.payload);
      }
    },
    cartCheckout: (state) => {
      state.items = [];
      state.cartCheckout = true;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  addQuantity,
  removeQuantity,
  cartCheckout,
} = cartSlice.actions;
export const selectCart = (state) => state.cart.items;
export const checkout = (state) => state.cart.checkoutCompleted;
export default cartSlice.reducer;
