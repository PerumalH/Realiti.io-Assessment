import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="border p-2 w-25% h-25% rounded shadow-md  flex flex-col justify-between bg-white">
      <img
        src={product.image}
        alt={product.title}
        className="w-50 h-40 object-fit mb-2"
      />
      <h3 className="text-lg text-gray-600 font-semibold">{product.title}</h3>
      <p className="text-gray-600">${product.price}</p>
      <button
        onClick={() => dispatch(addToCart(product))}
        className="mt-2 bg-blue-500 text-white p-2 rounded w-full"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
