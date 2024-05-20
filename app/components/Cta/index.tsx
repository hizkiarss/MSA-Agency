import { AiOutlineInstagram } from "react-icons/ai"
import { AiOutlineWhatsApp } from "react-icons/ai"
import React from "react"
import Link from "next/link"
import Image from "next/image"
import cta from "@/public/Homepage/cta.jpg"
import Card from "@/components/Card"

const Cta = () => {
  return (
    <Card>
      <div className='bg-[#F5F5F5] shadow-md pb-10'>
        <div className='px-[15px] md:px-[30px] rounded-b-[50px] bg-white pb-14 md:pb-28 shadow-md'>
          <div className='flex flex-col md:flex md:flex-row md:justify-between items-center md:items-start gap-5 md:gap-0'>
            <div className='col-span-1 order-2 md:order-1 flex flex-col items-center md:items-start'>
              <h2 className='text-[30px] md:text-[55px] tracking-tighter leading-[30px] md:leading-[60px] text-center md:text-start '>
                A 5 minute call, <br />
                and you&#39;ll see the
                <span className='text-gray-400'> vision</span>.
              </h2>
              <Link
                href='Services#contact'
                className='text-[12px] md:text-[15px] bg-black text-white tracking-tighter rounded-full black my-5 md:my-7 py-2 md:py-3 px-4 md:px-6'
              >
                Contact Us Now
              </Link>
            </div>

            <div className='flex gap-1 md:gap-4 col-span-1 order-1 md:order-2'>
              <Image
                className='w-[80px] md:w-[200px] h-[80px] md:h-[200px] object-cover'
                src={cta}
                alt='waliking man.jpg'
              />
              <Image
                className='w-[80px] md:w-[200px] h-[80px] md:h-[200px] object-cover rounded-tr-full'
                src={cta}
                alt='waliking man.jpg'
              />
              <Image
                className='w-[80px] md:w-[200px] h-[80px] md:h-[200px] object-cover'
                src={cta}
                alt='waliking man.jpg'
              />
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}

export default Cta
