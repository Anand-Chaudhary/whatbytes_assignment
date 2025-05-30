import React from 'react';
import { products } from '../../../../utils/products';
import Image from 'next/image';

const ProductDetailPage = ({ params }: { params: { slug: string } }) => {
  const productId = params.slug;

  const product = products.find(p => p.id.toString() === productId);

  if (!product) {
    return <div className="container mx-auto p-4">Product not found</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Product Detail Page for ID: {productId}</h1>

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

          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mb-4">
            Add to Cart
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

export default ProductDetailPage; 