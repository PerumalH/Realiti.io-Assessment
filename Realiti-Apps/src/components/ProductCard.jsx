import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center p-4 border rounded-lg shadow-md bg-white">
      <img
        src={product.image}
        alt={product.name}
        className="w-32 h-32 object-fit mb-2"
      />
      <h3 className="text-lg font-semibold text-black">{product.title}</h3>
      <p className="text-gray-500">₹{product.price}</p>
      <button
        onClick={() => dispatch(addToCart(product))}
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
