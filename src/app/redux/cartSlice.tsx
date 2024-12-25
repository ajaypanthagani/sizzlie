// redux/cartSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Recipe from "../model/recipe";

interface CartState {
  items: { recipe: Recipe; quantity: number }[]; // Store items with quantity
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Recipe>) => {
      const existingItem = state.items.find(
        (item) => item.recipe.id === action.payload.id
      );

      if (existingItem) {
        // If the item already exists, increment the quantity
        existingItem.quantity += 1;
      } else {
        // Otherwise, add the item with quantity 1
        state.items.push({ recipe: action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      const itemTitle = action.payload;
      state.items = state.items.filter((item) => item.recipe.title !== itemTitle);
    },
    increaseQuantity: (state, action: PayloadAction<string>) => {
      const item = state.items.find((item) => item.recipe.title === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },
    decreaseQuantity: (state, action: PayloadAction<string>) => {
      const item = state.items.find((item) => item.recipe.title === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      } else {
        state.items = state.items.filter((item) => item.recipe.title !== action.payload);
      }
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
