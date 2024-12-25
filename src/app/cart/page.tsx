"use client";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { addToCart, removeFromCart } from "../redux/cartSlice";

const CartPage: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.recipe.price * item.quantity,
    0
  );

  return (
    <div className="z-0 p-4 fixed inset-0 h-screen bg-gray-100 overflow-y-auto">
      <div className="mt-32 lg:mt-16 md:mt-16 container mx-auto">
        {cartItems.length === 0 ? (
          <p className="text-center text-gray-600">Your cart is empty.</p>
        ) : (
          <div className="space-y-6">
            {/* Cart Items */}
            {cartItems.map((item, index) => (
              <div
                key={index}
                className="flex flex-col p-5 bg-white shadow-md rounded-lg transition transform"
              >
                {/* Top Section */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <img
                      src={item.recipe.imgSrc}
                      alt={item.recipe.title}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <h2 className="font-semibold text-lg text-gray-800">
                      {item.recipe.title}
                    </h2>
                  </div>
                </div>

                {/* Bottom Section */}
                <div className="flex items-center justify-between mt-4">
                  {/* Price */}
                  <p className="font-bold text-lg text-gray-900">
                    {item.recipe.currency} {(item.quantity * item.recipe.price).toFixed(2)}
                  </p>

                  {/* Controllers */}
                  <div className="flex items-center border-2 rounded border-red-300 bg-red-200 hover:bg-red-300">
                    <button
                      onClick={() => dispatch(removeFromCart(item.recipe.id))}
                      className="font-semibold text-red-500 text-lg w-10 h-10 flex items-center justify-center hover:text-red-600 transition duration-200"
                    >
                      -
                    </button>
                    <span className="font-semibold text-lg text-gray-900 w-5 text-center">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => dispatch(addToCart(item.recipe))}
                      className="font-semibold text-red-500 text-lg w-10 h-10 flex items-center justify-center hover:text-red-600 transition duration-200"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Sticky Footer */}
        {cartItems.length > 0 && (
          <div className="fixed bottom-0 left-0 w-full bg-white shadow-xl p-5">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold text-gray-700">Total</h2>
              <p className="font-bold text-xl text-gray-900">
                {cartItems[0].recipe.currency} {totalPrice.toFixed(2)}
              </p>
            </div>
            <button
              className="bg-blue-500 text-white px-6 py-3 rounded-full w-full mt-4 font-semibold hover:bg-blue-600 transition duration-200"
              onClick={() => alert("Proceeding to Checkout")}
            >
              Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
