'use client'
import React, { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  return (
    <>
      <nav className="bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div className="text-lg font-bold text-purple-600">
              RPL2
            </div>
            <div className="sm:hidden cursor-pointer relative">
              <div
                className={`w-6 h-6 text-red-600 ${isDropdownVisible ? '-ml-2' : 'ml-2'}`}
                onClick={toggleDropdown}
              >
                {/* Icon removed */}
              </div>
              {isDropdownVisible && (
                <div className="absolute right-0 mt-2 p-2 bg-white border shadow-lg w-40">
                  <Link href="/service1" className="text-gray-800 text-sm hover:text-purple-600 mb-1 block">
                    Service 1
                  </Link>
                  <Link href="/service2" className="text-gray-800 text-sm hover:text-purple-600 mb-1 block">
                    Service 2
                  </Link>
                  <Link href="/service3" className="text-gray-800 text-sm hover:text-purple-600 block">
                    Service 3
                  </Link>
                </div>
              )}
            </div>
            <div className="sm:flex sm:items-center">
              <div className="hidden sm:flex sm:items-center xl:items-center lg:ml-px lg:items-center">
                <Link href="/" className="text-gray-800 text-sm font-semibold hover:text-purple-600 mr-4">
                  Home
                </Link>
                <Link href="/services" className="text-gray-800 text-sm font-semibold hover:text-purple-600 mr-4">
                  Services
                </Link>
                <Link href="/about" className="text-gray-800 text-sm font-semibold hover:text-purple-600 mr-4">
                  About
                </Link>
                <Link href="/contact" className="text-gray-800 text-sm font-semibold hover:text-purple-600 mr-4 sm:mr-12">
                  Contact
                </Link>
              </div>
              <div className="hidden sm:flex sm:items-center ml-auto">
                <Link href="/signin" className="text-gray-800 text-sm font-semibold border px-4 py-2 rounded-lg hover:text-purple-600 hover:border-purple-600 mr-4">
                  Organigram
                </Link>
                <Link href="/signup" className="text-gray-800 text-sm font-semibold border px-4 py-2 rounded-lg hover:text-purple-600 hover:border-purple-600">
                  List Siswa
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
