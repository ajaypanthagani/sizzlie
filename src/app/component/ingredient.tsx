"use client";

import React from "react";
import Image from "next/image";
import Ingredient from "../model/ingredient";

interface IngredientCardProps {
  ingredient: Ingredient;
  onRemove: () => void; // Callback to handle removal
  isRemoved: boolean; // Whether the ingredient is removed or already owned
}

const IngredientCard: React.FC<IngredientCardProps> = ({
  ingredient,
  onRemove,
  isRemoved,
}) => {
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

        {/* Show the 'Remove' button if the ingredient is not already removed */}
        {isRemoved ? (
          <button
            onClick={onRemove}
            className="bg-gray-500 text-white px-5 py-1 rounded-md cursor-not-allowed opacity-50"
            disabled
          >
            Removed
          </button>
        ) : (
          <button
            onClick={onRemove}
            className="bg-red-500 text-white px-5 py-1 rounded-md hover:bg-red-600 transition duration-200"
          >
            Remove
          </button>
        )}
      </div>
    </div>
  );
};

export default IngredientCard;
