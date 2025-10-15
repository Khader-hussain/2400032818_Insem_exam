import React, { useState } from "react";

const ProductList = () => {
  // Predefined array of products
  const products = [
    { name: "Notebook", price: 50, category: "Stationery" },
    { name: "Pen", price: 10, category: "Stationery" },
    { name: "Backpack", price: 500, category: "Bags" },
    { name: "Headphones", price: 1000, category: "Electronics" },
    { name: "Laptop", price: 60000, category: "Electronics" },
    { name: "Lunch Box", price: 200, category: "Bags" },
  ];

  // State to store selected category
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter products based on selected category
  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h2>🛍️ Product List with Category Filter</h2>

      {/* Dropdown for selecting category */}
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        style={{
          padding: "10px",
          marginBottom: "20px",
          borderRadius: "5px",
          fontSize: "16px",
        }}
      >
        <option value="All">All</option>
        <option value="Stationery">Stationery</option>
        <option value="Bags">Bags</option>
        <option value="Electronics">Electronics</option>
      </select>

      {/* Display filtered product list */}
      <div style={{ maxWidth: "400px", margin: "auto" }}>
        {filteredProducts.map((product, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ccc",
              borderRadius: "10px",
              padding: "10px",
              marginBottom: "10px",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            }}
          >
            <h3>{product.name}</h3>
            <p>💰 Price: ₹{product.price}</p>
            <p>📦 Category: {product.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
