// pages/UsersPage.js
'use client'
import React, { useState, useEffect } from 'react';
import CardProfile from '../components/CardProfile';
import Profiles from '../middleware/Profiles';
import CategoryDropdown from '../components/CategoryDropdown';
import AOS from "aos";
import "aos/dist/aos.css";
const UsersPage = () => {
  const [usersData, setUsersData] = useState([]);
  const [filteredProfiles, setFilteredProfiles] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('Siswa'); // Ubah sesuai kategori default yang diinginkan

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    // Mengambil data pengguna dari objek lokal
    setUsersData(Profiles);

    // Membuat daftar kategori dari nama profile
    const uniqueCategories = Array.from(
      new Set(Profiles.map((profile) => profile.name))
    );
    setCategories(uniqueCategories);

    // Mengatur kategori default
    handleFilter(selectedCategory);
  }, [selectedCategory]); // Tambahkan selectedCategory sebagai dependensi

  // Handle filtering profiles based on selected category
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
        <h1 data-aos="fade-down" className="font-semibold text-lg ml-4 lg:text-2xl xl:text-2xl">List Siswa X-RPL-2 </h1>
        <CategoryDropdown
          categories={['Siswa', ...categories]} // Tambahkan kategori default di sini
          onFilter={handleFilter}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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