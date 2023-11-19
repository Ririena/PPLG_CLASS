'use client'
import Image from 'next/image';
import bgImg1 from '../assets/1.jpg'
import bgImg2 from "../assets/2.jpg"
import bgImg3 from '../assets/3.jpg'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Grids = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  
  return (
    <>

    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div
          data-aos="fade-up"
          className="p-4 bg-gray-100 rounded-lg shadow-lg"
        >
          <h1 className="text-2xl font-mono text-center">MPLS Moment</h1>
          <Image
            src={bgImg1}
            alt="Image 1"
            className="w-full h-full object-cover"
          />
          {/* Additional content or captions can be added here */}
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="p-auto bg-gray-100 rounded-lg shadow-lg"
        >
          <h1 className="text-2xl font-mono text-center">Jumat Bersama</h1>
          <Image
            src={bgImg2}
            alt="Image 2"
            className="w-full h-full object-cover"
          />
          {/* Additional content or captions can be added here */}
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="p-4 bg-gray-100 rounded-lg shadow-lg"
        >
          <h1 className="text-2xl font-mono text-center">CPD</h1>
          <Image
            src={bgImg3}
            alt="Image 3"
            className="w-full h-auto object-fill"
          />
          {/* Additional content or captions can be added here */}
        </div>
        {/* Add more grid items with images as needed */}
      </div>
    </div>
    </>
  );
};

export default Grids;