// components/CardProfile.js
import React from 'react';
import Image from 'next/image'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Skeleton } from '@nextui-org/react';
import { useState, useEffect} from 'react'

const CardProfile = ({ user }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
    <div className="bg-gradient-to-tl from-amber-100 via-amber-200 to-amber-300 p-6 rounded-lg overflow-hidden shadow-lg">
      <div data-aos="fade-right" className="">
        {user ? (
          <Image
            src={`/profile/${user.avatar}`}
            alt={user.name}
            className="rounded-full mx-auto"
            width={80}
            height={80}
            style={{ objectPosition: 'center center' }}
          />
        ) : (
          <Skeleton circle height={80} width={80} />
        )}
        <div data-aos="fade-up"></div>
        {user ? (
          <>
            <h2 className="text-xl font-semibold text-gray-800">{user.name}</h2>
            <p className="text-gray-600">Motto Hidup: {user.email}</p>
            <button className='mt-4 border px-4 py-2 rounded-lg border-amber-500 text-amber-500 hover:text-purple-600 hover:border-purple-600 hover:bg-amber-200'>Detail</button>
          </>
        ) : (
          <>
            <Skeleton height={20} width={120} />
            <Skeleton height={15} width={100} />
            <Skeleton height={35} width={120} />
          </>
        )}
      </div>
    </div>
</>
  );
};

export default CardProfile;
