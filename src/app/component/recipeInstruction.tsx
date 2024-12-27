"use client";

import React, { useState } from "react";
import Recipe from "../model/recipe";
import IngredientCard from "./ingredient";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";  // Import the action from your redux slice

export const RecipeInstruction: React.FC<{ recipe: Recipe }> = ({ recipe }) => {
  // Local state to track which ingredients are removed or already owned
  const [removedIngredients, setRemovedIngredients] = useState<Set<number>>(new Set());
  
  const dispatch = useDispatch();

  // Toggle ingredient removal (if the user already has it)
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

  // Handle adding remaining ingredients to the cart
  const handleAddToCart = () => {
    recipe.ingredients.forEach(ingredient => {
      if (!removedIngredients.has(ingredient.id)) {
        dispatch(addToCart(ingredient));  // Add only non-removed ingredients to the cart
      }
    });
  };

  return (
    <div className="z-0 p-4 fixed inset-0 h-screen bg-gray-100 overflow-y-auto">
      <div className="mt-32 lg:mt-16 md:mt-16 grid grid-cols-1 lg:grid-cols-3 gap-4 lg:p-10">
        {/* Video container spans two columns on large screens */}
        <div className="relative w-full col-span-1 lg:col-span-2 pb-[56.25%]">
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-md"
            src={recipe.videoSrc}
            title="YouTube video player"
            allow="clipboard-write; encrypted-media; gyroscope;"
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
        </div>

        <div className=" border-red-300 border-2 rounded p-2">
            <div className="flex flex-col overflow-y-auto lg:h-full h-52 lg:h-[calc(100vh-12rem)] gap-4 mb-4">
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

            {/* Sticky "Add to Cart" Button */}
            <div className="p-1 mt-2">
            <button className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded" onClick={handleAddToCart}>
                Add to Cart
            </button>
            </div>
        </div>
      </div>
    </div>
  );
};
