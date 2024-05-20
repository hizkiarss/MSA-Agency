import React from "react"
import "react-multi-carousel/lib/styles.css"
import Herowebp from "@/public/Homepage/hero.webp"
import Image from "next/image"
import Link from "next/link"

const Hero = () => {
  return (
    <div className='mb-[45px] md:mb-[80px] px-[15px] md:px-[30px]'>
      <div className='flex justify-center bg-black rounded-tr-[80px] rounded-bl-[80px]'>
        <Image
          src={Herowebp}
          alt='hero.webp'
          className='h-[400px] object-cover object-center rounded-tr-[80px] md:h-[550px]'
          loading='lazy'
        />
      </div>

      <h1 className=' text-[35px] md:text-[65px] leading-[40px] md:leading-[70px] font-[400] tracking-[-2px] md:tracking-[-3px] pt-4 md:pt-8  '>
        We elevate brands worldwide: <br />
        Complex solutions for web design & branding
      </h1>

      <div className='flex flex-col md:flex-row items-start mt-5 gap-[15px] md:gap-[200px] tracking-tight '>
        <p className='text-[13px] text-gray-400 text-balance'>
          Brand strategies & identities, app design, websites, packaging, <br />
          social media marketing design, art-direction
        </p>
        <Link
          href='/Services#contact'
          className='bg-black px-4 py-1 rounded-full text-white text-[13px]'
        >
          Start a project
        </Link>
      </div>
    </div>
  )
}

export default Hero
