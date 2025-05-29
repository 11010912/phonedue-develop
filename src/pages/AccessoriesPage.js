import React from 'react';
import './SmartphonesPage.css';

const AccessoriesBox = ({ title, products }) => {
  return (
    <section className="smartphone-box">
      <h2 className="section-title">{title}</h2>
      <div className="category-border-box">
        <div className="product-grid">
          {products.map((product, index) => (
            <div className="product-card" key={index}>
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

const AccessoriesPage = () => {
  const appleProducts = [
    { name: '아이폰 16 프로 맥스', image: '/phone1-1.png', originalPrice: '1,900,000원', salePrice: '1,600,000원' },
    { name: '아이폰 16 프로', image: '/phone1-2.png', originalPrice: '1,550,000원', salePrice: '1,250,000원' },
    { name: '아이폰 16', image: '/phone1-3.png', originalPrice: '1,300,000원', salePrice: '1,050,000원' },
    { name: '아이폰 16E', image: '/phone1-4.png', originalPrice: '960,000원', salePrice: '790,000원' },
  ];

  const samsungProducts = [
    { name: '갤럭시 S 25 울트라', image: '/phone2-1.png', originalPrice: '1,659,000원', salePrice: '1,339,000원' },
    { name: '갤럭시 S 25 +', image: '/phone2-2.png', originalPrice: '1,495,000원', salePrice: '1,196,000원' },
    { name: '갤럭시 S 25', image: '/phone2-3.png', originalPrice: '1,150,000원', salePrice: '850,000원' },
    { name: '갤럭시 S 25 엣지', image: '/phone2-4.png', originalPrice: '1,530,000원', salePrice: '1,330,000원' },
  ];

  const pixelProducts = [
    { name: 'Pixel 9 Pro XL', image: '/phone3-1.png', originalPrice: '1,399,000원', salePrice: '1,099,000원' },
    { name: 'Pixel 9 Pro Fold', image: '/phone3-2.png', originalPrice: '2,640,000원', salePrice: '2,100,000원' },
    { name: 'Pixel 9', image: '/phone3-3.png', originalPrice: '1,190,000원', salePrice: '810,000원' },
    { name: 'Pixel 9a', image: '/phone3-4.png', originalPrice: '810,000원', salePrice: '490,000원' },
  ];

  return (
    <div className="SmartphonesPage">
      <AccessoriesBox title="Apple" products={appleProducts} />
      <AccessoriesBox title="삼성" products={samsungProducts} />
      <AccessoriesBox title="Pixel" products={pixelProducts} />
      <div className="more-button-container">
        <button className="more-button">더 많은 상품 보러가기</button>
      </div>
    </div>
  );
};

export default AccessoriesPage;