import React from 'react';
import { products } from '../../../../utils/products';
import ProductDetail from '@/components/ProductDetail';
import type { Metadata, ResolvingMetadata } from 'next';

type Props = {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const { slug } = await params;
  const productId = parseInt(slug);
  const product = products.find(p => p.id === productId);

  // optionally access and extend parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  if (!product) {
    return {
      title: 'Product Not Found',
      openGraph: {
        images: [...previousImages],
      },
    }
  }

  return {
    title: product.title,
    description: product.description,
    openGraph: {
      images: [...previousImages],
    },
  }
}

async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const productId = parseInt(slug);
  const product = products.find(p => p.id === productId);

  if (!product) {
    return <div className="container mx-auto p-4">Product not found</div>;
  }

  return <ProductDetail product={{ ...product, cart: false }} />;
}

export default ProductDetailPage; 