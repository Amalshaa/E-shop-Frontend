import React, { useRef } from "react";
import { Box, Typography, Button, Toolbar } from "@mui/material";

const Hero = () => {
  // Create a ref for the products section
  const productsSectionRef = useRef(null);

  // Scroll to the products section when "Shop Now" is clicked
  const handleScrollToProducts = () => {
    productsSectionRef.current.scrollIntoView({
      behavior: "smooth", // Smooth scroll
      block: "start", // Align to the top of the section
    });
  };

  return (
    <Box>
      <Toolbar />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "60vh",
          backgroundImage: "url('https://www.eurokidsindia.com/blog/wp-content/uploads/2023/12/names-of-electronic-devices-in-english.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          textAlign: "center",
          padding: 4,
          color: "#fff",
          boxShadow: "inset 0 0 0 2000px rgba(0, 0, 0, 0.4)",
        }}
      >
        <Typography variant="h3" gutterBottom>
          Your One-Stop Electronic Market
        </Typography>
        <Typography variant="subtitle1" color="inherit" gutterBottom>
          Welcome to E-Shop, where you can buy everything electronic. Sale every day!
        </Typography>
        <Button
          variant="contained"
          sx={{
            mt: 2,
            backgroundColor: "#003366", // Dark blue color for the button
            '&:hover': {
              backgroundColor: "#002244", // Darker blue for hover effect
            }
          }}
          size="large"
          onClick={handleScrollToProducts}
        >
          Shop Now
        </Button>
      </Box>

      {/* Products Section */}
      <Box
        ref={productsSectionRef} // Reference to the products section
        sx={{
          padding: 4,
          backgroundColor: "#f5f5f5",
          textAlign: "center",
        }}
      >
        <Typography variant="h4" gutterBottom>
          Our Products
        </Typography>
        {/* Product list will go here */}
      </Box>
    </Box>
  );
};

export default Hero;
