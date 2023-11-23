'use client'
import React from 'react'
import CardDone from '../components/CardDone'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ScrollShadow } from "@nextui-org/react";
import { useEffect} from 'react'
export default function Profiles() {
   useEffect(() => {
    AOS.init
   })
  return (
    <>

    <div data-aos="fade-right">
    <ScrollShadow size={1000} className=''>
    <CardDone
    data-aos="fade-up"
    />
    </ScrollShadow>
    </div>
    </>
  )
}
