import axios from "axios";

export const FETCH_PRODUCTS = "FETCH_PRODUCTS";
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const UPDATE_QUANTITY = "UPDATE_QUANTITY";
export const PLACE_ORDER = "PLACE_ORDER";
export const CLEAR_CART = "CLEAR_CART"; // New constant for clearing the cart

// Action to fetch products from the API
export const fetchProducts = (products) => ({
  type: FETCH_PRODUCTS,
  payload: products,
});

// Action to add a product to the cart
export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product,
});

// Action to remove an item from the cart
export const removeFromCart = (id) => ({
  type: REMOVE_FROM_CART,
  payload: id,
});

// Action to update the quantity of an item in the cart
export const updateQuantity = (id, quantity) => ({
  type: UPDATE_QUANTITY,
  payload: { id, quantity },
});

// Action to place an order
export const placeOrder = () => ({
  type: PLACE_ORDER,
});

// Action to clear the cart
export const clearCart = () => {
  return {
    type: CLEAR_CART,
  };
};