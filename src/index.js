import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CartProvider } from './pages/CartContext'; // ✅ CartProvider import

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartProvider> {/* ✅ App을 CartProvider로 감싸줌 */}
      <App />
    </CartProvider>
  </React.StrictMode>
);

reportWebVitals();

