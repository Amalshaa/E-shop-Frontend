import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Grid, Card, CardContent, Typography, Button, TextField, Box } from "@mui/material";
import { Add, Remove, Delete } from "@mui/icons-material";
import { addToCart, removeFromCart, updateQuantity } from "../redux/actions";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cart);
  const navigate = useNavigate();

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const handleRemoveItem = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleQuantityChange = (id, event) => {
    const newQuantity = Number(event.target.value);
    if (newQuantity > 0) {
      dispatch(updateQuantity(id, newQuantity));
    }
  };

  const handleAddQuantity = (id) => {
    const item = cartItems.find((item) => item.id === id);
    dispatch(updateQuantity(id, item.quantity + 1));
  };

  const handleSubtractQuantity = (id) => {
    const item = cartItems.find((item) => item.id === id);
    if (item.quantity > 1) {
      dispatch(updateQuantity(id, item.quantity - 1));
    }
  };

  const handlePlaceOrder = () => {
    navigate("/orders");
  };

  return (
    <Box sx={{ padding: "20px" }}>
      <Typography variant="h4" sx={{ textAlign: "center", marginBottom: "20px" }}>
        Your Cart
      </Typography>

      {cartItems.length === 0 ? (
        <Typography variant="h6" sx={{ textAlign: "center", color: "text.secondary" }}>
          Your cart is empty.
        </Typography>
      ) : (
        <Grid container spacing={3}>
          {cartItems.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item.id}>
              <Card sx={{ padding: "10px", boxShadow: 3 }}>
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    {item.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Price: ${item.price.toFixed(2)}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginTop: "10px",
                    }}
                  >
                    <Button
                      size="small"
                      onClick={() => handleSubtractQuantity(item.id)}
                      sx={{ minWidth: "30px" }}
                    >
                      <Remove />
                    </Button>
                    <TextField
                      type="number"
                      value={item.quantity}
                      onChange={(e) => handleQuantityChange(item.id, e)}
                      sx={{ width: "60px", textAlign: "center" }}
                      inputProps={{ min: 1, style: { textAlign: "center" } }}
                    />
                    <Button
                      size="small"
                      onClick={() => handleAddQuantity(item.id)}
                      sx={{ minWidth: "30px" }}
                    >
                      <Add />
                    </Button>
                  </Box>
                  <Typography variant="body2" sx={{ marginTop: "10px", fontWeight: "bold" }}>
                    Total: ${(item.price * item.quantity).toFixed(2)}
                  </Typography>
                  <Button
                    variant="outlined"
                    color="error"
                    startIcon={<Delete />}
                    sx={{ marginTop: "10px", width: "100%" }}
                    onClick={() => handleRemoveItem(item.id)}
                  >
                    Remove
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}

      {cartItems.length > 0 && (
        <Box
          sx={{
            marginTop: "20px",
            textAlign: "center",
            padding: "20px",
            borderTop: "1px solid #ccc",
          }}
        >
          <Typography variant="h6">Total Price: ${getTotalPrice()}</Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{ marginTop: "20px" }}
            onClick={handlePlaceOrder}
          >
            Place Order
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default Cart;
