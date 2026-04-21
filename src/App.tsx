/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, ScrollRestoration } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductPage from './pages/ProductPage';
import { Product, CartItem } from './types';

export default function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  
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
    
    // Simple notification logic would go here
  };

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white overflow-x-hidden">
        <Header cartCount={cartCount} />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home onAddToCart={handleAddToCart} />} />
            <Route path="/shop" element={<Shop onAddToCart={handleAddToCart} />} />
            <Route path="/product/:id" element={<ProductPage onAddToCart={handleAddToCart} />} />
            {/* Added Fallback to Home for demo routes */}
            <Route path="/cart" element={<div className="container mx-auto px-4 py-24 text-center">
              <h2 className="text-4xl mb-4 font-display uppercase">Your Collection {cartCount === 0 ? 'is Empty' : `(${cartCount} Items)`}</h2>
              <p className="text-gray-400 mb-8 font-medium">Checkout is currently disabled in this preview.</p>
              <button onClick={() => setCart([])} className="btn-outline mx-auto mb-4">Clear Cart</button>
              <Home onAddToCart={handleAddToCart} />
            </div>} />
            <Route path="/login" element={<div className="container mx-auto px-4 py-24 text-center">
                <h2 className="text-4xl mb-4 font-display uppercase">Welcome Collector</h2>
                <p className="text-gray-400 mb-8 font-medium">User authentication is built into the collector platform.</p>
                <Home onAddToCart={handleAddToCart} />
            </div>} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

