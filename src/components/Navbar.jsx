import { Link } from "react-router-dom";

function Navbar() {
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
          <button className="cart-btn">🛒 Cart</button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;