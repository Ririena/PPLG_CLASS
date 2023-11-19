// components/CategoryDropdown.js
'use client'
import React, { useState } from 'react';

const CategoryDropdown = ({ categories, onFilter }) => {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleChange = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);
    onFilter(category);
  };

  return (
    <div className="mb-4 max-w-md">
      <select
        id="category"
        value={selectedCategory}
        onChange={handleChange}
        className="border border-gray-400 border-b-gray-400 p-2 w-full"
      >
        <option value="">Pilih Category</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category === 'lakilaki' ? 'Laki-laki' : category === 'perempuan' ? 'Perempuan' : category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategoryDropdown;
