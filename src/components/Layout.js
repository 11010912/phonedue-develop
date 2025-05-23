// src/components/Layout.js
import React from 'react';
import Navigation from './nav';
import './Layout.css'; // 공통 마진, 패딩 등 스타일

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Navigation />
      <main className="layout-content">
        {children}
      </main>
    </div>
  );
};

export default Layout;
