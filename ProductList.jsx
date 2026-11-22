
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "./CartSlice";

const products = [
  {
    id: 1,
    name: "Snake Plant",
    category: "Air Purifying",
    price: 25,
    description: "A beautiful, low-maintenance indoor plant.",
    image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?w=500"
  },
  {
    id: 2,
    name: "Peace Lily",
    category: "Flowering Plants",
    price: 30,
    description: "An elegant plant with beautiful white flowers.",
    image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?w=500"
  },
  {
    id: 3,
    name: "Monstera",
    category: "Indoor Plants",
    price: 35,
    description: "A tropical plant with attractive leaves.",
    image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=500"
  },
  {
    id: 4,
    name: "Aloe Vera",
    category: "Medicinal Plants",
    price: 20,
    description: "A useful succulent plant for your home.",
    image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=500"
  },
  {
    id: 5,
    name: "Areca Palm",
    category: "Indoor Plants",
    price: 40,
    description: "A graceful palm that adds greenery.",
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=500"
  },
  {
    id: 6,
    name: "Jade Plant",
    category: "Succulents",
    price: 22,
    description: "A charming succulent that is easy to grow.",
    image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=500"
  }
];

function ProductList() {
  const dispatch = useDispatch();
  const [addedItems, setAddedItems] = useState([]);
  const [category, setCategory] = useState("All");

  const categories = [
    "All",
    ...new Set(products.map((p) => p.category))
  ];

  const filteredProducts =
    category === "All"
      ? products
      : products.filter((p) => p.category === category);

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
    setAddedItems((prev) => [...prev, product.id]);
  };

  return (
    <div style={{ padding: "30px", textAlign: "center" }}>
      <h1>Paradise Nursery</h1>
      <h2>Our Beautiful Plants</h2>

      <div style={{ margin: "20px" }}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            style={{
              margin: "5px",
              padding: "10px 16px",
              cursor: "pointer",
              background: category === cat ? "#2e7d32" : "#eee",
              color: category === cat ? "white" : "black",
              border: "none",
              borderRadius: "5px"
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: "25px"
      }}>
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "15px"
            }}
          >
            <img
              src={product.image}
              alt={product.name}
              style={{
                width: "100%",
                height: "180px",
                objectFit: "cover",
                borderRadius: "8px"
              }}
            />

            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p><strong>Category:</strong> {product.category}</p>
            <h3>${product.price}</h3>

            <button
              onClick={() => handleAddToCart(product)}
              disabled={addedItems.includes(product.id)}
              style={{
                padding: "10px 18px",
                background: addedItems.includes(product.id)
                  ? "#999" : "#2e7d32",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer"
              }}
            >
              {addedItems.includes(product.id)
                ? "Added to Cart"
                : "Add to Cart"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
