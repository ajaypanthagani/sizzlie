"use client";

import React, { useState } from "react";
import Image from "next/image";
import Ingredient from "../model/ingredient";
import { addToCart, removeFromCart } from "../redux/cartSlice";
import { useDispatch, useSelector } from "react-redux"; // Import useSelector to access the store
import { RootState } from "../redux/store";
import { FaCartPlus } from "react-icons/fa";

interface IngredientCardProps {
  ingredient: Ingredient;
}

const IngredientCard: React.FC<IngredientCardProps> = (props: IngredientCardProps) => {
  const ingredient = props.ingredient;
  const dispatch = useDispatch();

  const ingredientInCart = useSelector((state: RootState) =>
    state.cart.items.find((item) => item.ingredient.id === ingredient.id)
  );

  const [count, setCount] = useState(ingredientInCart?.quantity || 0);

  const handleAddToCart = () => {
    if (ingredient.isAvailable) {
      setCount((prevCount) => prevCount + 1);
      dispatch(addToCart(ingredient));
    }
  };

  const handleIncreaseCount = () => {
    setCount((prevCount) => prevCount + 1);
    dispatch(addToCart(ingredient));
  };

  const handleDecreaseCount = () => {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
      dispatch(removeFromCart(ingredient.id));
    }
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


        {/* Show the 'Remove' button only if the ingredient quantity is greater than 0 */}
        {count === 0 ? (
            <button
            onClick={handleAddToCart}
            className={`bg-red-500 text-white px-8 py-2 rounded-md hover:bg-red-600 transition duration-200 ${
                ingredient.isAvailable ? "" : "cursor-not-allowed opacity-50"
            }`}
            disabled={!ingredient.isAvailable}
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
      </div>
    </div>
  );
};

export default IngredientCard;
