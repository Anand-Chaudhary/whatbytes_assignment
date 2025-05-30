'use client';

import React, { createContext, useState, useContext, useMemo } from 'react';
import { products, Product } from '../../utils/products'; // Adjust the import path as needed

interface FilterContextType {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  priceRange: [number, number];
  setPriceRange: (priceRange: [number, number]) => void;
  selectedBrands: string[];
  setSelectedBrands: (brands: string[]) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  filteredProducts: Product[];
}

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export const FilterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]); // [min, max]
  const [selectedBrands, setSelectedBrands] = useState<string[]>(['All']);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = useMemo(() => {
    let filtered: Product[] = products;

    // Category filtering
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Price filtering
    filtered = filtered.filter(product => product.price >= priceRange[0] && product.price <= priceRange[1]);

    // Brand filtering (assuming products have a brand property)
    if (!selectedBrands.includes('All')) {
      filtered = filtered.filter(product => product.brand && selectedBrands.includes(product.brand));
    }

    // Search filtering
    if (searchQuery) {
      filtered = filtered.filter(product =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (product.description && product.description.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    return filtered;
  }, [selectedCategory, priceRange, selectedBrands, searchQuery]);

  return (
    <FilterContext.Provider
      value={{
        selectedCategory,
        setSelectedCategory,
        priceRange,
        setPriceRange,
        selectedBrands,
        setSelectedBrands,
        searchQuery,
        setSearchQuery,
        filteredProducts,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = () => {
  const context = useContext(FilterContext);
  if (context === undefined) {
    throw new Error('useFilter must be used within a FilterProvider');
  }
  return context;
}; 