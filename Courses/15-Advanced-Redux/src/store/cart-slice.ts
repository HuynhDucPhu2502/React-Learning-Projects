import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Item, CartItem, Cart } from "../types/models-type";

const initialState: Cart = {
  cartItems: [] as CartItem[],
  totalQuantity: 0,
  isCartModified: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addItemToCart(state, action: PayloadAction<Item>) {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(
        (cartItem) => cartItem.item.id === newItem.id
      );
      state.totalQuantity++;
      if (existingItem) {
        existingItem.quantity++;
        existingItem.total += newItem.price;
      } else {
        state.cartItems.push({
          item: newItem,
          quantity: 1,
          total: newItem.price,
        });
      }

      state.isCartModified = true;
    },
    removeItemFromCart(state, action: PayloadAction<number>) {
      const id = action.payload;
      const existingItem = state.cartItems.find(
        (cartItem) => cartItem.item.id === id
      );

      if (existingItem) {
        state.totalQuantity--;

        if (existingItem.quantity === 1) {
          state.cartItems = state.cartItems.filter(
            (cartItem) => cartItem.item.id !== id
          );
        } else {
          existingItem.quantity -= 1;
          existingItem.total -= existingItem.item.price;
        }
      }

      state.isCartModified = true;
    },
    replaceCart(state, action: PayloadAction<CartItem[]>) {
      state.totalQuantity = action.payload.reduce((total, item) => {
        return total + item.quantity;
      }, 0);
      state.cartItems = action.payload ?? [];

      state.isCartModified = false;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
