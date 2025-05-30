'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { Product } from '@/utils/products';

interface CartContextType {
  cartItems: { [key: number]: boolean };
  addToCart: (productId: number) => void;
  removeFromCart: (productId: number) => void;
  isInCart: (productId: number) => boolean;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<{ [key: number]: boolean }>({});

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (productId: number) => {
    setCartItems(prev => ({
      ...prev,
      [productId]: true
    }));
  };

  const removeFromCart = (productId: number) => {
    setCartItems(prev => {
      const newCart = { ...prev };
      delete newCart[productId];
      return newCart;
    });
  };

  const isInCart = (productId: number) => {
    return cartItems[productId] || false;
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, isInCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}; 