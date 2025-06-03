import React from 'react';
import { useNavigate } from 'react-router-dom';
import { smartphoneData } from '../data/smartphonesData';
import './SmartphonesPage.css';

const SmartphoneBox = ({ title, products }) => {
  const navigate = useNavigate();
  return (
    <section className="smartphone-box">
      <h2 className="section-title">{title}</h2>
      <div className="category-border-box">
        <div className="product-grid">
          {products.map((product) => (
            <div
              className="product-card"
              key={product.id}
              onClick={() => navigate(`/product/${product.id}`)}
            >
              <img src={product.image} alt={product.name} />
              <div className="product-info">
                <div className="product-name">{product.name}</div>
                <div className="original-price">{product.originalPrice}</div>
                <div className="sale-price">{product.salePrice}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SmartphonesPage = () => {
  const apple = smartphoneData.filter(p => p.brand === 'Apple');
  const samsung = smartphoneData.filter(p => p.brand === '삼성');
  const pixel = smartphoneData.filter(p => p.brand === 'Pixel');

  return (
    <div className="SmartphonesPage">
      <SmartphoneBox title="애플" products={apple} />
      <SmartphoneBox title="삼성" products={samsung} />
      <SmartphoneBox title="픽셀" products={pixel} />
      <div className="more-button-container">
        <button className="more-button">더 많은 상품 보러가기</button>
      </div>
    </div>
  );
};

export default SmartphonesPage;