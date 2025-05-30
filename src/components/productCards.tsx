import React from 'react';
import Image, { StaticImageData } from 'next/image'

type ProductCardProps = {
  image: string | StaticImageData;
  title: string;
  price: number;
  onAddToCart?: () => void;
};

const ProductCard: React.FC<ProductCardProps> = ({ image, title, price, onAddToCart }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 w-48 text-center">
      <Image
        src={image}
        alt={title}
        className="h-24 w-full object-contain mx-auto mb-4"
      />
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
