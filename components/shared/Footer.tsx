import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import image from '../../public/assets/community.png'
import { FaInstagram } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { TbPhone } from "react-icons/tb";

const Footer = () => {
  return (
    <footer className='text-xl flex flex-col items-center mt-32'>
        <hr className='border-1 w-[90%] mb-10' />
        <div className='flex justify-between gap-20 w-[80%] max-lg:w-[90%] max-lg:text-md max-md:flex-col items-center mb-20'>
            <div className='flex flex-col gap-6 text-black dark:text-slate-300'>
                <div className='flex gap-6 items-center'>
                    <HiOutlineMail size={35} className="max-sm:w-8 max-sm:h-8" />
                    <p>tinkerhub-cep@gmail.com</p>
                </div>
                <div className='flex gap-6 items-center'>
                    <TbPhone size={35} className="max-sm:w-8 max-sm:h-8" />
                    <div>
                        <p>Sabarish: &nbsp;+91 6282746713</p>
                    </div>
                </div>
                <div className='flex gap-6 items-center'>
                    <Link
                      href="https:tinker.org"
                      className='flex gap-6 items-center'
                    >
                        <FaInstagram size={35} className="max-sm:w-8 max-sm:h-8" />
                        <p>tinkerhub_cep</p>
                    </Link>
                </div>
                
            </div>
            <div className='flex items-center'>
                <Image 
                  src={image}
                  width={200}
                  height={200}
                  alt="College of Engineering Perumon"
                  className='rounded-md object-cover max-lg:w-[100px] max-lg:height-[100px]'
                />
            </div>
            <div className='flex items-center'>
                <Image 
                  src={image}
                  width={250}
                  height={250}
                  alt="College of Engineering Perumon"
                  className='rounded-md object-cover max-lg:w-[150px] max-lg:height-[150px]'
                />
            </div>
        </div>
    </footer>
  )
}

export default Footer