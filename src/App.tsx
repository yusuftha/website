/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import Auth from './pages/Auth';
import Checkout from './pages/Checkout';
import { Product, CartItem } from './types';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showToast, setShowToast] = useState(false);
  
  // Theme initialization
  useEffect(() => {
    const savedTheme = localStorage.getItem('btcg_theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(prev => {
      const newValue = !prev;
      if (newValue) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('btcg_theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('btcg_theme', 'light');
      }
      return newValue;
    });
  };
  
  // Load cart from local storage
  useEffect(() => {
    const savedCart = localStorage.getItem('btcg_cart');
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (e) {
        console.error("Failed to parse cart", e);
      }
    }
  }, []);

  // Save cart to local storage
  useEffect(() => {
    localStorage.setItem('btcg_cart', JSON.stringify(cart));
  }, [cart]);

  const handleAddToCart = (product: Product, quantity: number = 1) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id 
            ? { ...item, quantity: item.quantity + quantity } 
            : item
        );
      }
      return [...prev, { ...product, quantity }];
    });
    
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white dark:bg-dark-gray transition-colors duration-300 overflow-x-hidden">
        <Header cartCount={cartCount} isDarkMode={isDarkMode} onToggleTheme={toggleTheme} />
        
        <main className="flex-grow relative">
          <AnimatePresence>
            {showToast && (
              <motion.div 
                initial={{ opacity: 0, y: 50, x: '-50%' }}
                animate={{ opacity: 1, y: 0, x: '-50%' }}
                exit={{ opacity: 0, y: 50, x: '-50%' }}
                className="fixed bottom-10 left-1/2 z-[100] bg-dark-gray dark:bg-white text-white dark:text-dark-gray px-6 py-3 rounded-full shadow-2xl font-bold text-xs uppercase tracking-widest pointer-events-none"
              >
                Koleksiyona Eklendi!
              </motion.div>
            )}
          </AnimatePresence>

          <Routes>
            <Route path="/" element={<Home onAddToCart={handleAddToCart} />} />
            <Route path="/shop" element={<Shop onAddToCart={handleAddToCart} />} />
            <Route path="/product/:id" element={<ProductPage onAddToCart={handleAddToCart} />} />
            <Route path="/cart" element={<CartPage cart={cart} onUpdateQuantity={updateQuantity} onRemove={removeFromCart} />} />
            <Route path="/checkout" element={<Checkout cart={cart} />} />
            <Route path="/login" element={<Auth />} />
            <Route path="/register" element={<Auth />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

