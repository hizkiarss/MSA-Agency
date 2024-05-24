"use client"
import { BsDot } from "react-icons/bs"
import { RxHamburgerMenu } from "react-icons/rx"
import { CiMenuBurger } from "react-icons/ci"
import React, { useState } from "react"
import NavBar from "./NavBar"
import Image from "next/image"
import Logo from "@/public/Homepage/logo.svg"
import Link from "next/link"

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false)
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen)
  }

  return (
    <section
      className={`flex flex-col ${isMenuOpen ? "bg-[#F5F5F5]" : "bg-white"} `}
    >
      <div className='grid grid-cols-4 items-start p-[15px] md:p-[30px] md:grid-cols-3 md:"items-center"'>
        <div className='flex-col gap-4 flex col-span-1 justify-between md:flex-row md:col-span-1 '>
          <Link href='/'>
            <Image src={Logo} alt='Logo.webp' />{" "}
          </Link>
          <div className='text-gray-400 text-[10px]'>
            <p>Helsinki</p>
            <p>GMT+2, Working Worldwide</p>
          </div>
        </div>

        <div className='md:col-span-1'></div>

        <div className='flex-col col-span-2 flex gap-8 items-end justify-end md:flex-row md:gap-12 md:items-center md:col-span-1'>
          <div className='flex gap-x-1 items-center order-last gap-5 md:order-first'>
            <div className='bg-black rounded-full w-[8px] h-[7px]' />
            <p className=' text-[10px] text-end order-first '>
              Open for projects in April
            </p>
          </div>
          <button aria-label='burgermenu' onClick={toggleMenu}>
            <div className='size-10 space-y-1.5 relative flex flex-col justify-center'>
              <div
                className={`w-8 h-[2px] bg-black transition duration-500 ease-in-out ${
                  isMenuOpen && "-rotate-45 translate-y-1.5"
                }`}
              ></div>
              <div
                className={`w-8 h-[2px] bg-black transition duration-500 ease-in-out ${
                  isMenuOpen && "rotate-45 -translate-y-0.5"
                }`}
              ></div>{" "}
            </div>
          </button>
        </div>
      </div>
      <div
        className={`transition-all duration-1000 ${
          isMenuOpen
            ? "max-h-screen opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <NavBar />
      </div>
    </section>
  )
}

export default Header
