import React from "react"
import { AiOutlineArrowRight } from "react-icons/ai"
import Link from "next/link"

const NavBar = () => {
  return (
    <section>
      <div className='md:grid-cols-3 md:grid md:gap-[300px] px-[15px] md:px-[30px] pt-[15px] md:pt-[50px] pb-[60px] md:pb-[130px] items-start bg-[#F5F5F5]'>
        <p className='md:col-span-1 tracking-tighter text-[12px] md:text-[14px] md:mt-4 mb-8 md:mb-0 '>
          Creative Branding & Web Design Agency
        </p>
        <div className='grid grid-cols-3 md:col-span-2'>
          <div className='col-span-2'>
            <div className='flex flex-col text-[35px] md:text-[60px] tracking-tighter leading-[45px] md:leading-[80px]'>
              <Link
                className='flex items-center gap-2 hover:text-gray-400 transition-colors duration-300 ease-in-out '
                href='/'
              >
                Home
                <AiOutlineArrowRight className='size-8 md:size-[55px]' />
              </Link>

              <Link
                className='flex items-center gap-2 hover:text-gray-400 transition-colors duration-300 ease-in-out '
                href='/services'
              >
                Services
                <AiOutlineArrowRight className='size-8 md:size-[55px]' />
              </Link>
              <Link
                className='flex items-center gap-4 hover:text-gray-400 transition-colors duration-300 ease-in-out '
                href='/about'
              >
                About
                <AiOutlineArrowRight className='size-8 md:size-[55px]' />
              </Link>
              <Link
                className='flex items-center gap-4 hover:text-gray-400 transition-colors duration-300 ease-in-out '
                href='/teams'
              >
                Teams
                <AiOutlineArrowRight className='size-8 md:size-[55px]' />
              </Link>
            </div>
          </div>

          <div className='items-end md:items-start col-span-1 flex flex-col gap-[10px] pt-[13px] text-[12px] md:text-[16px] leading-[20px] md:leading-[30px] tracking-tight text-black'>
            <Link
              className=' hover:text-black transition-colors duration-300'
              href='https://api.whatsapp.com/send/?phone=358408537203&text&app_absent=0'
              target='_blank'
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
              href='https://www.instagram.com/msadesign.space'
              target='_blank'
            >
              Instagram
            </Link>
            <Link
              className=' hover:text-black transition-colors duration-300'
              href='https://www.behance.net/marinaa_suvorova?tracking_source=search_projects%7Cmsa'
              target='_blank'
            >
              Behance
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NavBar
