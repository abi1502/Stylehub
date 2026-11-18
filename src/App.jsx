import React, { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Offers from "./components/Offers";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    setCart((previousCart) => [...previousCart, product]);

    alert(product.name + " added to cart!");
  }

  return (
    <div>
      <Navbar cartCount={cart.length} />

      <Hero />

      <Products addToCart={addToCart} />

      <Offers />

      <Footer />
    </div>
  );
}

export default App;