// src/components/Navbar.js (updated)
import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { selectCart } from "../store/cartSlice";

const Navbar = () => {
  const cart = useSelector(selectCart);
  const [isOpen, setIsOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <nav className="bg-violet-700 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">Shoping Cart</div>
        <div className="block lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
        <div
          className={`w-full lg:flex lg:items-center lg:w-auto ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <ul className="lg:flex lg:space-x-4">
            <li className="text-white">Home</li>
            <li className="text-white">Shop</li>
            <li className="text-white">Contact</li>
          </ul>
        </div>
        <div className="block">
          <button onClick={() => setIsCartOpen(!isCartOpen)} className="btn">
            <FaShoppingCart className="text-white h-6 w-6" />
          </button>
          <p className="bg-gray-950 text-white text-center rounded-full absolute top-7 w-5">
            {cart.length}
          </p>

          {isCartOpen && (
            <div className="absolute right-0 mt-2 w-96 bg-white shadow-lg rounded-lg py-2 z-20 mx-10">
              <div className="flex justify-between ">
                <h2 className="px-4 py-2 text-violet-700 font-bold text-3xl border-b-black">
                  Cart
                </h2>
                <button
                  className="btn px-3  text-red-500 font-extrabold text-2xl hover:text-red-800"
                  onClick={() => setIsCartOpen(!isCartOpen)}
                >
                  X
                </button>
              </div>

              <CartItem />
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
