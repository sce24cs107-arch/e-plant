
import React from "react";
import "./App.css";

function App() {
  return (
    <div className="landing-page">
      <div className="landing-content">
        <h1>Paradise Nursery</h1>

        <p>
          Welcome to Paradise Nursery!
          Discover beautiful plants and bring
          nature into your home.
        </p>

        <button
          onClick={() => {
            window.location.href = "#plants";
          }}
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

export default App;

import React from "react";
import "./App.css";

function App() {
  return (
    <div className="landing-page">
      <div className="landing-content">
        <h1>Paradise Nursery</h1>

        <p>
          Welcome to Paradise Nursery!
          Discover beautiful plants and bring
          nature into your home.
        </p>

        <button
          onClick={() => {
            window.location.href = "#plants";
          }}
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

export default App;
