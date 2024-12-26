import React from "react";
import { AppBar, Toolbar, Typography, Button, IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";

// Define dark blue color
const darkBlue = "#003366";

const Header = () => {
  return (
    <AppBar position="sticky" sx={{ backgroundColor: darkBlue }}>
      <Toolbar>
        <Typography
          variant="h6"
          sx={{
            flexGrow: 1,
            fontWeight: "bold",
            fontSize: "1.5rem",
            color: "#fff", // White text color for better contrast
          }}
        >
          E-Shop
        </Typography>
        <Button
          component={Link}
          to="/cart"
          sx={{
            color: "#fff", // White color for the button text
            "&:hover": {
              backgroundColor: "#002244", // Darker shade on hover
            },
          }}
        >
          Cart
        </Button>
        <IconButton color="inherit" component={Link} to="/cart">
          <ShoppingCartIcon sx={{ color: "#fff" }} />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
