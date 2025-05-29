// src/pages/HomePage.js
import React from 'react';
import BannerSlider from '../components/BannerSlider';
import Categories from '../components/Categories';
import './HomePage.css';

const HomePage = () => {
  const categoriesData = Array.from({ length: 15 }, (_, i) => ({
    name: `product${i}`,
    text: `제품${i + 1}`,
  }));

  return (
    <>
      <BannerSlider />
      <Categories categories={categoriesData} />
      <div className="news-card-container">
        <div className="news-card">
          <img src="/news1.webp" alt="News 1" />
        </div>
        <div className="news-card">
          <img src="/news2.webp" alt="News 2" />
        </div>
      </div>
    </>
  );
};

export default HomePage;
