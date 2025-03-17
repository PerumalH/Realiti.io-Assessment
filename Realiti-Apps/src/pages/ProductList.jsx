import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import ProductCard from "../components/ProductCard";
import Pagination from "../components/Pagination";
import Cart from "../components/Cart";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
      });
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query);
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
    setCurrentPage(1);
  };

  const addToCart = (product) => {
    console.log(product);
    setCart((prevCart) => ({
      ...prevCart,
      [product.id]: prevCart[product.id]
        ? {
            ...prevCart[product.id],
            quantity: prevCart[product.id].quantity + 1,
          }
        : { ...product, quantity: 1 },
    }));
  };

  const incrementQuantity = (id) => {
    setCart((prevCart) => ({
      ...prevCart,
      [id]: { ...prevCart[id], quantity: prevCart[id].quantity + 1 },
    }));
  };

  const decrementQuantity = (id) => {
    setCart((prevCart) => {
      if (prevCart[id].quantity === 1) {
        const newCart = { ...prevCart };
        delete newCart[id];
        return newCart;
      }
      return {
        ...prevCart,
        [id]: { ...prevCart[id], quantity: prevCart[id].quantity - 1 },
      };
    });
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  return (
    <div className="p-4">
      <div className="flex justify-between items-start mb-4">
        <SearchBar searchQuery={searchQuery} onSearch={handleSearch} />
        <Cart
          cart={cart}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {currentProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(filteredProducts.length / productsPerPage)}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default ProductList;
