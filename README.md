# E-Shop E-cmmerce Application

## Overview
E-Shop a complete e-commerce system, built with React and Redux(frontend) and backend built with c# and .Net. It provides an intuitive interface for users to browse products, manage their cart, and place orders. The frontend communicates with the backend API to fetch product data, update cart items, and handle orders.

---

## Project Setup Instructions

### Prerequisites

Ensure you have the following installed:
- **Node.js** (v14 or later)
- **npm** or **yarn** (Node Package Manager)

### Steps to Set Up the Frontend

1. **Navigate to the Frontend Directory:**
   ```bash
   cd frontend
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set Up Environment Variables:**
   - Create a `.env` file in the `frontend` directory.
   - Add the backend API base URL:
     ```env
     REACT_APP_API_BASE_URL=http://localhost:5132/api
     ```

4. **Start the Development Server:**
   ```bash
   npm start
   # or
   yarn start
   ```
   Open `http://localhost:3000/` in your browser to view the application.

5. **Build for Production (Optional):**
   ```bash
   npm run build
   # or
   yarn build
   ```
   This creates an optimized build in the `build/` directory.

---

## Features

1. **Product List:**
   - Fetch and display products from the backend API.
   - Shows product name, price, and an "Add to Cart" button.

2. **Cart Management:**
   - View and manage items in the cart.
   - Update quantities directly in the cart.
   - Remove items from the cart.
   - Displays total price for the cart.

3. **Order Placement:**
   - Place an order with the items in the cart.
   - Clears the cart after successful order placement.

4. **State Management:**
   - Uses **Redux** to manage global state for products and cart.

5. **Responsive Design:**
   - Optimized for both desktop and mobile devices using Material-UI components.

---

## Known Issues or Limitations

1. **API Integration:**
   - Ensure the backend API is running and accessible at the configured base URL.

2. **Stock Validation:**
   - The application does not validate stock availability during cart updates.

3. **Order History:**
   - No order history or persistence is implemented; orders are cleared after placement.

4. **Error Handling:**
   - Limited error handling for network or API failures.

---

## Demo

### Working Features:
- Fetch and display products.
- Add items to the cart.
- Update item quantities in the cart.
- Remove items from the cart.
- Place orders with a confirmation message.

### Screenshots:

#### 1. Homepage with Product List
![Homepage Screenshot](public\home1.png) 
(public\home2.png)

#### 2. Cart Page
![Cart Page Screenshot](public\cart.png)

#### 3. Order Confirmation
![Order Confirmation Screenshot](public\cart.png)

*(Replace `path/to/...` with actual screenshot file paths.)*

---

## Folder Structure
```
src/
├── components/
│   ├── Header.js
│   ├── Hero.js
│   ├── ProductList.js
│   ├── Cart.js
│   ├── OrderConfirmation.js
├── redux/
│   ├── actions.js
│   ├── reducers.js
│   ├── store.js
├── App.js
├── index.js
├── api.js
├── styles.css
```

---

## Future Enhancements
- Add authentication for secure cart and order management.
- Implement stock validation during cart updates.
- Add an order history page for users.
- Enhance error handling and debugging.
- Improve mobile responsiveness and UI/UX.

---


