'use client';

import Sidebar from '@/components/sidebar';
import ProductCard from '@/components/productCards';
import Link from 'next/link';
import React from 'react';
import Header from '@/components/header';
import { useFilter } from '@/context/FilterContext';

export default function Home() {
  const { filteredProducts, selectedCategory, setSelectedCategory, priceRange, setPriceRange, selectedBrands, setSelectedBrands, searchQuery, setSearchQuery } = useFilter();

  return (
    <div className="main w-full min-h-screen bg-blue-100 flex flex-col items-center">
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      <div className="flex flex-grow w-full">
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          priceRange={priceRange}
          setPriceRange={setPriceRange}
          selectedBrands={selectedBrands}
          setSelectedBrands={setSelectedBrands}
        />
        <div className="flex-1 p-4">
          <div className="main p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {filteredProducts.length > 0 ? (
              filteredProducts.map(product => (
                <Link key={product.id} href={`/products/${product.id}`}>
                  <ProductCard
                    key={product.id}
                    image={product.image}
                    title={product.title}
                    price={product.price}
                    rating={product.rating}
                  />
                </Link>
              ))
            ) : (
              <p>No products found matching your criteria.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
