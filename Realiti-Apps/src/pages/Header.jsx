import React from "react";
import { useSelector, useDispatch } from "react-redux";
import logo from "../assets/logo.webp";
import { IsCart } from "../store/cartSlice";

const Header = ({ search, setCurrentPage }) => {
  const cartItems = useSelector((state) => state.cart.CartDetails);
  const dispatch = useDispatch();

  return (
    <header className="bg-black shadow-md p-4 flex items-center justify-between w-full rounded-md ">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="w-40 h-12 object-fit" />
      </div>
      <div className="flex mx-4 w-100%">
        <input
          type="text"
          placeholder="Search products..."
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => {
            search(e.target.value);
            setCurrentPage(1);
          }}
        />
      </div>
      <div className="relative">
        <button
          className="w-30 bg-white text-black text-center"
          onClick={() => dispatch(IsCart(true))}
        >
          Cart Items
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
            {cartItems.length}
          </span>
        </button>
      </div>
    </header>
  );
};

export default Header;
