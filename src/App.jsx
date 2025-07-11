import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import Footer from './components/Footer';
import FAQPage from './pages/FAQPage';
import BlogPage from './pages/BlogPage';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/blog" element={<BlogPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
