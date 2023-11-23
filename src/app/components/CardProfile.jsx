
import React from 'react';
import Image from 'next/image'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Skeleton, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from '@nextui-org/react';
import { useState, useEffect} from 'react'
import Link from 'next/link'
const CardProfile = ({ user }) => {
  
  const [bukaModal , setBukaModal] = useState(false)

  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [bukaS, setBukaS] = useState(false)

  function showS() {
    bukaS(console.log("Memanggil"))
  }

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
    <div data-theme="cupcake" className=" p-6 rounded-lg overflow-hidden shadow-md">
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
            <h2 className="text-xl font-semibold text-gray-800">{user.name || 'Nama Tidak Ditemukan'}</h2>
            <p className="text-gray-600">Motto Hidup: {user.email || 'Tidak Memiliki Motto  Hidup'}</p>
            <Button onPress={onOpen} className='mt-4 border px-4 py-2 rounded-lg hover:bg-gray-100 active:bg-gray-200'>Detail</Button>
  <Modal isOpen={isOpen} onOpenChange={onOpenChange}   backdrop="static" position='top' objectPosition='top' radius="2xl">
    <ModalContent data-theme="valentine" className='shadow-md rounded-2xl'>
      {(onClose) => (
        <>
        <ModalHeader data-theme="wireframe" className=''>
          Detail Pengguna
        </ModalHeader>
        <ModalBody className=' bg-neutral-100 w-full border px-4 py-2 border-slate-100' data-theme="">




      
          <Image
            src={`/profile/${user.avatar}`}
            alt={user.name}
            className="rounded-full mx-auto"
            width={120}
            height={120}
            style={{ objectPosition: 'center center' }}
            />
          <h2 className="text-xl font-semibold">{user.name || 'Nama Tidak Ditemukan'}</h2>
          <p className="">Motto Hidup: {user.email || 'Tidak Memiliki Motto Hidup'}</p>
          <p className="">Jenis Kelamin: {user.gender ? 'Laki-Laki' : 'Perempuan'}</p>
          <p className="">Alamat: {user.address || 'Alamat Tidak Ditemukan'}</p>
       {    user.sosialig && (
            <>
          <p className='flex flex-row gap-2'>Sosial Media: 
          <Link href={user.sosialig}>
          <Image
          src={`/profile/sosial/ig.png`}
          alt={user.name}
          className='rounded-full flex'
          width={25}
          height={25}
          />
          </Link>
             <Image
          src={`/profile/sosial/fb.png`}
          alt="TEST"
          className='rounded-full flex'
          width={25}
          height={25}
          />
          </p>
          </>
)
}
        </ModalBody>
        <ModalFooter data-theme="wireframe" className=''>
          <Button  className='' onPress={() => { onClose(); setBukaModal(false); }}>Tutup</Button>
        </ModalFooter>
        </>
      )}
    </ModalContent>
  </Modal>
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
