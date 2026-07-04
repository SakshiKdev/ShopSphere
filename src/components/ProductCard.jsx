function ProductCard({ product }) {
  return (
    <div className="card">

      <div className="offer">
        20% OFF
      </div>

      <img
        src={product.image}
        alt={product.title || product.name}
      />

      <h3>
        {product.title || product.name}
      </h3>

      <div className="rating">
        ⭐⭐⭐⭐☆
      </div>

      <p>
        ₹
        {product.price > 100
          ? Math.round(product.price * 85)
          : product.price}
      </p>

      <button>
        Add to Cart
      </button>

    </div>
  );
}

export default ProductCard;