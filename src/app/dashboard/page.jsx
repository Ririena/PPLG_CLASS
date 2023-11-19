'use client'
import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';



export default function Dashboard() {
 React.useEffect(() => {
    AOS.init({ duration: 1000 });
 }, []);

 return (
    <div className="min-h-screen flex items-center justify-center">
      <div
        className="background-image"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1620736450944-d2c3a59d3724')",
          height: '100vh',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        data-aos="fade-up"
      >
        <Images/>
        <h1 className="text-white text-center font-bold text-4xl mb-4">
          Home like a grid
        </h1>
      </div>
    </div>
 );
}