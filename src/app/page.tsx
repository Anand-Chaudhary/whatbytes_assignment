'use client';

import Sidebar from '@/components/sidebar';
import ProductCard from '@/components/productCards';
import React from 'react';
import { useFilter } from '@/context/FilterContext';

export default function Home() {
  const { filteredProducts, selectedCategory, setSelectedCategory, priceRange, setPriceRange, selectedBrands, setSelectedBrands } = useFilter();

  return (
    <div className="main w-full min-h-screen bg-blue-100 flex flex-col items-center">
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
                <ProductCard
                  key={product.id}
                  id={product.id}
                  image={product.image}
                  title={product.title}
                  price={product.price}
                  rating={product.rating}
                />
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
