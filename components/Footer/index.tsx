"use client"
import { SiMinutemailer } from "react-icons/si"
import Link from "next/link"
import React from "react"
import Image from "next/image"
import biglogojpg from "@/public/Homepage/logo-big.svg"
const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }
  return (
    <section className='bg-[#F5F5F5] md:grid md:grid-cols-3 py-20 px-[15px] text-[13px]'>
      <div className='flex flex-col gap-[20px] md:gap-0 md:justify-between tracking-tight'>
        <Image src={biglogojpg} alt='logo.webp' />
        <p>2024: msadesign.space©</p>
      </div>

      <div className='flex flex-col gap-[14px] md:gap-[7px] md:gap-14  md:ml-10 tracking-tight'>
        <p>Creative Branding & Web Design Agency</p>
        <div>
          <p>Working worldwide, based in Helsinki, Finland:</p>
          <p>60.192059, 24.945831 // GMT+2</p>
        </div>

        <div className='flex gap-20 md:gap-36 mt-[20px] md:mt-[90px]'>
          <div className='flex flex-col gap-[20px]'>
            <p>Info</p>
            <div className='flex flex-col gap-[10px] text-gray-500'>
              <Link
                className=' hover:text-black transition-colors duration-300'
                href={"/"}
              >
                Home
              </Link>
              <Link
                className=' hover:text-black transition-colors duration-300'
                href={"/"}
              >
                Services
              </Link>
              <Link
                className=' hover:text-black transition-colors duration-300'
                href={"/"}
              >
                About
              </Link>
              <Link
                className=' hover:text-black transition-colors duration-300'
                href={"/"}
              >
                Contact
              </Link>
            </div>
          </div>

          <div className='flex flex-col gap-[20px]'>
            <p>Links</p>
            <div className='flex flex-col gap-[10px]  text-gray-500'>
              <Link
                className=' hover:text-black transition-colors duration-300'
                href={"/"}
              >
                Whatsapp
              </Link>
              <Link
                className=' hover:text-black transition-colors duration-300'
                href={"/"}
              >
                Email
              </Link>
              <Link
                className=' hover:text-black transition-colors duration-300'
                href={"/"}
              >
                Instagram
              </Link>
              <Link
                className=' hover:text-black transition-colors duration-300'
                href={"/"}
              >
                Behance
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className='flex md:flex-col justify-between items-start md:items-end mt-8 md:mt-0'>
        <button
          onClick={scrollToTop}
          className='bg-gray-300 px-[8px] md:px-3 py-1 rounded-full order-2 md:order-1 text-[10px] md:text-[13px]'
        >
          Scroll to top
        </button>
        <div className='bg-white border-solid border-[1px] border-black px-4 py-4 w-9/12 order-1 md:order-2'>
          <div className='flex items-center justify-between text-black'>
            <p className='text-[15px] md:text-[25px] tracking-tighter w-2/3'>
              Subscribe to our newsletter.
            </p>
            <SiMinutemailer size={80} className='size-12 md:size-20' />
          </div>
          <input
            className='rounded-full pl-4 py-1 md:py-2 mt-3 md:mt-4 border-[1px] border-gray-400 w-full'
            type='text'
            placeholder='putyouremail@here.com'
          />

          <div className='mt-6 md:mt-8 flex justify-between text-gray-400 text-[8px] md:text-[12px]'>
            <p>#FFFFFF</p>
            <p>rgba(255,255,255,1)</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer
