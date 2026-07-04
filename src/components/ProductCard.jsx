import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);

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

      <button onClick={() => addToCart(product)}>
  Add to Cart
        
      </button>
    </div>
  );
}

export default ProductCard;