import axios from "axios";

const API_BASE_URL = "http://localhost:3000/api";

// Products APIs
export const getProducts = async () => {
  const response = await axios.get(`${API_BASE_URL}/products`);
  return response.data;
};

export const getProductById = async (id) => {
  const response = await axios.get(`${API_BASE_URL}/products/${id}`);
  return response.data;
};

export const addProduct = async (product) => {
  const response = await axios.post(`${API_BASE_URL}/products`, product);
  return response.data;
};

export const editProduct = async (id, updatedProduct) => {
  const response = await axios.put(`${API_BASE_URL}/products/${id}`, updatedProduct);
  return response.data;
};

export const addProductStock = async (id, quantity) => {
  const response = await axios.patch(`${API_BASE_URL}/products/add-stock/${id}`, null, {
    params: { quantityToAdd: quantity },
  });
  return response.data;
};

// Cart APIs
export const getCartItems = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/cart`);
    return response.data;
  } catch (err) {
    console.error("Error fetching cart items:", err);
    throw err;
  }
};

export const addToCart = (product) => async (dispatch) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/cart`, product);
    dispatch({
      type: "ADD_TO_CART",
      payload: response.data,
    });
  } catch (error) {
    console.error("Failed to add to cart:", error.response?.data || error.message);
  }
};

export const updateQuantity = (id, quantity) => async (dispatch) => {
  try {
    await axios.put(`${API_BASE_URL}/cart/update-quantity/${id}`, null, {
      params: { newQuantity: quantity },
    });
    dispatch({
      type: "UPDATE_QUANTITY",
      payload: { id, quantity },
    });
  } catch (error) {
    console.error("Failed to update quantity:", error.response?.data || error.message);
  }
};

export const removeFromCart = (id) => async (dispatch) => {
  try {
    await axios.delete(`${API_BASE_URL}/cart/${id}`);
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: id,
    });
  } catch (error) {
    console.error("Failed to remove from cart:", error.response?.data || error.message);
  }
};
// Orders APIs
export const placeOrder = async (orderPayload) => {
  const response = await axios.post(`${API_BASE_URL}/orders`, orderPayload);
  return response.data;
};

