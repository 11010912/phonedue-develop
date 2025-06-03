// src/pages/CartPage.js
import React, { useState } from 'react';
import { useCart } from './CartContext';
import './CartPage.css';

const CartPage = () => {
  const { cartItems, setCartItems } = useCart(); // setCartItems 추가
  const [selectedItems, setSelectedItems] = useState([]);

  const handleSelectItem = (index) => {
    setSelectedItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const handleDeleteSelected = () => {
    const updatedCart = cartItems.filter((_, index) => !selectedItems.includes(index));
    setCartItems(updatedCart);
    setSelectedItems([]);
  };

  if (cartItems.length === 0) {
    return <div className="empty-cart">장바구니가 비어 있습니다.</div>;
  }

  return (
    <div className="cart-page">
      <h2>장바구니</h2>
      <div className="cart-items">
        {cartItems.map((item, index) => (
          <div key={index} className="cart-item">
            <input
              type="checkbox"
              checked={selectedItems.includes(index)}
              onChange={() => handleSelectItem(index)}
              className="item-checkbox"
            />
            <img src={item.image} alt={item.name} className="cart-item-image" />
            <div className="cart-item-info">
              <h3>{item.name}</h3>
              <p>가격: {item.salePrice}</p>
              <p>모델: {item.name}</p>
              <p>저장 용량: {item.storage}</p>
              <p>색상: {item.color}</p>
              <p>수량: {item.quantity}개</p>
            </div>
          </div>
        ))}
      </div>
      <button className="delete-button" onClick={handleDeleteSelected}>선택 삭제</button>
    </div>
  );
};

export default CartPage;
