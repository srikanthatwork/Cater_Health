import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
// import { ScrollText } from "lucide-react";
import { ArrowUp } from "lucide-react"; 

import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import ProductPage from './pages/ProductPage';
import ProductsPage from './pages/ProductsPage';
import ReportsPage from './pages/ReportsPage';
import BlogPage from './pages/BlogPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import CheckoutPage from './pages/CheckoutPage';
import CartPage from './pages/CartPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import AccountPage from './pages/AccountPage';
import OrdersPage from './pages/OrdersPage';
import OrderTrackingPage from './pages/OrderTrackingPage';
import WishlistPage from './pages/WishlistPage';
import RecommendationsPage from './pages/RecommendationsPage';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/category/:category" element={<CategoryPage />} />
              <Route path="/product/:id" element={<ProductPage />} />
              {/* <Route path="/" element={<ProductPage />} /> */}
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/reports" element={<ReportsPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/forgot-password" element={<ForgotPasswordPage />} />
              <Route path="/account" element={<AccountPage />} />
              <Route path="/orders" element={<OrdersPage />} />
              <Route
                path="/order-tracking/:orderId"
                element={<OrderTrackingPage />}
              />
              <Route path="/wishlist" element={<WishlistPage />} />
              <Route
                path="/recommendations"
                element={<RecommendationsPage />}
              />
            </Routes>
          </main>
          <Footer />
          {/* Scroll to top button */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-8 right-8 bg-amber-700 text-amber-50 p-3 rounded-full shadow-lg hover:bg-amber-800 transition-all duration-300 z-50"
            aria-label="Scroll to top"
          >
            <ArrowUp size={24} />
          </button>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;