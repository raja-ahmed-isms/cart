import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";

function Product({ item }) {
  const [isAdded, setIsAdded] = useState(false);

  const [cartCounter, setCartCounter] = useState(0);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(item));
    // console.log("Item added to cart:", item.name);
    setIsAdded(true);

    setTimeout(() => {
      setIsAdded(false);
    }, 3000);
  };

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img
        src={item.imageSrc}
        alt={item.imageAlt}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{item.name}</h2>
        <p className="text-gray-700 mb-4">{item.info}</p>
        <p className="text-gray-700 mb-4">$ {item.price}</p>
        <button
          type="button"
          className="bg-violet-600 text-white px-4 py-2 rounded"
          onClick={handleAddToCart}
        >
          {isAdded ? "Added" : "Add to cart"}
        </button>
      </div>
    </div>
  );
}

export default Product;
