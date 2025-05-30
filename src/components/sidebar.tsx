'use client';

import React, { useState } from 'react';

const categories = ['All', 'Electronics', 'Clothing', 'Home'];

const Sidebar: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [price, setPrice] = useState(500);

  return (
    <div className="p-4 space-y-4">
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
          <h3 className="font-semibold mt-4">Price</h3>
          <div className="flex items-center justify-between">
            <span>0</span>
            <input
              type="range"
              min="0"
              max="1000"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              className="w-full mx-2"
            />
            <span>1000</span>
          </div>
        </div>
      </div>

      {/* Light Box Version */}
      <div className="bg-white shadow p-4 rounded-lg space-y-4">
        <h2 className="text-lg font-bold">Category</h2>

        <div className="space-y-2">
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

        <div>
          <h3 className="font-semibold mt-4">Price</h3>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            className="w-full px-2 py-1 border rounded mt-1"
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
