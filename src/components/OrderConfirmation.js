import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { clearCart } from "../redux/actions";
import { getCartItems, placeOrder } from "../api"; // API functions

function OrderConfirmation() {
  const [orderDetails, setOrderDetails] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const placeOrderHandler = async () => {
    setLoading(true);
    setError(null);

    try {
      const cartItems = await getCartItems(); // Fetch cart items from backend

      if (cartItems.length === 0) {
        setError("Cart is empty. Please add items to place an order.");
        return;
      }

      const order = await placeOrder(); // Place order using backend cart items
      setOrderDetails(order);
      dispatch(clearCart()); // Clear Redux cart state
    } catch (err) {
      console.error("Order placement failed:", err.response?.data || err.message);
      setError(err.response?.data || "Failed to place order.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Order Confirmation</h1>
      {loading ? (
        <p>Placing your order...</p>
      ) : orderDetails ? (
        <div>
          <h2>Thank you for your order!</h2>
          <p>Order Date: {new Date(orderDetails.orderDate).toLocaleString()}</p>
          <p>Total Price: ${orderDetails.totalPrice}</p>
          <ul>
            {orderDetails.items.map((item) => (
              <li key={item.id}>
                {item.productName} - Quantity: {item.quantity} - Price: ${item.price}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div>
          <button onClick={placeOrderHandler}>Place Order</button>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
      )}
    </div>
  );
}

export default OrderConfirmation;
