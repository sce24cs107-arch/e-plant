
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./CartSlice";
import CartItem from "./CartItem";
import "./App.css";

const plantCategories = [
  {
    category: "Air Purifying Plants",
    plants: [
      {
        id: 1,
        name: "Snake Plant",
        price: 25,
        image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?w=500",
        description: "Easy-care plant that adds greenery to your home."
      },
      {
        id: 2,
        name: "Peace Lily",
        price: 30,
        image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?w=500",
        description: "Beautiful flowering plant for indoor spaces."
      },
      {
        id: 3,
        name: "Spider Plant",
        price: 20,
        image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=500",
        description: "A popular and easy-to-grow indoor plant."
      }
    ]
  },
  {
    category: "Succulents",
    plants: [
      {
        id: 4,
        name: "Aloe Vera",
        price: 20,
        image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=500",
        description: "A useful succulent with attractive leaves."
      },
      {
        id: 5,
        name: "Jade Plant",
        price: 22,
        image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=500",
        description: "A beautiful, low-maintenance succulent."
      },
      {
        id: 6,
        name: "Echeveria",
        price: 18,
        image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=500",
        description: "A decorative rosette-shaped succulent."
      }
    ]
  },
  {
    category: "Tropical Indoor Plants",
    plants: [
      {
        id: 7,
        name: "Monstera",
        price: 35,
        image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=500",
        description: "A tropical plant with beautiful split leaves."
      },
      {
        id: 8,
        name: "Areca Palm",
        price: 40,
        image: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?w=500",
        description: "A graceful palm for indoor decoration."
      },
      {
        id: 9,
        name: "Rubber Plant",
        price: 32,
        image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=500",
        description: "An attractive plant with glossy leaves."
      }
    ]
  }
];

function ProductList() {
  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state.cart.items
  );

  const [selectedCategory, setSelectedCategory] =
    useState("All");

  const [showCart, setShowCart] = useState(false);

  const [addedItems, setAddedItems] = useState([]);

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));

    setAddedItems((previous) =>
      previous.includes(plant.id)
        ? previous
        : [...previous, plant.id]
    );
  };

  const categoriesToDisplay =
    selectedCategory === "All"
      ? plantCategories
      : plantCategories.filter(
          (group) => group.category === selectedCategory
        );

  return (
    <div className="plant-shop">

      {/* Navigation Bar */}
      <nav className="navbar">
        <h2 onClick={() => setShowCart(false)}>
          Paradise Nursery
        </h2>

        <div className="nav-links">
          <button onClick={() => setShowCart(false)}>
            Home
          </button>

          <button onClick={() => setShowCart(false)}>
            Plants
          </button>

          <button onClick={() => setShowCart(true)}>
            🛒 Cart ({cartCount})
          </button>
        </div>
      </nav>

      {/* Shopping Cart Page */}
      {showCart ? (
        <div>
          <CartItem />

          <button
            onClick={() => setShowCart(false)}
            className="continue-shopping"
          >
            Continue Shopping
          </button>
        </div>
      ) : (

        /* Product Listing Page */
        <main className="products-container">

          <h1>Welcome to Paradise Nursery</h1>

          <p>
            Discover beautiful plants and bring
            nature into your home.
          </p>

          {/* Category Filters */}
          <div className="category-filters">
            <button
              onClick={() => setSelectedCategory("All")}
            >
              All Plants
            </button>

            {plantCategories.map((group) => (
              <button
                key={group.category}
                onClick={() =>
                  setSelectedCategory(group.category)
                }
              >
                {group.category}
              </button>
            ))}
          </div>

          {/* Category Groupings */}
          {categoriesToDisplay.map((group) => (
            <section
              key={group.category}
              className="plant-category"
            >
              <h2>{group.category}</h2>

              <div className="product-grid">

                {group.plants.map((plant) => (
                  <div
                    className="product-card"
                    key={plant.id}
                  >

                    <img
                      src={plant.image}
                      alt={plant.name}
                    />

                    <h3>{plant.name}</h3>

                    <p>{plant.description}</p>

                    <h3>${plant.price}</h3>

                    <button
                      onClick={() =>
                        handleAddToCart(plant)
                      }
                      disabled={addedItems.includes(plant.id)}
                    >
                      {addedItems.includes(plant.id)
                        ? "Added to Cart"
                        : "Add to Cart"}
                    </button>

                  </div>
                ))}

              </div>
            </section>
          ))}

        </main>
      )}
    </div>
  );
}

export default ProductList;
