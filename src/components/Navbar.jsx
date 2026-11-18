import React from "react";

function Navbar({ cartCount }) {
  return (
    <nav className="navbar">
      <a href="#home" className="logo">StyleHub<span>.</span></a>

      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#products">Shop</a>
        <a href="#offers">Offers</a>
        <a href="#contact">Contact</a>
      </div>

      <a href="#products" className="cart-btn">
        🛒 Cart ({cartCount})
      </a>
    </nav>
  );
}

export default Navbar;