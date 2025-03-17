import ProductList from "./pages/ProductList";

import React, { useState } from "react";
const App = () => {
  const [activeTab, setActiveTab] = useState("products");

  return (
    <div className="p-4">
      <div className="flex justify-center mb-4 text-black">
        <button
          className={`px-4 py-2 mx-2 border rounded ${
            activeTab === "products" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => setActiveTab("products")}
        >
          Products
        </button>
        <button
          className={`px-4 py-2 mx-2 border rounded ${
            activeTab === "events" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => setActiveTab("events")}
        >
          Events
        </button>
        <button
          className={`px-4 py-2 mx-2 border rounded ${
            activeTab === "courses" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => setActiveTab("courses")}
        >
          Courses
        </button>
      </div>
      {activeTab === "products" && <ProductList />}
      {activeTab === "events" && <div>Event Booking System (Coming Soon)</div>}
      {activeTab === "courses" && (
        <div>Course Registration System (Coming Soon)</div>
      )}
    </div>
  );
};

export default App;
