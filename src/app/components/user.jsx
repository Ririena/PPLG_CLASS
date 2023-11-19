'use client'
import React from 'react'
import { useState } from 'react'


export default function User() {
    const [pengguna, setPengguna] = useState('')
    const [showiPengguna, setShowiPengguna] = useState(false)

  const handlePengguna = (event) => {
    setPengguna(event.target.value)
  }

  const handleShowPengguna= () => {
    setShowiPengguna(true)
  };
  return (
    <>
    <h1>Hello</h1>
    <form>
        <label htmlFor='pengguna'>NamaPengguna</label>
<input type="text" className='border border-b-gray-600' id='pengguna' onChange={handlePengguna}></input>
    </form>
    <button onClick={handleShowPengguna}>Tampilkan Nama Pengguna</button>
    {showiPengguna && <h1>Halo, {pengguna}</h1>}
    </>
  )
}
