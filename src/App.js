import React from "react";
import { Routes, Route } from "react-router-dom";
import { CssBaseline, Container, Box } from "@mui/material";
import Header from "./components/header";
import Hero from "./components/Hero";
import ProductList from "./components/productList";
import Cart from "./components/Cart";
import OrderConfirmation from "./components/OrderConfirmation";

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <CssBaseline /> {/* Provides a consistent baseline for Material-UI styles */}
      <Header />
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Container>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <ProductList />
                </>
              }
            />
            <Route path="/products" element={<ProductList />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/orders" element={<OrderConfirmation />} />
          </Routes>
        </Container>
      </Box>
    </div>
  );
}

export default App;
