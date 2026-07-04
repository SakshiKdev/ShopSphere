import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Navbar() {
  const { cartItems } = useContext(CartContext);

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <nav className="navbar">
      <div className="logo">
        <h2>ShopSphere</h2>
      </div>

      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/products">Products</Link>
        </li>

        <li>
          <Link to="/">Categories</Link>
        </li>

        <li>
          <Link to="/">Contact</Link>
        </li>
      </ul>

      <div className="nav-icons">
        <Link to="/cart">
          <button className="cart-btn">
            🛒 Cart ({cartCount})
          </button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;