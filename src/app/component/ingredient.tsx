"use client";

import React from "react";
import Image from "next/image";
import Ingredient from "../model/ingredient";

interface IngredientCardProps {
  ingredient: Ingredient;
  onRemove: (ingredientId: number) => void;  // Callback function to handle removal
  isRemoved: boolean;  // Whether the ingredient has been marked as removed
}

const IngredientCard: React.FC<IngredientCardProps> = (props: IngredientCardProps) => {
  const { ingredient, onRemove, isRemoved } = props;

  // Handle marking an ingredient as removed (i.e., already owned by the user)
  const handleRemoveIngredient = () => {
    onRemove(ingredient.id);  // This will mark the ingredient as removed
  };

  return (
    <div className="flex flex-row p-2 bg-white shadow-md rounded-lg transition transform justify-between">
      {/* Top Section */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Image
            width={200}
            height={200}
            src={ingredient.imgSrc}
            alt={ingredient.title}
            className="w-16 h-16 object-cover rounded-lg"
          />
          <div className="flex-col gap-2">
            <h2 className="font-semibold text-md text-gray-800">
              {ingredient.title}
            </h2>
            <small className="text-sm text-gray-800">{ingredient.quantity}</small>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex-col items-center justify-between mt-4">
        {/* Price */}
        <p className="font-bold text-md text-gray-900 text-center">
          {ingredient.currency} {(ingredient.price).toFixed(2)} each
        </p>

        {/* Show the 'Remove' button if the ingredient is not marked as removed */}
        {isRemoved ? (
          <button
            onClick={handleRemoveIngredient}
            className="bg-gray-500 text-white px-8 py-2 rounded-md cursor-not-allowed opacity-50"
            disabled
          >
            Already Have
          </button>
        ) : (
          <button
            onClick={handleRemoveIngredient}
            className={`bg-red-500 text-white px-8 py-2 rounded-md hover:bg-red-600 transition duration-200`}
          >
            Remove
          </button>
        )}
      </div>
    </div>
  );
};

export default IngredientCard;
