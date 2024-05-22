import React from "react"
import Image from "next/image"
import hero from "@/public/About/hero.jpg"
import Link from "next/link"

const Hero = () => {
  return (
    <section className='px-[15px] md:px-[30px] pt-[50px] md:py-[100px]'>
      <div className='flex flex-col gap-5 md:gap-10 relative'>
        <h1 className='tracking-tighter text-[40px] md:text-[70px] leading-[40px] md:leading-[70px]'>
          MSA Design Space • <br />
          is more than just a design agency.
        </h1>

        <Image
          src={hero}
          alt='project6.png'
          layout='responsive'
          className=' md:!h-[600px] w-full object-center object-cover h-[300px]'
        />

        <div className='w-full'>
          <p className='text-[35px] md:text-[55px] tracking-[-2px] leading-[40px] md:leading-[65px] w-full'>
            We&#39;re your partners in elevating brands worldwide, offering
            comprehensive solutions for web design and branding.
          </p>
        </div>
      </div>

      <div className='md:grid md:grid-cols-8 mt-5'>
        <div className='col-span-3'></div>
        <div className='col-span-5 text-[13px] md:grid md:grid-cols md:gap-[14px] tracking-tight text-gray-400 md:pr-8'>
          <p className='mb-6 md:mb-0 leading-[18px]'>
            With a passion for creativity and a commitment to excellence, we
            bring your vision to life, ensuring every detail is meticulously
            crafted to resonate with your audience.
          </p>
          <p className='mb-6 md:mb-0 leading-[18px]'>
            At the core of our agency is a belief in the power of design to
            transform businesses. We combine minimalist aesthetics with bold,
            innovative ideas to create visually striking solutions that leave a
            lasting impression. Whether you&#39;re a startup looking to
            establish your brand identity or an established business seeking to
            refresh your online presence, we have the expertise and creativity
            to bring your vision to life.
          </p>
          <Link
            href='services#contact'
            className='w-fit bg-black rounded-full px-4 py-[6px] text-[12px] text-white'
          >
            Start A Project
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Hero
