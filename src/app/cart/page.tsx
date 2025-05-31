'use client';

import React from 'react';
import { useCart } from '@/context/CartContext';
import Image from 'next/image';
import Link from 'next/link';
import { Trash2, Minus, Plus } from 'lucide-react';
import { products } from '../../../utils/products';

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  // Get all products that are in the cart
  const cartProducts = products.filter(product => cartItems[product.id]);

  // Calculate total price
  const total = cartProducts.reduce((sum, product) => sum + (product.price * cartItems[product.id]), 0);

  if (cartProducts.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8 min-h-[calc(100vh-16rem)] flex flex-col justify-center">
        <h1 className="text-2xl font-bold mb-6">Your Cart</h1>
        <div className="text-center py-8">
          <p className="text-gray-600 mb-4">Your cart is empty</p>
          <Link 
            href="/"
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 min-h-[calc(100vh-16rem)]">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>
      
      <div className="grid grid-cols-1 gap-6">
        {cartProducts.map((product) => (
          <div key={product.id} className="flex items-center gap-4 bg-white p-4 rounded-lg shadow">
            <div className="w-24 h-24 relative">
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-contain"
              />
            </div>
            
            <div className="flex-1">
              <Link href={`/products/${product.id}`} className="text-lg font-medium hover:text-blue-600">
                {product.title}
              </Link>
              <p className="text-gray-600">${product.price}</p>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center border rounded-lg">
                <button
                  onClick={() => updateQuantity(product.id, cartItems[product.id] - 1)}
                  className="px-3 py-1 hover:bg-gray-100 transition rounded-l-lg"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-4 py-1 border-x">{cartItems[product.id]}</span>
                <button
                  onClick={() => updateQuantity(product.id, cartItems[product.id] + 1)}
                  className="px-3 py-1 hover:bg-gray-100 transition rounded-r-lg"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              <button
                onClick={() => removeFromCart(product.id)}
                className="p-2 text-red-600 hover:bg-red-50 rounded-full transition"
                aria-label="Remove from cart"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-white p-6 rounded-lg shadow">
        <div className="flex justify-between items-center mb-4">
          <span className="text-lg font-medium">Total:</span>
          <span className="text-xl font-bold">${total.toFixed(2)}</span>
        </div>
        
        <button
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default CartPage;