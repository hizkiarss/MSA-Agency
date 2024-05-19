import React from "react"
import WhyChooseUsItems from "./WhyChooseUsItems"
import Link from "next/link"
import WhyChooseUsData from "@/utils/AboutData/WhyChooseUsData"

const WhyChooseUs = () => {
  return (
    <div className='px-[15px] md:px-[30px] my-[100px] md:mt-[100px] md:mb-[200px]'>
      <div className=' md:grid md:grid-cols-8 tracking-tighter mb-[30px] md:mb-[100px]'>
        <p className='mb-6 md:mb-0 col-span-3 tracking-tighter'>
          Why Choose Us?
        </p>
        <h2 className='col-span-5 text-[35px] md:text-[55px] leading-[38px] md:leading-[70px] tracking-tighter '>
          We take on the complexities of design and branding so you can focus on
          what you do best – running your business.
        </h2>
      </div>

      <div className='grid grid-cols border-b-2 border-gray-200 '>
        {WhyChooseUsData.map((e, i) => {
          return <WhyChooseUsItems {...e} key={i} />
        })}
      </div>

      <div className='md:grid grid-cols-8  mt-10'>
        <div className='col-span-3'></div>
        <div className='col-span-3'>
          <Link
            href={"/Services"}
            className='px-4 md:px-5 py-1 text-[12px] md:text-[16px] bg-black text-white rounded-full w-fit tracking-tighter'
          >
            Check Services and Process{" "}
          </Link>
        </div>
        <div className='col-span-2'></div>
      </div>
    </div>
  )
}

export default WhyChooseUs
