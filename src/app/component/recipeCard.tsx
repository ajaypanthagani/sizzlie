"use client";

import React, { useState } from "react";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import { FaCheckCircle, FaTimesCircle, FaCartPlus } from "react-icons/fa";
import Recipe from "../model/recipe";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

const RecipeCard: React.FC<Recipe> = ({
  id,
  imgSrc,
  title,
  description,
  currency,
  price,
  rating,
  isAvailable,
}) => {
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    if (isAvailable) {
      setCount((prevCount) => prevCount + 1);
      dispatch(
        addToCart({
          id,
          imgSrc,
          title,
          description,
          currency,
          price,
          rating,
          isAvailable,
        })
      );
    }
  };

  const handleIncreaseCount = () => {
    setCount((prevCount) => prevCount + 1);
    dispatch(
      addToCart({
        id,
        imgSrc,
        title,
        description,
        currency,
        price,
        rating,
        isAvailable,
      })
    );
  };

  const handleDecreaseCount = () => {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
      // Add a `removeFromCart` dispatch here if needed.
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
      {/* Image Section */}
      <div className="relative w-full h-48">
        <Image
          src={imgSrc}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
        {!isAvailable && (
          <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
            <span className="text-white text-lg font-semibold">
              Unavailable
            </span>
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-4">
        {/* Title and Price */}
        <div className="flex justify-between items-start">
          <h2 className="font-bold text-lg text-gray-800">{title}</h2>
          <span className="text-red-600 font-semibold text-lg">
            {currency} {price.toFixed(2)}
          </span>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm mt-2">{description}</p>

        {/* Rating */}
        <div className="flex items-center mt-3 space-x-1">
          <AiFillStar className="text-yellow-400 text-xl" />
          <span className="text-gray-700 font-medium">{rating.toFixed(1)}</span>
        </div>

        {/* Add to Cart Section */}
        <div className="flex items-center justify-between mt-4">
          {count === 0 ? (
            <button
              onClick={handleAddToCart}
              className={`bg-red-500 text-white px-8 py-2 rounded-md hover:bg-red-600 transition duration-200 ${
                isAvailable ? "" : "cursor-not-allowed opacity-50"
              }`}
              disabled={!isAvailable}
            >
              <FaCartPlus className="text-white" />
            </button>
          ) : (
            <div className="flex items-center space-x-2">
              <button
                onClick={handleDecreaseCount}
                className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
              >
                -
              </button>
              <span className="font-medium text-gray-700">{count}</span>
              <button
                onClick={handleIncreaseCount}
                className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
              >
                +
              </button>
            </div>
          )}
          {/* Availability Status */}
          <div className="flex items-center space-x-1">
            {isAvailable ? (
              <FaCheckCircle className="text-green-500" />
            ) : (
              <FaTimesCircle className="text-red-500" />
            )}
            <span className="text-sm text-gray-600">
              {isAvailable ? "Available" : "Unavailable"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
