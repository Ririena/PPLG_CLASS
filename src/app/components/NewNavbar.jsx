
'use client'
import React, { useState } from 'react';
import { RiMenuLine } from 'react-icons/ri';
import Image from 'next/image'
import Link from 'next/link'
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link as NextUILink, Button, NavbarMenuToggle, NavbarMenu, NavbarMenuItem} from "@nextui-org/react";

export default function NewNavbar() {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const menuItems = [
    "Home",
    "Services",
    "Abouts",
    "Contact",
    "Organigram",
    "Profiles"
  ]
  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };


  return (
    <>
      <nav className=" max-w-full min-w-full shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div className="text-lg font-bold text-purple-600 w-full">
             <Image
             src="/images/mengantul.png"
             width={65}
             height={65}
             alt="Logo"
             className=' hp:items-start sm:items-start lg:w-auto xl:w-auto hp:w-16 hp:h-16'
             priority='{false}'
             />
            </div>
              <Navbar onMenuOpenChange={setIsMenuOpen} className='items-end w-12 h-16'>

<div className=''>

    <NavbarMenuToggle
         aria-label={isMenuOpen ? "Close menu" : "Open menu"}
         className="sm:hidden"
         />
         </div>
<NavbarMenu>
       {menuItems.map((item, index) => (
           <NavbarMenuItem key={`${item}-${index}`}>
           <NextUILink
             color={
                 index === 6 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
               }
               className="w-full hover:text-purple-600 border px-4 py-2 rounded-lg"
               href={`/${item}`}
               size="lg"
               >
             {item}
           </NextUILink>
         </NavbarMenuItem>
       ))}
     </NavbarMenu>
       </Navbar>

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
                <Link href="/Profiles" className="text-gray-800 text-sm font-semibold border px-4 py-2 rounded-lg hover:text-purple-600 hover:border-purple-600">
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