'use client'
import React from 'react'
import CardDone from '../components/CardDone'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect} from 'react'
import Contact from '../components/Contact';
export default function Profiles() {
   useEffect(() => {
    AOS.init
   })
  return (
    <>
    <div data-aos="fade-right">
    <CardDone
    data-aos="fade-up"
    />
    <h1>Tse</h1>
    </div>
    </>
  )
}
