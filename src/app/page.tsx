'use client';

import Sidebar from '@/components/sidebar';
import ProductCard from '@/components/productCards';
import React, { useState } from 'react';
import { useFilter } from '@/context/FilterContext';
import { SlidersHorizontal, X } from 'lucide-react';

export default function Home() {
  const { filteredProducts, selectedCategory, setSelectedCategory, priceRange, setPriceRange, selectedBrands, setSelectedBrands } = useFilter();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="main w-full min-h-screen bg-blue-100 flex flex-col items-center">
      <div className="flex flex-grow w-full relative">
        {/* Mobile Filter Button */}
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="md:hidden fixed bottom-4 right-4 z-40 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition"
          aria-label="Open filters"
        >
          <SlidersHorizontal className="w-6 h-6" />
        </button>

        {/* Overlay */}
        {isSidebarOpen && (
          <div 
            className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        {/* Sidebar */}
        <div className={`
          fixed md:static inset-y-0 left-0 z-50
          transform transition-transform duration-300 ease-in-out
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        `}>
          <div className="relative h-full">
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="md:hidden absolute top-4 right-4 text-gray-600 hover:text-gray-800"
              aria-label="Close filters"
            >
              <X className="w-6 h-6" />
            </button>
            <Sidebar
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              priceRange={priceRange}
              setPriceRange={setPriceRange}
              selectedBrands={selectedBrands}
              setSelectedBrands={setSelectedBrands}
            />
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
              <div className="col-span-full text-center py-8">
                <p className="text-gray-600">No products found matching your criteria.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
