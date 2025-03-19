import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
  IsCart,
} from "../store/cartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.CartDetails);
  const totalValue = cartItems.reduce((x, item) => {
    console.log(item.quantity, item);
    if (item.quantity) {
      const calc = item.price * item.quantity;
      return calc + x;
    }
  }, 0);
  console.log(totalValue, cartItems);
  const dispatch = useDispatch();

  return (
    <div className="absolute top-50 left-100 p-4 bg-black shadow-md rounded-lg w-200 border border-gray-300 ">
      <h2 className="text-xl font-semibold mb-4">🛒 Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <ul className="space-y-4">
          {cartItems.map((item) => (
            <li
              key={item.id}
              className="flex justify-between items-center border-b pb-2"
            >
              <div>
                <p className="font-medium">{item.title}</p>
                <p className="text-gray-500 text-sm">${item.price}</p>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  className="bg-red-500 text-white px-2 py-1 rounded"
                  onClick={() => dispatch(decrementQuantity(item.id))}
                >
                  ➖
                </button>
                <span className="px-3">{item.quantity}</span>
                <button
                  className="bg-green-500 text-white px-2 py-1 rounded"
                  onClick={() => dispatch(incrementQuantity(item.id))}
                >
                  ➕
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <div className="flex justify-between mt-4">
        <p className="w-30 text-black bg-white text-center rounded p-3 mr-4">
          Total : {totalValue.toFixed(2)}
        </p>

        <button
          className="w-40 text-black bg-white  "
          onClick={() => dispatch(IsCart(false))}
        >
          Close Cart
        </button>
      </div>
    </div>
  );
};

export default Cart;
