import React from 'react';
import { useParams } from 'react-router-dom';
import { smartphoneData } from '../data/smartphonesData';
import './ProductDetailPage.css';

const ProductDetailPage = () => {
  const { id } = useParams();
  const product = smartphoneData.find((p) => p.id === id);

  if (!product) return <div>해당 제품을 찾을 수 없습니다.</div>;

  return (
    <div className="product-detail-container">
      <div className="product-left">
        <div className="white-box">
          <div className="product-title">{product.name}</div>
          <div className="price">{product.salePrice} (정가 {product.originalPrice})</div>
          <img src={product.image} alt={product.name} className="large-image" />
        </div>
      </div>
      <div className="product-right">
        <div className="scrollable-info">
          <h3>모델 선택</h3>
          <select><option>{product.name}</option></select>

          <h3>저장 용량</h3>
          <select>
            <option>128GB</option>
            <option>256GB</option>
            <option>512GB</option>
          </select>

          <h3>색상</h3>
          <select>
            <option>블랙</option>
            <option>실버</option>
            <option>블루</option>
          </select>

          <button className="buy-button">구매하기</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;


