"use client"
import { BsArrowRightShort } from "react-icons/bs"
import { AiOutlineArrowRight } from "react-icons/ai"
import "react-multi-carousel/lib/styles.css"
import OurProjectsItems from "./OurProjectsItems"
import OurProjectsData from "@/utils/HomepageData/OurProjectsData"
import React from "react"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import Link from "next/link"

const OurProjects = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  }

  return (
    <section className='mx-[15px] md:mx-[30px] py-[30px]  border-t-gray border-t-2'>
      <div className='flex items-center justify-between mb-4'>
        <h2 className='text-[35px] md:text-[55px] font-[400] tracking-[-2px] md:tracking-[-4px] '>
          Our Projects
        </h2>
        <div className='flex items-center gap-[3px] bg-[#e9e9e9] w-fit h-fit pl-[10px] p-[4px] rounded-full'>
          <p className='tracking-tighter text-[12px] md:text-[15px] '>
            Press Next
          </p>
          <BsArrowRightShort size={18} className='mt-[1px]' />
        </div>
      </div>
      <div>
        <Carousel responsive={responsive}>
          {OurProjectsData.map((e, index) => (
            <OurProjectsItems {...e} key={index} />
          ))}
          <div>
            <div className='flex flex-col text-[35px] md:text-[60px] tracking-tighter leading-[50px] md:leading-[80px] py-2'>
              <p className='flex items-center gap-1 md:gap-4 text-gray-400'>
                Home
                <AiOutlineArrowRight className='size-7 mt-1 md:size-14 md:mt-4' />
              </p>
              <Link
                className='flex items-center gap-2 hover:text-gray-400 transition-colors duration-300 ease-in-out '
                href='/Services'
              >
                Services
                <AiOutlineArrowRight className='size-7 mt-1 md:size-14 md:mt-4' />
              </Link>
              <Link
                className='flex items-center gap-4 hover:text-gray-400 transition-colors duration-300 ease-in-out '
                href='/About'
              >
                About
                <AiOutlineArrowRight className='size-7 mt-1 md:size-14 md:mt-4' />
              </Link>
              <Link
                className='flex items-center gap-4 hover:text-gray-400 transition-colors duration-300 ease-in-out '
                href='/Teams'
              >
                Teams
                <AiOutlineArrowRight className='size-7 mt-1 md:size-14 md:mt-4' />
              </Link>
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  )
}

export default OurProjects
