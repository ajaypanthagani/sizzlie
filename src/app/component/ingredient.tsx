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

        <button
            onClick={onRemove}
            className="px-2 py-1 border-2 rounded border-red-300 bg-red-200 hover:bg-red-300 text-md text-gray-900"
          >
            I have it
          </button>
      </div>
    </div>
  );
};

export default IngredientCard;
