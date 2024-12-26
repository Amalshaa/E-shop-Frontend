import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Grid, Card, CardContent, CardMedia, Typography, Button, Snackbar, Alert } from "@mui/material";
import { getProducts } from "../api";
import { addToCart } from "../redux/actions";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [open, setOpen] = useState(false); // State to control Snackbar visibility
  const [productName, setProductName] = useState(""); // State to store added product's name
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts(); // Fetch products from API
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    dispatch(addToCart({ ...product, quantity: 1 }));
    setProductName(product.name); // Set the product name to display in the alert
    setOpen(true); // Open Snackbar
  };

  const handleCloseSnackbar = () => {
    setOpen(false); // Close Snackbar
  };

  return (
    <div>
      <Grid container spacing={3} sx={{ mt: 4 }}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={product.image || "https://via.placeholder.com/150"} // Use a placeholder if no image
                alt={product.name}
              />
              <CardContent>
                <Typography variant="h6">{product.name}</Typography>
                <Typography variant="body1" color="textSecondary">
                  ${product.price}
                </Typography>
                {/* Show product description */}
                <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
                  {product.description}
                </Typography>
                {/* Show available stock */}
                <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
                  Available: {product.quantityInStock} in stock
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{ mt: 2 }}
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Snackbar for alerting when a product is added */}
      <Snackbar
        open={open}
        autoHideDuration={3000} // Automatically hide after 3 seconds
        onClose={handleCloseSnackbar}
      >
        <Alert onClose={handleCloseSnackbar} severity="success">
          {productName} has been added to your cart!
        </Alert>
      </Snackbar>
    </div>
  );
};

export default ProductList;
