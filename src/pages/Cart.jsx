import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {
  const { cartItems, removeFromCart } = useContext(CartContext);

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div style={{ padding: "40px" }}>
      <h1>Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <h3>🛒 Cart is empty</h3>
      ) : (
        <>
          {cartItems.map((item) => (
            <div
              key={item.id}
              style={{
                display: "flex",
                gap: "20px",
                alignItems: "center",
                marginBottom: "20px",
                border: "1px solid #ddd",
                padding: "10px",
                borderRadius: "10px"
              }}
            >
              <img src={item.image} alt={item.title} width="80" />

              <div style={{ flex: 1 }}>
                <h3>{item.title}</h3>
                <p>₹{item.price}</p>
                <p>Qty: {item.quantity}</p>
              </div>

              <button onClick={() => removeFromCart(item.id)}>
                Remove
              </button>
            </div>
          ))}

          <h2>Total: ₹{total}</h2>
        </>
      )}
    </div>
  );
}

export default Cart;