import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromCart,
  addQuantity,
  removeQuantity,
  cartCheckout,
  selectCart,
  checkout,
} from "../store/cartSlice";

function CartItem() {
  const [totalAmount, setTotalAmount] = useState(0);
  const cart = useSelector(selectCart);
  const checkoutCompleted = useSelector(
    (state) => state.cart.checkoutCompleted
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const total = cart
      .map((item) => item.price * item.quantity)
      .reduce((prev, curr) => prev + curr, 0);
    setTotalAmount(total);
  }, [cart]);

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleIncrement = (itemId) => {
    dispatch(addQuantity(itemId));
  };

  const handleDecrement = (itemId) => {
    dispatch(removeQuantity(itemId));
  };

  const handleCheckout = () => {
    dispatch(cartCheckout());
    alert("Thank you for your purchase!");
  };

  return (
    <div className="container mx-auto p-4">
      {checkoutCompleted ? (
        <div className="text-center mt-4">
          <h2 className="text-xl font-bold">Thank you for your purchase!</h2>
        </div>
      ) : (
        <>
          {cart.length === 0 ? (
            <div className="text-center mt-4">
              <h2 className="text-xl font-bold">Your cart is empty.</h2>
            </div>
          ) : (
            <>
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex p-2 justify-around items-center"
                >
                  <div className="w-1/3 h-1/2">
                    <img src={item.imageSrc} alt={item.imgeAlt} />
                  </div>
                  <div className="flex items-center">
                    <button
                      className="bg-violet-600 h-7 rounded-full font-bold px-2 text-white"
                      onClick={() => handleDecrement(item.id)}
                    >
                      &#8722;
                    </button>
                    <p className="p-2 font-bold text-purple-800">
                      {item.quantity}
                    </p>
                    <button
                      className="bg-violet-600 h-7 font-bold rounded-full px-2 text-white"
                      onClick={() => handleIncrement(item.id)}
                    >
                      &#43;
                    </button>
                  </div>
                  <div className="flex-col px-3 justify-around align-middle">
                    <p className="text-violet-600 font-semibold">{item.name}</p>
                    <p className="text-green-500 font-semibold">{item.info}</p>
                    <p className="text-blue-500 font-bold">${item.price}</p>
                  </div>
                  <div>
                    <button
                      type="button"
                      onClick={() => handleRemoveFromCart(item.id)}
                      className="bg-red-500 text-white py-2 px-3 rounded hover:bg-red-800"
                    >
                      X
                    </button>
                  </div>
                </div>
              ))}
              <div className="flex justify-between p-4">
                <p className="p-4 font-bold">
                  Total: ${totalAmount.toFixed(2)}
                </p>
                <button
                  className="bg-violet-600 font-bold rounded py-2 px-6 hover:bg-violet-800 text-white"
                  onClick={handleCheckout}
                >
                  Checkout
                </button>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}

export default CartItem;
