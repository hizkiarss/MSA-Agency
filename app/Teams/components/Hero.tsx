import React from "react"
import imgtop from "@/public/Teams/imgtop.png"
import Image from "next/image"
import { useState } from "react"

const Hero = () => {
  const [loading, setLoading] = useState(true)

  const handleImageLoad = () => {
    setLoading(false)
  }

  return (
    <section className='px-[15px] md:px-[100px] md:py-[100px]'>
      <div className='grid grid-rows md:gap-8'>
        <h2 className='text-[40px] md:text-[100px] tracking-tighter leading-[90px]  '>
          Meet Our Teams
        </h2>
        <div className='flex text-end justify-end'>
          <p className='text-[12px] md:text-[20px] w-1/2 tracking-tighter '>
            Meet the professionals who make your wishes happen.
          </p>
        </div>
      </div>

      <div className=' flex flex-col md:grid md:grid-cols-8 items-center gap-10 mt-[40px]'>
        <p className='col-span-2 text-[12px] order-1 md:order-2 tracking-tight text-balance'>
          Welcome to MSA. Our talented team of experts in web development,
          design, marketing, and content creation is dedicated to driving your
          digital success.
        </p>

        <picture>
          <source
            srcSet='Teams/mobileteamshero.png'
            media='(max-width: 600px)'
          />
          <source srcSet='About/milestone.png' media='(min-width: 601px)' />
          <Image
            src={imgtop}
            alt='imgtop.png'
            layout='responsive'
            className={`col-span-6 h-[300px] object-cover order-2 md:order-1 ${
              loading ? "" : ""
            }`}
            placeholder='blur'
          />
        </picture>
      </div>
    </section>
  )
}

export default Hero
