import { createSlice } from "@reduxjs/toolkit";

const CartInitialState = {
  isCart: false,
  CartDetails: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: CartInitialState,
  reducers: {
    IsCart: (state, action) => {
      state.isCart = action.payload;
    },
    addToCart: (state, action) => {
      const product = state.CartDetails.find(
        (item) => item.id === action.payload.id
      );
      if (product) {
        product.quantity += 1;
      } else {
        state.CartDetails.push({ ...action.payload, quantity: 1 });
      }
    },
    incrementQuantity: (state, action) => {
      const product = state.CartDetails.find(
        (item) => item.id === action.payload
      );
      if (product) product.quantity += 1;
    },
    decrementQuantity: (state, action) => {
      const product = state.CartDetails.find(
        (item) => item.id === action.payload
      );
      if (product) {
        if (product.quantity === 1) {
          state.CartDetails = state.CartDetails.filter(
            (item) => item.id !== action.payload
          );
        } else {
          product.quantity -= 1;
        }
      }
    },
  },
});

export const { addToCart, incrementQuantity, decrementQuantity, IsCart } =
  cartSlice.actions;

export default cartSlice.reducer;
