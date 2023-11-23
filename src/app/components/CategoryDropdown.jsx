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
    <>
    <div className="mb-4 max-w-md">
    <h1 className='mb-1 ml-8' data-aos="fade-down">Pilih Kategori</h1>
      <select
        id="category"
        value={selectedCategory}
        onChange={handleChange}
        className="border border-gray-400 border-b-gray-400 p-2 w-full rounded-full hover:border-purple-600"
        >
        {categories.map((category) => (
          <option key={category} value={category}>
            {category === 'lakilaki' ? 'Laki-laki' : category === 'perempuan' ? 'Perempuan' : category}
          </option>
        ))}
      </select>
    </div>
        </>
  );
};

export default CategoryDropdown;
