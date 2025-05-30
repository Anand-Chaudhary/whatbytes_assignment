import React from 'react';
import { products } from '../../../../utils/products';
import ProductDetail from '@/components/ProductDetail';

const ProductDetailPage = ({ params }: { params: { slug: string } }) => {
  const unwrappedParams = React.use(params);
  const productId = parseInt(unwrappedParams.slug);
  const product = products.find(p => p.id === productId);

  if (!product) {
    return <div className="container mx-auto p-4">Product not found</div>;
  }

  return <ProductDetail product={product} />;
};

export default ProductDetailPage; 