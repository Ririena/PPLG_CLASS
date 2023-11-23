"use client";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Grids from "../components/Grids";
import Image from 'next/image'
import bgImg2 from "../assets/2.jpg"


function Home() {
  const [pengguna, setPengguna] = useState('');
  const [showiPengguna, setShowiPengguna] = useState(false);

  const handlePengguna = (event) => {
    setPengguna(event.target.value);
  };

  const handleShowPengguna = () => {
    setShowiPengguna(true);
  };
  useEffect(() => {
    AOS.init();
  }, []);

  
  return (
    <>

    
    {/* <section className="grid grid-cols-2 items-center p-16 mx-auto max-w-screen-xl">
  <div data-aos="fade-up" className="flex-1 max-w-md mb-40">
    <h1 className="flex flex-1  font-bold 2xl:text-3xl xl:text-2xl lg:text-lg md:text-base sm:text-xs hp:text-xs">Selamat Datang Di Website X-RPL-2 Angkatan Ke 7!!!</h1>
  </div>


  <div data-aos="" className=" rounded-r-2xl rounded-xl overflow-hidden">
    <Image src={bgImg2} width={500} height={500}/>
  </div>
</section> */}

<section className="bg-slate-200 py-16">
  <div className="container mx-auto max-w-screen-xl">
    <div className="grid grid-cols-2 items-center gap-8">
      {/* Left side: Text */}
      <div className="col-span-1 max-w-md mt-4">
        <div className="bg-white p-8 rounded-lg">
          <h1 className="text-4xl font-bold">Hello</h1>
          {/* Add more text or content as needed */}
        </div>
      </div>

      {/* Right side: Image */}
      <div className="col-span-1 bg-slate-600 rounded-r-2xl overflow-hidden">
        <Image src={bgImg2} width={500} height={500} />
      </div>
    </div>
  </div>
</section>

      {/* <section class="py-10 bg-white sm:py-16 lg:py-24">
        <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div class="max-w-2xl mx-auto text-center">
            <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              Latest From X-RPL-2
            </h2>
            <p class="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis.
            </p>
          </div>
          <div></div>
        </div>
      </section> */}
    </>
  );
}

export default Home;
