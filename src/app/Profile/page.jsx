// pages/UsersPage.js
'use client'
import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic'; // Import the dynamic function
import AOS from 'aos';
import 'aos/dist/aos.css';
import Profiles from '../middleware/Profiles';

const CardProfile = dynamic(() => import('../components/CardProfile')); // Dynamically import the CardProfile component
const CategoryDropdown = dynamic(() => import('../components/CategoryDropdown')); // Dynamically import the CategoryDropdown component

const UsersPage = () => {
  const [usersData, setUsersData] = useState([]);
  const [filteredProfiles, setFilteredProfiles] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('Siswa');

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    setUsersData(Profiles);
    const uniqueCategories = Array.from(new Set(Profiles.map((profile) => profile.name)));
    setCategories(uniqueCategories);
    handleFilter(selectedCategory);
  }, [selectedCategory]);

  const handleFilter = (category) => {
    setSelectedCategory(category);
    if (category === 'All') {
      setFilteredProfiles(usersData);
    } else {
      const filteredData = usersData.filter((user) => user.name === category);
      setFilteredProfiles(filteredData);
    }
  };

  return (
    <div className="container mx-auto my-8">
      <div className="flex justify-between items-center mb-6">
        <h1 data-aos="fade-down" className="font-semibold text-lg ml-4 lg:text-2xl xl:text-2xl">
          List Siswa X-RPL-2
        </h1>
        <CategoryDropdown
          categories={['Siswa', ...categories]}
          onFilter={handleFilter}
        />
      </div>
      <div  data-aos="fade-right" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProfiles.length > 0
          ? filteredProfiles.map((profile) => (
              <CardProfile key={profile.id} user={profile} />
            ))
          : usersData.map((user) => (
              <CardProfile key={user.id} user={user} />
            ))}
      </div>
    </div>
  );
};

export default UsersPage;
