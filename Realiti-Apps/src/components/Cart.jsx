import React from "react";

const Cart = ({ cart, incrementQuantity, decrementQuantity }) => {
  console.log(cart);
  return (
    <div className="bg-white p-4 shadow-md rounded-lg w-50 ml-3 h-10">
      <h2 className="text-lg font-bold mb-2">Cart</h2>
      {Object.keys(cart).length === 0 ? (
        <p className="text-gray-500">No items in cart</p>
      ) : (
        Object.values(cart).map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center border-b py-2"
          >
            <span className="text-sm">{item.title.substring(0, 15)}...</span>
            <div className="flex items-center">
              <button
                onClick={() => decrementQuantity(item.id)}
                className="px-2 py-1 bg-gray-300 text-black rounded"
              >
                -
              </button>
              <span className="px-2">{item.quantity}</span>
              <button
                onClick={() => incrementQuantity(item.id)}
                className="px-2 py-1 bg-gray-300 text-black rounded"
              >
                +
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
