// src/App.js
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import BannerSlider from './components/BannerSlider';
import Categories from './components/Categories';
import SmartphonesPage from './pages/SmartphonesPage';
import TabletsPage from './pages/TabletsPage';
import AccessoriesPage from './pages/AccessoriesPage';

function App() {
  const categoriesData = Array.from({ length: 15 }, (_, i) => ({
    name: `product${i}`,
    text: `제품${i + 1}`,
  }));

  const HomePage = () => (
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
      </Routes>
    </Router>
  );
}

export default App;
//주석 추가
//주석 추가2

