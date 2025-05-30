import React from 'react';
import Image, { StaticImageData } from 'next/image'
import { Star } from 'lucide-react';

type ProductCardProps = {
  image: string | StaticImageData;
  title: string;
  price: number;
  rating: number,
  onAddToCart?: () => void;
};

const ProductCard: React.FC<ProductCardProps> = ({ image, title, price, onAddToCart, rating }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 w-48 text-center">
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
      <button
        onClick={onAddToCart}
        className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
