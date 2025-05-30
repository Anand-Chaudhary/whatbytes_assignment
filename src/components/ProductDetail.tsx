'use client';

import React from 'react';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import { Product } from '@/utils/products';

interface ProductDetailProps {
  product: Product;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  const { isInCart, addToCart, removeFromCart } = useCart();
  const inCart = isInCart(product.id);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Product Detail Page for ID: {product.id}</h1>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <div className="bg-gray-200 h-96 flex items-center justify-center text-gray-500">
            <Image
              src={product.image}
              alt={product.title}
              width={400}
              height={400}
              objectFit="contain"
            />
          </div>
        </div>

        <div className="md:w-1/2 flex flex-col">
          <h1 className="text-2xl font-bold mb-2">{product.title}</h1>

          <p className="text-lg text-green-600 mb-4">${product.price}</p>

          <p className="text-gray-700 mb-4">{product.description}</p>

          <p className="text-sm text-gray-500 mb-4">Category: {product.category}</p>

          <div className="flex items-center mb-4">
            <label htmlFor="quantity" className="mr-2">Quantity:</label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              min="1"
              defaultValue="1"
              className="border rounded px-2 py-1 w-16 text-center"
            />
          </div>

          <button 
            onClick={() => inCart ? removeFromCart(product.id) : addToCart(product.id)}
            className={`${
              inCart 
                ? 'bg-red-500 hover:bg-red-600' 
                : 'bg-blue-500 hover:bg-blue-600'
            } text-white font-bold py-2 px-4 rounded mb-4 transition`}
          >
            {inCart ? 'Remove from Cart' : 'Add to Cart'}
          </button>

          <div>
            <h3 className="text-lg font-semibold mb-2">Reviews (Optional)</h3>
            <div className="bg-gray-100 p-4 rounded">
              Reviews Section Placeholder
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail; 