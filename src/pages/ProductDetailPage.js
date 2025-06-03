// ✅ ProductDetailPage.js (경로: src/pages/ProductDetailPage.js)
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { smartphoneData } from '../data/smartphonesData';
import { useCart } from './CartContext';
import './ProductDetailPage.css';

const ProductDetailPage = () => {
  const { id } = useParams();
  const product = smartphoneData.find((p) => String(p.id) === id);

  const { addToCart } = useCart();
  const navigate = useNavigate();

  const [storage, setStorage] = useState('256GB');
  const [color, setColor] = useState('화이트');
  const [quantity, setQuantity] = useState(1);

  if (!product) return <div>해당 제품을 찾을 수 없습니다.</div>;

  const handleAddToCart = () => {
    const cartItem = {
      ...product,
      storage,
      color,
      quantity,
    };
    addToCart(cartItem);
    navigate('/cart');
  };

  return (
    <div className="product-detail-container">
      <div className="product-left">
        <div className="product-left-info">
          <h1>{product.name}</h1>
          <p className="price">
            <span className="sale">{product.salePrice}</span>
            <span className="original"> (정가 {product.originalPrice})</span>
          </p>
        </div>
        <div className="product-image-box">
          <img src={product.image} alt={product.name} className="large-image" />
        </div>
      </div>

      <div className="product-right">
        <div className="scrollable-info">
          <h3>모델 선택</h3>
          <select disabled>
            <option>{product.name}</option>
          </select>

          <h3>저장 용량</h3>
          <select value={storage} onChange={(e) => setStorage(e.target.value)}>
            <option>128GB</option>
            <option>256GB</option>
            <option>512GB</option>
          </select>

          <h3>색상</h3>
          <select value={color} onChange={(e) => setColor(e.target.value)}>
            <option>화이트</option>
            <option>블랙</option>
            <option>블루</option>
          </select>

          <h3>수량</h3>
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value))}
          />

          <button className="cart-button" onClick={handleAddToCart}>장바구니 담기</button>
          <button className="buy-button" onClick={handleAddToCart}>구매하기</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;





