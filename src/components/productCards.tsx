"use client"

import React from 'react';
import Image, { StaticImageData } from 'next/image'
import { Star } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import Link from 'next/link';

type ProductCardProps = {
  id: number;
  image: string | StaticImageData;
  title: string;
  price: number;
  rating: number;
};

const ProductCard: React.FC<ProductCardProps> = ({ id, image, title, price, rating }) => {
  const { isInCart, addToCart, removeFromCart } = useCart();
  const inCart = isInCart(id);

  const handleCartClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (inCart) {
      removeFromCart(id);
    } else {
      addToCart(id);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 text-center">
      <Link href={`/products/${id}`} className="block">
        <Image
          src={image}
          alt={title}
          className="h-24 w-full object-contain mx-auto mb-4"
        />
        <div className="flex items-center gap-1 mb-4">
          {Array.from({ length: Math.floor(rating) }).map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
        <h2 className="font-medium text-sm mb-1">{title}</h2>
        <p className="font-semibold mb-3">${price}</p>
      </Link>
      <button
        onClick={handleCartClick}
        className={`${
          inCart 
            ? 'bg-red-600 hover:bg-red-700' 
            : 'bg-blue-600 hover:bg-blue-700'
        } text-white px-3 py-1 rounded transition w-full`}
      >
        {inCart ? 'Remove from Cart' : 'Add to Cart'}
      </button>
    </div>
  );
};

export default ProductCard;
