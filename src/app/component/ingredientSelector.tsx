"use client";

import React, { useState } from "react";
import Recipe from "../model/recipe";
import IngredientCard from "./ingredient";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cartSlice"; // Import the action from your redux slice
import { RootState } from "../redux/store";
import { FaShoppingCart, FaList } from "react-icons/fa"; // Import cart icon
import { useRouter } from 'next/navigation';

export const IngredientSelector: React.FC<{ recipe: Recipe }> = ({ recipe }) => {
    const router = useRouter();
  // State to track removed ingredients (already have at home)
  const [removedIngredients, setRemovedIngredients] = useState<Set<number>>(new Set());

  // State for quantity slider (servings)
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);
  const dispatch = useDispatch();

  // Redux cart items
  const cartItems = useSelector((state: RootState) => state.cart.items);

  // Track the quantity of each ingredient in the cart
  const cartIngredientQuantities = cartItems.reduce((acc, item) => {
    acc[item.ingredient.id] = item.quantity;
    return acc;
  }, {} as { [key: number]: number });

  // Toggle removed ingredient (mark as already have it at home)
  const handleRemoveIngredient = (ingredientId: number) => {
    setRemovedIngredients(prevState => {
      const newState = new Set(prevState);
      if (newState.has(ingredientId)) {
        newState.delete(ingredientId);
      } else {
        newState.add(ingredientId);
      }
      return newState;
    });
  };

  // Handle adding ingredients to the cart
  const handleAddToCart = () => {
    // Add ingredients that are not removed
    recipe.ingredients.forEach((ingredient) => {
      if (!removedIngredients.has(ingredient.id)) {
        for (let i = 0; i < quantity; i++) {
          dispatch(addToCart(ingredient)); // Add ingredient to the cart
        }
      }
    });

    setAddedToCart(true)
  };

  return (
    <div className="z-0 p-4 fixed inset-0 h-screen bg-gray-100 overflow-y-auto">
      <div className="mt-32 lg:mt-16 md:mt-16 grid grid-cols-1 lg:grid-cols-1 gap-4 lg:p-10">
        <h1 className="font-bold text-large text-gray-800">Select ingredients for: {recipe.title}</h1>

        {/* Red-bordered container for ingredients */}
        <div className="rounded p-4 flex flex-col h-full overflow-hidden">
          {/* Ingredients List */}
          <div className="flex flex-col overflow-y-auto mb-4 flex-grow gap-4 h-72">
            {recipe.ingredients.map((ingredient) => (
              <div key={ingredient.id}>
                <IngredientCard
                  ingredient={ingredient}
                  onRemove={() => handleRemoveIngredient(ingredient.id)}
                  isRemoved={removedIngredients.has(ingredient.id)}
                />
              </div>
            ))}
          </div>

          {/* Quantity Slider */}
          <div className="mb-1">
            <input
              type="range"
              id="ingredient-quantity"
              min="1"
              max="10"
              step="1"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="w-full mt-2 h-2 bg-gradient-to-r from-red-500 to-red-700 rounded-full appearance-none"
              style={{
                backgroundSize: `${(quantity / 10) * 100}% 100%`,
                transition: 'background-size 0.25s ease'
              }}
            />
            <div className="flex justify-between text-sm text-gray-700">
              <span>1</span>
              <span>10</span>
            </div>
          </div>

          <div className="flex-col">
          {addedToCart ? (
            <button
            className="bg-blue-600 hover:bg-blue-500 text-white w-full py-2 rounded flex justify-center items-center"
            onClick={()=>{router.push(`/cart`)}}
            >
                Go to Cart
            </button>
        ) : (
          <button
            className="bg-red-500 hover:bg-red-300 text-white w-full py-2 rounded flex justify-center items-center"
            onClick={handleAddToCart}
          >
            <FaShoppingCart className="text-white mr-2" />
            Add {quantity} servings to Cart
          </button>
        )}

        <button
        className="bg-gray-500 hover:bg-gray-500 text-white w-full py-2 rounded flex justify-center items-center mt-1"
        onClick={()=>{router.push(`/recipe/${recipe.id}/instructions`)}}
        >
        See cooking instructions
        </button>
          </div>
        </div>
      </div>
    </div>
  );
};
