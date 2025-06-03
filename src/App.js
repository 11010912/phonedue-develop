// src/App.js
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// 공통 레이아웃 및 페이지
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import SmartphonesPage from './pages/SmartphonesPage';
import TabletsPage from './pages/TabletsPage';
import AccessoriesPage from './pages/AccessoriesPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage'; // ✅ 장바구니 페이지 import 추가

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <HomePage />
            </Layout>
          }
        />
        <Route
          path="/smartphones"
          element={
            <Layout>
              <SmartphonesPage />
            </Layout>
          }
        />
        <Route
          path="/tablets"
          element={
            <Layout>
              <TabletsPage />
            </Layout>
          }
        />
        <Route
          path="/accessories"
          element={
            <Layout>
              <AccessoriesPage />
            </Layout>
          }
        />
        <Route
          path="/product/:id"
          element={
            <Layout>
              <ProductDetailPage />
            </Layout>
          }
        />
        <Route
          path="/cart" // ✅ 장바구니 라우팅 추가
          element={
            <Layout>
              <CartPage />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;




