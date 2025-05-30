'use client';

import React, { useState } from 'react';

const categories = ['All', 'Electronics', 'Clothing', 'Home'];
const brands = ['All', 'Brand A', 'Brand B', 'Brand C'];

interface SidebarProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  priceRange: [number, number];
  setPriceRange: (priceRange: [number, number]) => void;
  selectedBrands: string[];
  setSelectedBrands: (brands: string[]) => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  selectedCategory,
  setSelectedCategory,
  priceRange,
  setPriceRange,
  selectedBrands,
  setSelectedBrands,
}) => {

  const handleBrandChange = (brand: string) => {
    if (brand === 'All') {
      setSelectedBrands(['All']);
    } else {
      if (selectedBrands.includes('All')) {
        setSelectedBrands([brand]);
      } else {
        if (selectedBrands.includes(brand)) {
          setSelectedBrands(selectedBrands.filter(b => b !== brand));
        } else {
          setSelectedBrands([...selectedBrands, brand]);
        }
      }
    }
  };

  return (
    <div className="p-4 space-y-4 w-64">
      {/* Dark Box Version */}
      <div className="bg-blue-700 text-white p-4 rounded-lg space-y-4">
        <h2 className="text-lg font-bold">Filters</h2>

        <div>
          <h3 className="font-semibold">Category</h3>
          <div className="space-y-2 mt-2">
            {categories.map((cat) => (
              <label key={cat} className="flex items-center gap-2">
                <input
                  type="radio"
                  value={cat}
                  checked={selectedCategory === cat}
                  onChange={() => setSelectedCategory(cat)}
                  className="accent-white"
                />
                {cat}
              </label>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-semibold mt-4">Brand</h3>
          <div className="space-y-2 mt-2">
            {brands.map((brand) => (
              <label key={brand} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  value={brand}
                  checked={selectedBrands.includes(brand)}
                  onChange={() => handleBrandChange(brand)}
                  className="accent-white"
                />
                {brand}
              </label>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-semibold mt-4">Price</h3>
          <div className="flex items-center justify-between">
            <span>0</span>
            <input
              type="range"
              min="0"
              max="1000"
              value={priceRange[1]}
              onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
              className="w-full mx-2"
            />
            <span>1000</span>
          </div>
        </div>
      </div>

      {/* Light Box Version */}
      <div className="bg-white shadow p-4 rounded-lg space-y-4">
        <h2 className="text-lg font-bold">Filters</h2>

        <div>
          <h3 className="font-semibold">Category</h3>
          <div className="space-y-2 mt-2">
            {categories.map((cat) => (
              <label key={cat} className="flex items-center gap-2">
                <input
                  type="radio"
                  value={cat}
                  checked={selectedCategory === cat}
                  onChange={() => setSelectedCategory(cat)}
                  className="accent-blue-600"
                />
                {cat}
              </label>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-semibold mt-4">Brand</h3>
          <div className="space-y-2 mt-2">
            {brands.map((brand) => (
              <label key={brand} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  value={brand}
                  checked={selectedBrands.includes(brand)}
                  onChange={() => handleBrandChange(brand)}
                  className="accent-blue-600"
                />
                {brand}
              </label>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-semibold mt-4">Price</h3>
          <input
            type="number"
            value={priceRange[1]}
            onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
            className="w-full px-2 py-1 border rounded mt-1"
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
