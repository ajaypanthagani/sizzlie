// redux/cartSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Ingredient from "../model/ingredient";

interface CartState {
  items: { ingredient: Ingredient; quantity: number }[]; // Store items with quantity
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Ingredient>) => {
      console.log(action.payload.id)
      const existingItem = state.items.find(
        (item) => item.ingredient.id === action.payload.id
      );

      if (existingItem) {
        // If the item already exists, increment the quantity
        existingItem.quantity += 1;
      } else {
        // Otherwise, add the item with quantity 1
        state.items.push({ ingredient: action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      const itemId = action.payload;

      const existingItem = state.items.find(
        (item) => item.ingredient.id === itemId
      );

      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1;
        } else {
          state.items = state.items.filter((item) => item.ingredient.id !== itemId);
        }
      }
    }
  },
});

export const { addToCart, removeFromCart} =
  cartSlice.actions;

export default cartSlice.reducer;
