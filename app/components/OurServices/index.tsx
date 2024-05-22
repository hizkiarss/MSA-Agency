import { BsFillArrowUpRightCircleFill } from "react-icons/bs"
import React from "react"
import OurServicesItems from "./OurServicesItems"
import OurServicesData from "@/utils/HomepageData/OurServicesData"
import Image from "next/image"
import brandingpng from "@/public/Homepage/OurProjects/project4.png"
import Link from "next/link"
import Card from "@/components/Card"

const OurServices = () => {
  return (
    <Card>
      <section className='py-[40px] md:py-[150px] px-[15px] md:px-[30px]'>
        <div className=' flex flex-col items-center '>
          <h2 className='text-[35px] md:text-[55px] leading-[35px] md:leading-[70px] font-[400] tracking-[-2px] md:tracking-[-4px] mb-2 md:mb-4'>
            Explore <span className='text-gray-400 '>Our Services</span> For you
          </h2>
          <p className='mx-[3px] md:mx-0 tracking-tighter md:tracking-tight text-pretty text-[12px] md:text-[18px] md:text-center '>
            Embark on a Design Journey: Discovering Tailored Solutions Infused
            with Passion, Precision,and <br /> Purpose to Shape Tomorrow&#39;s
            Experiences
          </p>
        </div>

        <div className='bg-black gap-1 md:gap-8 mt-6 md:mt-12 grid md:grid-cols-3 py-7 md:py-14 px-5 md:px-10 text-white'>
          <Image
            src={brandingpng}
            alt="branding.png className='rounded-[20px]'"
          />
          <div className='flex flex-col justify-between py-4 '>
            <div>
              <p className=' text-[10px] w-full md:text-[20px]  tracking-tighter'>
                Most Popular
              </p>
              <p className=' text-[20px] md:text-[50px] tracking-tighter'>
                Branding Strategies
              </p>
            </div>
            <p className='text-[10px] md:text-[20px]'>
              Sit back and relax while we plan out your long term marketing
              strategy planning.
            </p>
          </div>
          <div className='flex justify-start md:justify-center items-end'>
            <Link
              href='/services#detail'
              className='bg-white flex items-center  gap-[10px] md:gap-4 tracking-tighter rounded-full w-fit h-fit px-6 md:px-8 py-[4px] md:py-2 text-[15px] md:text-[25px] text-black'
            >
              Learn More
              <BsFillArrowUpRightCircleFill className='size-6 md:size-14' />
            </Link>
          </div>
        </div>
        <Card>
          <div className='grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 mt-10'>
            {OurServicesData.map((e, index) => {
              return <OurServicesItems {...e} key={index} />
            })}
          </div>
        </Card>
      </section>
    </Card>
  )
}

export default OurServices
