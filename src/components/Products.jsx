import React from "react";

const products = [
  {
    id: 1,
    name: "Floral Summer Dress",
    category: "Women",
    price: 999,
    image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600"
  },
  {
    id: 2,
    name: "Casual White Shirt",
    category: "Men",
    price: 799,
    image: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=600"
  },
  {
    id: 3,
    name: "Classic Denim Jeans",
    category: "Women",
    price: 1199,
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600"
  },
  {
    id: 4,
    name: "Stylish Fashion Outfit",
    category: "Women",
    price: 1499,
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600"
  },
  {
    id: 5,
    name: "Men's Casual Outfit",
    category: "Men",
    price: 1299,
    image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600"
  },
  {
    id: 6,
    name: "Trendy Fashion Wear",
    category: "Women",
    price: 899,
    image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600"
  }
];

function Products({ addToCart }) {
  const [search, setSearch] = React.useState("");
  const [category, setCategory] = React.useState("All");

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || product.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <section className="products-section" id="products">

      <p className="tagline">OUR COLLECTION</p>
      <h2>Trending Products</h2>
      <p className="section-description">
        Explore our latest fashion collection.
      </p>

      <input
        type="text"
        placeholder="Search your favourite products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-box"
      />

      <div className="categories">
        {["All", "Women", "Men"].map((item) => (
          <button
            key={item}
            className={category === item ? "active-category" : ""}
            onClick={() => setCategory(item)}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="product-grid">
        {filteredProducts.map((product) => (
          <div className="product-card" key={product.id}>

            <img src={product.image} alt={product.name} />

            <div className="product-info">
              <p className="product-category">{product.category}</p>
              <h3>{product.name}</h3>

              <div className="product-bottom">
                <strong>₹{product.price}</strong>

                <button onClick={() => addToCart(product)}>
                  Add to Cart
                </button>
              </div>
            </div>

          </div>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <p>No products found. Try another search.</p>
      )}

    </section>
  );
}

export default Products;