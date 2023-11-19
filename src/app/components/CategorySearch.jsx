// components/CategorySearch.js
import React, { useState } from 'react';

const CategorySearch = ({ onFilter }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mengirimkan hasil pencarian ke parent component
    onFilter(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <label htmlFor="search" className="block text-gray-700 text-sm font-bold mb-2">
        Search Name:
      </label>
      <div className="flex">
        <input
          type="text"
          id="search"
          value={searchTerm}
          onChange={handleChange}
          placeholder="Enter name..."
          className="border border-gray-300 p-2 flex-1"
        />
        <button
          type="submit"
          className="ml-2 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default CategorySearch;
