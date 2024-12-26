import {
    FETCH_PRODUCTS,
    ADD_TO_CART,
    REMOVE_FROM_CART,
    UPDATE_QUANTITY,
    PLACE_ORDER,
    CLEAR_CART, // Import the new action type
  } from "../redux/actions";
  
  const initialState = {
    products: [],
    cart: [],
    orderPlaced: false,
  };
  
  const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_PRODUCTS:
        return { ...state, products: action.payload };
      case ADD_TO_CART:
        return { ...state, cart: [...state.cart, action.payload] };
      case REMOVE_FROM_CART:
        return { ...state, cart: state.cart.filter((item) => item.id !== action.payload) };
      case UPDATE_QUANTITY:
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: action.payload.quantity }
              : item
          ),
        };
      case PLACE_ORDER:
        return { ...state, cart: [], orderPlaced: true };  // Clear the cart after placing an order
      case CLEAR_CART:  // Clear the cart
        return { ...state, cart: [] };
      default:
        return state;
    }
  };
  
  export default cartReducer;
  