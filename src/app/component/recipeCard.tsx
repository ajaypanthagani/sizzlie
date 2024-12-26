"use client";

import React, { useState } from "react";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import { FaCheckCircle, FaTimesCircle, FaCartPlus } from "react-icons/fa";
import Recipe from "../model/recipe";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { addToCart, removeFromCart } from "../redux/cartSlice";
import Link from "next/link";

const MAX_DESCRIPTION_LENGTH = 100; // Maximum characters for description

const RecipeCard: React.FC<Recipe> = (recipe: Recipe) => {
  const recipeInCart = useSelector((state: RootState) =>
    state.cart.items.find((item) => item.recipe.id === recipe.id)
  );

  const [count, setCount] = useState(recipeInCart?.quantity || 0);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    if (recipe.isAvailable) {
      setCount((prevCount) => prevCount + 1);
      dispatch(addToCart(recipe));
    }
  };

  const handleIncreaseCount = () => {
    setCount((prevCount) => prevCount + 1);
    dispatch(addToCart(recipe));
  };

  const handleDecreaseCount = () => {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
      dispatch(removeFromCart(recipe.id));
    }
  };

  // Truncate the description
  const truncatedDescription =
    recipe.description.length > MAX_DESCRIPTION_LENGTH
      ? `${recipe.description.slice(0, MAX_DESCRIPTION_LENGTH)}...`
      : recipe.description;

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 flex flex-col h-full">
      <Link href={recipe.isAvailable ? `/recipe/${recipe.id}` : "#"}></Link>
      {/* Image Section */}
      <div className="relative w-full h-48">
        <Image
          src={recipe.imgSrc}
          alt={recipe.title}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
        {!recipe.isAvailable && (
          <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
            <span className="text-white text-lg font-semibold">Unavailable</span>
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-4 flex flex-col flex-grow">
        {/* Title and Price */}
        <div className="flex justify-between items-start">
          <h2 className="font-bold text-lg text-gray-800">{recipe.title}</h2>
          <span className="text-red-600 font-semibold text-lg">
            {recipe.currency} {recipe.price.toFixed(2)}
          </span>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm mt-2 flex-grow">{truncatedDescription}</p>

        {/* Rating */}
        <div className="flex items-center mt-3 space-x-1">
          <AiFillStar className="text-yellow-400 text-xl" />
          <span className="text-gray-700 font-medium">{recipe.rating.toFixed(1)}</span>
        </div>

        {/* Add to Cart Section */}
        <div className="mt-4">
          <div className="flex items-center justify-between">
            {count === 0 ? (
              <button
                onClick={handleAddToCart}
                className={`bg-red-500 text-white px-8 py-2 rounded-md hover:bg-red-600 transition duration-200 ${
                  recipe.isAvailable ? "" : "cursor-not-allowed opacity-50"
                }`}
                disabled={!recipe.isAvailable}
              >
                <FaCartPlus className="text-white" />
              </button>
            ) : (
              <div className="flex items-center border-2 rounded border-red-300 bg-red-200 hover:bg-red-300">
              <button
                onClick={handleDecreaseCount}
                className="font-semibold text-red-500 text-lg px-3 hover:text-red-600 transition duration-200 hover:scale-150"
              >
                -
              </button>
              <span className="font-semibold text-lg text-gray-900 w-5 text-center">{count}</span>
              <button
                onClick={handleIncreaseCount}
                className="font-semibold text-red-500 text-lg px-3 hover:text-red-600 transition duration-200 hover:scale-150"
              >
                +
              </button>
            </div>
            )}

            {/* Availability Status */}
            <div className="flex items-center space-x-1">
              {recipe.isAvailable ? (
                <FaCheckCircle className="text-green-500" />
              ) : (
                <FaTimesCircle className="text-red-500" />
              )}
              <span className="text-sm text-gray-600">
                {recipe.isAvailable ? "Available" : "Unavailable"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
