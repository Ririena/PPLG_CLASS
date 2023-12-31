// components/CardProfile.js
import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Skeleton } from '@nextui-org/react';

const CardProfile = dynamic(() => import('../components/CardProfile'));
const CategoryDropdown = dynamic(() => import('../components/CategoryDropdown'));
const Profiles = dynamic(() => import('../middleware/Profiles'));

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const CardDone = () => {
  const [usersData, setUsersData] = useState([]);
  const [filteredProfiles, setFilteredProfiles] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('Semua Murid');

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    import('../middleware/Profiles').then((module) => {
      setUsersData(module.default);
      const uniqueCategories = Array.from(new Set(module.default.map((profile) => profile.name)));
      setCategories(uniqueCategories);
      handleFilter(selectedCategory);
    });
  }, [selectedCategory]);

  const handleFilter = async (category) => {
    setSelectedCategory(category);
    setFilteredProfiles([]);
  
    let filteredData;
  
    if (category === 'All') {
      filteredData = usersData;
    } else if (category === 'Semua Murid') {
      filteredData = usersData.slice().sort((a, b) => a.id - b.id);
    } else {
      filteredData = usersData.filter(
        (user) => user.name === category || (user.gender === true && category === 'LakiLaki') || (user.gender === false && category === 'Perempuan')
      );
    }
  
    for (let i = 0; i < filteredData.length; i++) {
      await delay(400);
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
        <h1 data-aos="fade-down" className="  font-semibold hp:mr-4 ml-4 uppercase">
          List Murid <p>
            X RPL2</p>
        </h1>
        <CategoryDropdown categories={['Semua Murid', 'LakiLaki', 'Perempuan']} onFilter={handleFilter} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProfiles.map((profile) => (
          <CardProfile key={profile.uniqueKey} user={profile} />
        ))}
        {filteredProfiles.length === 0 &&
          Array.from({ length: 6 }).map((_, index) => (
            <Skeleton key={index} height={300} width={'100%'} style={{ borderRadius: '8px' }} />
          ))}
      </div>
    </div>
  );
};

export default CardDone;
