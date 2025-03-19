import { useSelector } from "react-redux";
import Cart from "./components/Cart";
import ProductList from "./pages/ProductList";
import React from "react";

const App = () => {
  const IsCart = useSelector((state) => state.cart.isCart);
  return (
    <>
      <ProductList />
      {IsCart && <Cart />}
    </>
  );
};

export default App;
