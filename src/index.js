import React from 'react';
import ReactDOM from 'react-dom/client'; // Import createRoot instead of render
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from './redux/store';
import App from './App';
import './styles.css';

// Create a root element using createRoot method
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the application with the Provider and Router components
root.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);
