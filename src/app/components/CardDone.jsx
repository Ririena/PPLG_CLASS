
'use client';
import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Profiles from '../middleware/Profiles';
import { Skeleton } from '@nextui-org/react';

const CardProfile = dynamic(() => import('../components/CardProfile'));
const CategoryDropdown = dynamic(() => import('../components/CategoryDropdown'));


const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const CardDone = () => {
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

  const handleFilter = async (category) => {
    setSelectedCategory(category);
    setFilteredProfiles([]);
  
    let filteredData;
  
    if (category === 'All') {
      filteredData = usersData;
    } else if (category === 'Siswa') {
      filteredData = usersData.slice().sort((a, b) => a.id - b.id);
    } else {
      filteredData = usersData.filter(
        (user) => user.name === category || (user.gender === true && category === 'LakiLaki') || (user.gender === false && category === 'Perempuan')
      );
    }
  
    for (let i = 0; i < filteredData.length; i++) {
      await delay(500);
      setFilteredProfiles((prevProfiles) => {
        const newProfile = { ...filteredData[i], uniqueKey: `${filteredData[i].id}_${category}` };
        if (!prevProfiles.some((profile) => profile.uniqueKey === newProfile.uniqueKey)) {
          return [...prevProfiles, newProfile];
        }
        return prevProfiles;
      });
    }
  };
  

  return (
    <div className="container mx-auto my-8">
      <div className="flex justify-between items-center mb-6">
        <h1 data-aos="fade-down" className="font-semibold text-lg ml-4 lg:text-2xl xl:text-2xl">
          List Siswa X-RPL-2
        </h1>
        <CategoryDropdown categories={['Siswa', 'LakiLaki', 'Perempuan', ...categories]} onFilter={handleFilter} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProfiles.map((profile) => (
          <CardProfile key={profile.uniqueKey} user={profile} />
        ))}
        {/* Show Skeleton when filteredProfiles is empty */}
        {filteredProfiles.length === 0 &&
          Array.from({ length: 6 }).map((_, index) => (
            <Skeleton key={index} height={300} width={'100%'} style={{ borderRadius: '8px' }} />
          ))}
      </div>
    </div>
  );
};

export default CardDone;
