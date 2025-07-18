import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import FAQPage from './pages/FAQPage';
import BlogPage from './pages/BlogPage';
import BlogDetail from './pages/BlogDetail';
import CategoryPage from './pages/categories/CategoryPage';
import PlantDetailPage from './pages/PlantDetailPage';
import CareTipsPage from './pages/CareTipsPage';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog-detail" element={<BlogDetail />} />
        <Route path="/categories" element={<CategoryPage />} />
        <Route path="/plant/:name" element={<PlantDetailPage />} />
        <Route path="/care-tips" element={<CareTipsPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
