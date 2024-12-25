"use client";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { increaseQuantity, decreaseQuantity, removeFromCart } from "../redux/cartSlice";
import { FaTrash } from "react-icons/fa";

const CartPage: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  const handleIncreaseQuantity = (title: string) => {
    dispatch(increaseQuantity(title));
  };

  const handleDecreaseQuantity = (title: string) => {
    dispatch(decreaseQuantity(title));
  };

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.recipe.price * item.quantity,
    0
  );

  console.log(cartItems)

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-700">Your cart is empty.</p>
      ) : (
        <div className="space-y-6 pb-24">
          {/* Cart Items */}
          {cartItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 bg-white shadow rounded-lg"
            >
              {/* Item Info */}
              <div className="flex items-center">
                <img
                  src={item.recipe.imgSrc}
                  alt={item.recipe.title}
                  className="w-16 h-16 object-cover rounded-lg"
                />
                <div className="ml-4">
                  <h2 className="font-semibold text-lg">{item.recipe.title}</h2>
                  <p className="text-gray-500 text-sm">{item.recipe.description}</p>
                  <p className="font-semibold text-gray-800 mt-1">
                    {item.recipe.currency} {item.recipe.price.toFixed(2)} each
                  </p>
                </div>
              </div>

              {/* Quantity and Controls */}
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => handleDecreaseQuantity(item.recipe.title)}
                  className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                >
                  -
                </button>
                <span className="font-semibold text-lg">{item.quantity}</span>
                <button
                  onClick={() => handleIncreaseQuantity(item.recipe.title)}
                  className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600"
                >
                  +
                </button>
                <button
                  onClick={() => dispatch(removeFromCart(item.recipe.title))}
                  className="bg-gray-500 text-white px-2 py-1 rounded hover:bg-gray-600"
                >
                  <FaTrash />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Sticky Footer */}
      {cartItems.length > 0 && (
        <div className="fixed bottom-0 left-0 w-full bg-white shadow-lg p-4">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">Total</h2>
            <p className="font-bold text-xl">
              {cartItems[0].recipe.currency} {totalPrice.toFixed(2)}
            </p>
          </div>
          <button
            className="bg-blue-500 text-white px-6 py-3 rounded-lg w-full mt-4 font-bold hover:bg-blue-600"
            onClick={() => alert("Proceeding to Checkout")}
          >
            Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
