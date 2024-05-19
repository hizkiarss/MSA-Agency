"use client"
import { AiOutlineArrowRight } from "react-icons/ai"
import React, { useEffect } from "react"
import TestimonialsData from "@/utils/HomepageData/TestimonialsData"
import TestimonialsItems from "./TestimonialsItems"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import Link from "next/link"

const Testimonials = () => {
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
    <section className='px-[30px] mb-[55px] md:mb-[130px] items-center flex flex-col md:grid md:grid-cols-2 gap-5'>
      <div className='col-span-1 grid grid-cols-1 gap-16 h-full mt-8'>
        <div>
          <Carousel responsive={responsive}>
            {TestimonialsData.map((e, index) => {
              return <TestimonialsItems {...e} key={index} />
            })}
          </Carousel>
        </div>
      </div>

      <div className='col-span-1 '>
        <h2 className='text-[35px] md:text-[70px] tracking-[-2px] md:tracking-tighter h-fit leading-[35px] md:leading-[70px] md:mb-[20px] '>
          <span className='text-gray-400'>We never lie.</span>
          <br /> Hear What They Said.
        </h2>
        <div className='flex flex-col gap-[10px] items-start py-3'>
          <p className='text-[12px] md:text-[15px] tracking-tighter '>
            Discover how MSA has transformed businesses and captivated audiences
            with our innovative digital strategies. Hear from tech experts and
            business owners who have experienced the remarkable impact of our
            services firsthand.
          </p>
          <Link
            href='About'
            className='bg-black text-white px-3 md:px-6 py-2 md:py-3 flex items-center gap-2 text-[10px] md:text-[15px] rounded-[16px]'
          >
            Learn More <AiOutlineArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
